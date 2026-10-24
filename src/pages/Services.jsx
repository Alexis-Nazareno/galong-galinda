import { useState, useEffect } from "react";
import Papa from "papaparse";
import { trackNetworkActivity } from "../utils/networkActivity";
import ZoomableImage from "../components/ZoomableImage";

const COVER_GROUPS = [
  {
    title: "Sports Officiating",
    note: "Trained officials for fair, well-run games.",
    icon: "sports",
    accent: "secondary",
    items: [
      ["Basketball", "sports_basketball", "Certified officials who keep every quarter fair, fast, and safe for the players."],
      ["Volleyball", "sports_volleyball", "Referees and line judges for school leagues, intramurals, and friendly matches."],
      ["Swimming", "pool", "Officiating for swim meets, from start signals to stroke and turn judging."],
      ["Badminton", "sports_tennis", "Umpires and service judges for singles and doubles tournaments."],
    ],
  },
  {
    title: "Event Organizing",
    note: "Planning and running school activities end to end.",
    icon: "celebration",
    accent: "primary",
    items: [
      ["PE Days", "directions_run", "Games, schedules, and logistics for a full day of physical education fun."],
      ["Culminating Activities", "emoji_events", "Program flow, awarding, and coordination for end-of-term celebrations."],
      ["School Events", "school", "Support for campus events, from planning and staging to day-of operations."],
    ],
  },
];
export default function Services() {
  const [dynamicServices, setDynamicServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCover, setActiveCover] = useState({});

  useEffect(() => {
    const sheetCsvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSowJhCiO6-TjuZRK0Iho_eaLfsZBey_2lrFYMCuf88hc91ogE6_K7jv9QurxlVkHonQAu2dT9bUsEQ/pub?gid=1327649785&single=true&output=csv";

    const finishServicesRequest = trackNetworkActivity();
    Papa.parse(sheetCsvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        finishServicesRequest();
        // Filter out any rows without a title
        const validRows = results.data.filter(
          (row) => row.title && row.imageMain,
        );
        setDynamicServices(validRows);
        setIsLoading(false);
      },
      error: (error) => {
        finishServicesRequest();
        console.error("Error fetching services spreadsheet data:", error);
        setIsLoading(false);
      },
    });
  }, []);

  return (
    <main>
      <div className="flex flex-col w-full">
        <section className="relative w-full bg-surface-container-lowest overflow-hidden py-16 lg:py-24 border-b border-surface-container-high/50">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                <h1 className="font-display-hero text-4xl lg:text-[64px] lg:leading-[72px] text-on-surface font-bold tracking-tight">
                  Sports{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x drop-shadow-sm bg-[length:200%_200%]">
                    Services
                  </span>
                </h1>
                <div className="font-body-lg text-lg text-on-surface-variant leading-relaxed mt-4">
                  <p>
                    Galóng Galínda provides sports officiating for basketball,
                    volleyball, swimming, and badminton. We also organize PE
                    Days, culminating activities, and school events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: OFFICIATING SERVICES */}
        <section className="w-full py-space-xl bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-24 lg:gap-32">
            {/* ITEM 1: Sports Officiating */}
            <div
              id="officiating"
              className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center scroll-mt-32"
            >
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div>
                  <h2 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-on-surface">
                    Officiating Services
                  </h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  We provide sports officiating for basketball, volleyball,
                  swimming, and badminton. Our team can also support event
                  organizing for PE Days, culminating activities, and school
                  events.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <ZoomableImage
                  alt="Student team at a school sports festival"
                  wrapperClassName="rounded-2xl shadow-md sm:col-span-2 h-64 bg-surface-container"
                  className="h-full w-full object-cover object-[center_62%]"
                  src="/gallery/volleyball-officiating-session.jpeg"
                />
                <ZoomableImage
                  alt="Volleyball officiating during a school sports event"
                  wrapperClassName="rounded-xl shadow-sm h-40 bg-surface-container"
                  className="w-full h-full object-cover"
                  src="/gallery/basketball-officiating-session.jpeg"
                />
                <ZoomableImage
                  alt="Basketball game in progress at Pampanga People's Gym"
                  wrapperClassName="h-40 rounded-xl bg-surface-container shadow-sm"
                  className="h-full w-full object-cover"
                  src="/gallery/basketball-court-game.jpeg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE COVER */}
        <section className="relative w-full overflow-hidden border-t border-surface-container-high/60 bg-surface-container-low py-space-xl">
          <div className="mx-auto max-w-7xl px-margin-mobile lg:px-margin">
            <div className="mb-space-lg max-w-2xl border-l-4 border-primary pl-4">
              <p className="font-label-badge text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Our Services
              </p>
              <h2 className="mt-1 font-headline-lg text-headline-md font-bold text-on-surface lg:text-headline-lg">
                What We Cover
              </h2>
              <p className="mt-2 text-on-surface-variant">
                Tap a service to see how Galóng Galínda can help.
              </p>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-space-lg lg:grid-cols-2">
              {COVER_GROUPS.map((group) => {
                const isPrimary = group.accent === "primary";
                const selectedLabel = activeCover[group.title] ?? group.items[0][0];
                const selected = group.items.find(([label]) => label === selectedLabel);
                return (
                  <article
                    key={group.title}
                    className={`relative flex flex-col overflow-hidden rounded-2xl border border-surface-container-high border-t-4 bg-surface-container-lowest p-space-lg shadow-sm ${isPrimary ? "border-t-primary" : "border-t-secondary"}`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`material-symbols-outlined flex h-14 w-14 items-center justify-center rounded-xl text-[28px] ${isPrimary ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}
                      >
                        {group.icon}
                      </span>
                      <div>
                        <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                          {group.title}
                        </h3>
                        <p className="text-sm text-on-surface-variant">{group.note}</p>
                      </div>
                    </div>
                    <ul className="mb-space-md mt-space-md grid grid-cols-1 gap-3 sm:auto-rows-fr sm:grid-cols-2">
                      {group.items.map(([label, icon]) => {
                        const isActive = label === selectedLabel;
                        return (
                          <li key={label} className="flex">
                            <button
                              type="button"
                              aria-pressed={isActive}
                              onClick={() =>
                                setActiveCover((current) => ({ ...current, [group.title]: label }))
                              }
                              className={`cover-tile flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${isActive ? (isPrimary ? "border-primary bg-primary text-on-primary shadow-md" : "border-secondary bg-secondary text-on-secondary shadow-md") : "border-surface-container-high bg-surface-container-low text-on-surface hover:bg-surface-container"}`}
                            >
                              <span
                                className={`material-symbols-outlined cover-tile-icon text-[22px] ${isActive ? "" : isPrimary ? "text-primary" : "text-secondary"}`}
                              >
                                {icon}
                              </span>
                              {label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <div
                      key={selectedLabel}
                      className={`cover-detail mt-auto min-h-[7.5rem] rounded-xl border-l-4 p-4 ${isPrimary ? "border-primary bg-primary/5" : "border-secondary bg-secondary/5"}`}
                    >
                      <p className="font-bold text-on-surface">{selected[0]}</p>
                      <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                        {selected[2]}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        {/* ADDITIONAL SERVICES FROM GOOGLE SHEETS */}
        {!isLoading && dynamicServices.length > 0 && (
          <section className="w-full py-space-xl bg-surface-container-low border-t border-surface-container-high/60">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-24 lg:gap-32">
              {dynamicServices.map((item, index) => {
                const hasVideo =
                  item.videoEmbed && item.videoEmbed.trim() !== "";
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center scroll-mt-32"
                  >
                    {/* Left Column / Right Column switching pattern */}
                    <div
                      className={`lg:col-span-7 grid grid-cols-1 ${hasVideo ? "sm:grid-cols-2" : "grid-cols-1"} gap-space-sm ${isEven ? "order-2 lg:order-1" : "order-2"}`}
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-md h-64 bg-surface-container flex items-center justify-center p-2 bg-white">
                        <img
                          alt={item.title}
                          className="w-full h-full object-cover rounded-xl"
                          src={item.imageMain}
                        />
                      </div>

                      {/* Render video box ONLY if videoEmbed is provided */}
                      {hasVideo && (
                        <div className="relative rounded-2xl overflow-hidden shadow-md h-64 bg-black flex flex-col">
                          <div className="px-3 py-2 bg-inverse-surface/90 border-b border-surface-container-highest/20 flex justify-between items-center z-10">
                            <span className="font-label-badge text-[10px] uppercase text-secondary-fixed flex items-center gap-1 font-bold">
                              <span className="material-symbols-outlined text-[14px]">
                                movie
                              </span>{" "}
                              Promo Reel
                            </span>
                            {item.videoLink && (
                              <a
                                href={item.videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-secondary transition-colors"
                              >
                                <span className="material-symbols-outlined text-[16px]">
                                  open_in_new
                                </span>
                              </a>
                            )}
                          </div>
                          <div className="flex-1 w-full relative">
                            <iframe
                              src={item.videoEmbed}
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{ border: "none", overflow: "hidden" }}
                              scrolling="no"
                              frameBorder="0"
                              allowFullScreen={true}
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={`lg:col-span-5 flex flex-col gap-space-md ${isEven ? "order-1 lg:order-2" : "order-1"}`}
                    >
                      <div>
                        <h2 className="font-headline-lg text-headline-md lg:text-headline-lg font-bold text-on-surface">
                          {item.title}
                        </h2>
                      </div>
                      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
