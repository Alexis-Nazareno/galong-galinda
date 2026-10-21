import { useState, useEffect } from "react";
import Papa from "papaparse";
import LikeButton from "../components/LikeButton";

const normalizeEventStatus = (status = "") =>
  status
    .trim()
    .toLowerCase()
    .replace(/[\s_-]/g, "");
const formatEventCategory = (category = "") => {
  const normalized = category
    .trim()
    .toLowerCase()
    .replace(/[\s_-]/g, "");
  if (normalized === "pedays") return "PE Days";
  if (normalized === "officiating") return "Officiating";
  if (normalized === "seminarworkshops") return "Seminars & Workshops";
  return category
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const featuredUpcomingEvent = {
  eventTitle: "IBM Days 2026: MANAWARI",
  status: "Special Event",
  eventDate: "October 28–30, 2026",
  eventTime:
    "8:00 A.M. – 5:00 P.M. (Suggested schedule; subject to confirmation)",
  venue: "City College of Angeles",
  image: "/gallery/ibm-days-manawari.jpg",
  description:
    "Get ready for IBM Days 2026: MANAWARI, happening on October 28–30, 2026, at the City College of Angeles! This three-day celebration organized by the Institute of Business and Management brings students together for an exciting experience filled with engaging activities, talent showcases, entertainment, and opportunities to learn and connect. Featuring special performances from Cup of Joe, Adie, and The Band Summers, the event celebrates student creativity, unity, and school spirit. Join us as we make unforgettable memories, discover talents, strengthen friendships, and celebrate the vibrant community of IBM!",
};

const featuredGalleryEvents = [
  {
    eventId: "seminars-and-officiating",
    eventTitle: "Seminar Workshops and Sports Officiating",
    eventDesc:
      "Practical learning experiences that build participants’ confidence and skills through technical training, demonstrations, and officiating practice.",
    category: "Seminars & Workshops",
    photos: [
      {
        imgSrc: "/gallery/officiating.jpg",
        photoTitle: "Referee Delegation",
        photoDesc:
          "Participants develop officiating skills through technical training and demonstrations.",
      },
      {
        imgSrc: "/gallery/so%20(6).jpg",
        photoTitle: "Seminar-Workshops",
        photoDesc:
          "Facilitators share interactive learning activities and officiating demonstrations.",
      },
      {
        imgSrc: "/gallery/so%20(5).jpg",
        photoTitle: "Sports Officiating",
        photoDesc:
          "Participants take part in practical sports officiating discussions.",
      },
    ],
    videos: [],
  },
];

export default function Events() {
  const [activeEventTab, setActiveEventTab] = useState("upcoming");
  const [activeGalleryCategory, setActiveGalleryCategory] = useState("all");
  const [galleryEvents, setGalleryEvents] = useState(featuredGalleryEvents);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. PASTE YOUR PUBLISHED "UPCOMING" TAB CSV LINK HERE:
    const upcomingCsvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSowJhCiO6-TjuZRK0Iho_eaLfsZBey_2lrFYMCuf88hc91ogE6_K7jv9QurxlVkHonQAu2dT9bUsEQ/pub?gid=1373412542&single=true&output=csv";

    // 2. PASTE YOUR PUBLISHED "EVENTS" TAB CSV LINK HERE:
    const eventsCsvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSowJhCiO6-TjuZRK0Iho_eaLfsZBey_2lrFYMCuf88hc91ogE6_K7jv9QurxlVkHonQAu2dT9bUsEQ/pub?gid=0&single=true&output=csv";

    // Fetch Upcoming Events
    Papa.parse(upcomingCsvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const validUpcoming = results.data.filter(
          (item) => item.eventTitle && item.eventDate,
        );
        setUpcomingEvents(validUpcoming);
      },
      error: (err) => console.error("Error fetching upcoming events:", err),
    });

    // Fetch Past Gallery Events
    Papa.parse(eventsCsvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const validData = results.data.filter((item) => item.eventId);
        const seminarWorkshopPhotos = [];
        const groupedEventsMap = validData.reduce((acc, row) => {
          if (!acc[row.eventId]) {
            acc[row.eventId] = {
              eventId: row.eventId,
              eventTitle: row.eventTitle,
              eventDesc:
                row.eventDesc || row.eventDescription || row.description,
              eventDate: row.eventDate || row.date,
              eventVenue: row.eventVenue || row.venue || row.location,
              category: formatEventCategory(
                row.eventCategory || row.category || "Other Events",
              ),
              photos: [],
              videos: [],
            };
          }
          if (row.imgSrc) {
            const photo = { ...row };
            if (photo.photoTitle === "Torch Relay Kickoff") {
              photo.photoTitle = "Volleyball Seminar Workshops";
              photo.photoDesc =
                "Participants and organizers gather during a volleyball officiating seminar workshop.";
              seminarWorkshopPhotos.push(photo);
            } else if (photo.photoTitle === "Mass Aerobics") {
              photo.photoTitle = "PE Days Zumba Competition";
              photo.photoDesc =
                "Participants perform a coordinated Zumba routine as part of the PE Days competition.";
              acc[row.eventId].photos.push(photo);
            } else {
              acc[row.eventId].photos.push(photo);
            }
          }
          if (row.videoSrc || row.videoEmbed || row.videoUrl || row.videoLink) {
            acc[row.eventId].videos.push({
              ...row,
              mediaSrc: row.videoSrc,
              videoLink: row.videoUrl || row.videoLink,
            });
          }
          return acc;
        }, {});

        const sheetEvents = Object.values(groupedEventsMap).filter(
          (event) => event.photos.length > 0 || event.videos.length > 0,
        );
        const featuredEventIds = new Set(
          featuredGalleryEvents.map((event) => event.eventId),
        );
        setGalleryEvents([
          ...featuredGalleryEvents.map((event) =>
            event.eventId === "seminars-and-officiating"
              ? { ...event, photos: [...event.photos, ...seminarWorkshopPhotos] }
              : event,
          ),
          ...sheetEvents.filter(
            (event) => !featuredEventIds.has(event.eventId),
          ),
        ]);
        setIsLoading(false);
      },
      error: (error) => {
        console.error("Error fetching events spreadsheet data:", error);
        setIsLoading(false);
      },
    });
  }, []);

  const ongoingEvents = upcomingEvents.filter((item) => {
    const status = normalizeEventStatus(item.status);
    return status.includes("ongoing") || status.includes("inprogress");
  });
  const scheduledEvents = upcomingEvents.filter((item) => {
    const status = normalizeEventStatus(item.status);
    return (
      !status.includes("ongoing") &&
      !status.includes("inprogress") &&
      !status.includes("previous") &&
      !status.includes("past") &&
      !status.includes("completed")
    );
  });
  const visibleScheduledEvents = [
    featuredUpcomingEvent,
    ...scheduledEvents.filter(
      (item) =>
        item.eventTitle !== "Inter-Collegiate Officiating Seminar & Workshop",
    ),
  ];
  const eventTabs = [
    { id: "upcoming", label: "Upcoming Events", icon: "event_upcoming" },
    { id: "ongoing", label: "Ongoing Events", icon: "event" },
    { id: "previous", label: "Previous Events", icon: "history" },
  ];
  const visibleSchedule =
    activeEventTab === "ongoing" ? ongoingEvents : scheduledEvents;
  const galleryCategories = [
    "all",
    ...new Set(galleryEvents.map((event) => event.category)),
  ];
  const visibleGalleryEvents =
    activeGalleryCategory === "all"
      ? galleryEvents
      : galleryEvents.filter(
          (event) => event.category === activeGalleryCategory,
        );

  return (
    <main>
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-16 lg:py-24 border-b border-surface-container-high/60">
        {/* Atmospheric Dual-Energy Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3 max-w-4xl">
            <h1 className="font-display-hero text-4xl lg:text-[64px] lg:leading-[72px] text-on-surface font-bold tracking-tight">
              Gallery &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x drop-shadow-sm">
                Events
              </span>
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed mt-2">
              Explore authentic photo documentation from{" "}
              <span className="text-primary font-semibold">
                Galóng Galínda’s
              </span>{" "}
              institutional activities, from PE Days and community events to
              educational seminars, workshops, and sports officiating clinics.
              Our gallery captures the learning, teamwork, energy, and memorable
              experiences shared by participants throughout every event.
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-surface-container-low py-10 lg:py-14"
        aria-labelledby="event-teaser-title"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden="true"
              >
                movie
              </span>
              Event Teaser
            </span>
            <h2
              id="event-teaser-title"
              className="mt-3 font-headline text-2xl font-bold text-on-surface lg:text-3xl"
            >
              IBM Event Teaser
            </h2>
            <p className="mt-3 text-base leading-relaxed text-on-surface-variant lg:text-lg">
              Get a preview of Galóng Galínda’s event highlights.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-black shadow-lg lg:col-span-8">
            <video
              className="aspect-video w-full"
              src="/gallery/ibm-teaser.mp4"
              controls
              preload="metadata"
              playsInline
              aria-label="IBM event teaser video"
            >
              Your browser does not support embedded videos.
            </video>
          </div>
        </div>
      </section>

      {/* SECTION: EVENT CALENDAR */}
      <section
        className="w-full py-12 lg:py-16 bg-surface-container-low border-b border-surface-container-high/60"
        id="section-upcoming"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-badge text-[10px] uppercase tracking-wider font-bold self-start">
                <span className="material-symbols-outlined text-[14px]">
                  event
                </span>
                Events Calendar
              </div>
              <h2 className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">
                {eventTabs.find((tab) => tab.id === activeEventTab)?.label}
              </h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Browse upcoming, ongoing, and previous Galóng Galínda
                activities.
              </p>
            </div>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter events by status"
          >
            {eventTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={activeEventTab === tab.id}
                onClick={() => setActiveEventTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-label-md text-sm font-semibold transition-colors ${activeEventTab === tab.id ? "bg-primary text-on-primary" : "bg-surface-container-lowest text-on-surface-variant hover:text-primary"}`}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                >
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          {activeEventTab !== "previous" ? (
            <div
              key={activeEventTab}
              className="tab-transition-enter grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {(activeEventTab === "upcoming"
                ? visibleScheduledEvents
                : visibleSchedule
              ).map((item, index) => (
                <article
                  key={item.eventTitle || index}
                  className={`flex flex-col overflow-hidden rounded-2xl border border-surface-container-high/60 bg-surface-container-lowest shadow-sm transition-all hover:shadow-md ${item.image ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-12" : ""}`}
                >
                  {item.image && (
                    <div className="flex h-96 items-center justify-center overflow-hidden bg-surface-container-low p-3 lg:col-span-5 lg:h-[32rem]">
                      <img
                        src={item.image}
                        alt="IBM Days 2026: MANAWARI event poster"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div
                    className={`flex flex-1 flex-col gap-5 p-6 ${item.image ? "featured-event-panel lg:col-span-7 lg:justify-center lg:p-8" : ""}`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full bg-secondary/10 px-3 py-1 font-label-badge text-[10px] font-bold uppercase text-secondary">
                          {item.status || "Upcoming"}
                        </span>
                        <span className="flex items-center gap-1 font-label text-xs text-on-surface-variant">
                          <span
                            className="material-symbols-outlined text-[14px] text-primary"
                            aria-hidden="true"
                          >
                            calendar_today
                          </span>
                          {item.eventDate}
                        </span>
                      </div>
                      <h3 className="font-headline text-lg font-bold text-on-surface">
                        {item.eventTitle}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                        {item.description || item.desc}
                      </p>
                    </div>

                    <div className="mt-1 flex flex-col gap-3 border-t border-surface-container-high/50 pt-4">
                      <div className="flex flex-col gap-2 text-xs font-label text-on-surface-variant">
                        {item.eventTime && (
                          <span className="flex items-start gap-1">
                            <span
                              className="material-symbols-outlined text-[14px]"
                              aria-hidden="true"
                            >
                              schedule
                            </span>
                            <span>{item.eventTime}</span>
                          </span>
                        )}
                        {item.venue && (
                          <span className="flex items-center gap-1 font-semibold text-on-surface">
                            <span
                              className="material-symbols-outlined text-[14px] text-tertiary"
                              aria-hidden="true"
                            >
                              location_on
                            </span>
                            {item.venue}
                          </span>
                        )}
                      </div>
                      {item.ctaLink && (
                        <a
                          href={item.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary py-2.5 text-center font-label-md text-white shadow-sm transition-colors hover:bg-primary-container"
                        >
                          <span>View Details</span>
                          <span
                            className="material-symbols-outlined text-[16px]"
                            aria-hidden="true"
                          >
                            open_in_new
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}

              {activeEventTab === "upcoming" &&
                visibleScheduledEvents.length === 0 &&
                !isLoading && (
                  <div className="col-span-full py-12 text-center text-on-surface-variant font-body-sm bg-surface-container-lowest rounded-2xl border border-surface-container-high/60">
                    No upcoming events scheduled at the moment. Please check
                    back soon!
                  </div>
                )}
              {activeEventTab === "ongoing" &&
                visibleSchedule.length === 0 &&
                !isLoading && (
                  <div className="col-span-full py-12 text-center text-on-surface-variant font-body-sm bg-surface-container-lowest rounded-2xl border border-surface-container-high/60">
                    There are no ongoing events listed at the moment.
                  </div>
                )}
            </div>
          ) : (
            <div
              key={activeGalleryCategory}
              className="tab-transition-enter flex flex-col gap-8"
            >
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter previous events by category"
              >
                {galleryCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeGalleryCategory === category}
                    onClick={() => setActiveGalleryCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${activeGalleryCategory === category ? "bg-secondary text-on-secondary" : "bg-surface-container-lowest text-on-surface-variant hover:text-secondary"}`}
                  >
                    {category === "all" ? "All Categories" : category}
                  </button>
                ))}
              </div>

              {galleryEvents.length === 0 && !isLoading && (
                <div className="py-12 text-center text-on-surface-variant font-body-sm bg-surface-container-lowest rounded-2xl border border-surface-container-high/60">
                  No previous events have been added yet.
                </div>
              )}
              {visibleGalleryEvents.length === 0 &&
                galleryEvents.length > 0 && (
                  <div className="py-12 text-center text-on-surface-variant font-body-sm bg-surface-container-lowest rounded-2xl border border-surface-container-high/60">
                    No previous events in this category yet.
                  </div>
                )}
              {visibleGalleryEvents.map((event) => (
                <article
                  key={event.eventId}
                  className="rounded-2xl border border-surface-container-high/60 bg-surface-container-lowest p-5 shadow-sm sm:p-6"
                >
                  <div className="mb-5">
                    <span className="mb-2 inline-flex rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                      {event.category}
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-headline text-xl font-bold text-on-surface">
                        {event.eventTitle}
                      </h3>
                    </div>
                    {event.eventDesc && (
                      <p className="mt-2 font-body text-sm text-on-surface-variant leading-relaxed">
                        {event.eventDesc}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-surface-container-high/60 pt-3 text-xs text-on-surface-variant">
                      {event.eventDate && (
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className="material-symbols-outlined text-[15px] text-primary"
                            aria-hidden="true"
                          >
                            calendar_today
                          </span>
                          <span>
                            <strong className="text-on-surface">Date:</strong>{" "}
                            {event.eventDate}
                          </span>
                        </span>
                      )}
                      {event.eventVenue && (
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className="material-symbols-outlined text-[15px] text-tertiary"
                            aria-hidden="true"
                          >
                            location_on
                          </span>
                          <span>
                            <strong className="text-on-surface">Venue:</strong>{" "}
                            {event.eventVenue}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                  {event.photos.length > 0 && (
                    <div className="mb-6">
                      <h4 className="mb-3 flex items-center gap-2 font-label-lg text-label-lg font-bold text-on-surface">
                        <span
                          className="material-symbols-outlined text-[18px] text-primary"
                          aria-hidden="true"
                        >
                          photo_library
                        </span>
                        Event Photos
                      </h4>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {event.photos.map((photo, index) => (
                          <article
                            key={`${event.eventId}-photo-${index}`}
                            className="flex flex-col overflow-hidden rounded-xl border border-surface-container-high/60 bg-surface-container-lowest"
                          >
                            <div className="relative h-48 overflow-hidden bg-surface-container">
                              <img
                                alt={photo.photoTitle || event.eventTitle}
                                className="h-full w-full object-cover"
                                src={photo.imgSrc}
                                loading="lazy"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-4 p-4">
                              {photo.photoTitle && (
                                <h4 className="font-label-lg font-bold text-on-surface">
                                  {photo.photoTitle}
                                </h4>
                              )}
                              {(photo.eventDate ||
                                photo.date ||
                                event.eventDate) && (
                                <p className="mt-1 text-xs text-on-surface-variant">
                                  {photo.eventDate ||
                                    photo.date ||
                                    event.eventDate}
                                </p>
                              )}
                              {photo.photoDesc && (
                                <p className="mt-2 font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                  {photo.photoDesc}
                                </p>
                              )}
                              <LikeButton
                                label={`Like photo: ${photo.photoTitle || event.eventTitle}`}
                                icon="favorite"
                                storageKey={`event-photo-${event.eventId}-${index}`}
                                className="mt-auto self-start"
                              />
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  )}
                  {event.videos.length > 0 && (
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-label-lg text-label-lg font-bold text-on-surface">
                        <span
                          className="material-symbols-outlined text-[18px] text-secondary"
                          aria-hidden="true"
                        >
                          video_library
                        </span>
                        Event Videos
                      </h4>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {event.videos.map((video, index) => (
                          <article
                            key={`${event.eventId}-video-${index}`}
                            className="overflow-hidden rounded-xl border border-surface-container-high/60 bg-surface-container-lowest"
                          >
                            {video.videoEmbed ? (
                              <iframe
                                src={video.videoEmbed}
                                title={video.videoTitle || event.eventTitle}
                                className="aspect-video w-full bg-black"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            ) : video.videoSrc ? (
                              <video
                                src={video.videoSrc}
                                className="aspect-video w-full bg-black"
                                controls
                                preload="metadata"
                                playsInline
                                aria-label={
                                  video.videoTitle || event.eventTitle
                                }
                              >
                                Your browser does not support embedded videos.
                              </video>
                            ) : (
                              <a
                                href={video.videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex aspect-video items-center justify-center gap-3 bg-inverse-surface px-4 text-center font-semibold text-white transition-colors hover:bg-primary"
                              >
                                <span
                                  className="material-symbols-outlined text-4xl"
                                  aria-hidden="true"
                                >
                                  play_circle
                                </span>
                                <span>
                                  {video.videoTitle || "Watch event video"}
                                </span>
                              </a>
                            )}
                            {(video.videoTitle ||
                              video.videoDesc ||
                              video.videoDescription) && (
                              <div className="p-4">
                                {video.videoTitle && (
                                  <h5 className="font-label-lg font-bold text-on-surface">
                                    {video.videoTitle}
                                  </h5>
                                )}
                                {(video.videoDesc ||
                                  video.videoDescription) && (
                                  <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                                    {video.videoDesc || video.videoDescription}
                                  </p>
                                )}
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
