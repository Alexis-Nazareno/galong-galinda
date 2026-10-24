import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LikeButton from "../components/LikeButton";

function EventHighlightCard({ highlight, isExpanded, onToggle }) {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);
  const detailsId = `highlight-details-${highlight.id}`;
  const activeFaceRef = isExpanded ? backRef : frontRef;

  useLayoutEffect(() => {
    const face = activeFaceRef.current;
    if (!face) return undefined;

    const updateHeight = () => setCardHeight(face.scrollHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(face);
    return () => observer.disconnect();
  }, [activeFaceRef]);

  return (
    <article
      className="highlight-card-scene"
      style={{ height: cardHeight ? `${cardHeight}px` : undefined }}
    >
      <div
        className={`highlight-card-flipper ${isExpanded ? "is-flipped" : ""}`}
      >
        <div
          ref={frontRef}
          className="highlight-card-face highlight-card-front overflow-hidden rounded-2xl border border-primary/25 bg-surface-container-lowest shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-lg"
          aria-hidden={isExpanded}
          inert={isExpanded}
        >
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            onClick={onToggle}
            className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary"
          >
            <div className="h-56 overflow-hidden bg-surface-container">
              <img
                src={highlight.image}
                alt={highlight.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex min-h-[13.25rem] flex-col p-5">
              <span className="font-label-badge text-label-badge font-bold uppercase tracking-wider text-primary">
                {highlight.category}
              </span>
              <h3 className="mt-2 font-headline-sm text-headline-sm font-bold text-on-surface">
                {highlight.title}
              </h3>
              <p className="mt-2 min-h-[4.5rem] font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                {highlight.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 font-label text-sm font-bold text-primary">
                View details
                <span
                  className="material-symbols-outlined text-base"
                  aria-hidden="true"
                >
                  flip
                </span>
              </span>
            </div>
          </button>
        </div>

        <div
          ref={backRef}
          id={detailsId}
          className="highlight-card-face highlight-card-back cursor-pointer overflow-hidden rounded-2xl border border-primary/40 bg-surface-container-lowest shadow-sm transition-colors hover:border-primary/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          aria-hidden={!isExpanded}
          inert={!isExpanded}
          onClick={onToggle}
          onKeyDown={(event) => {
            if (
              event.target === event.currentTarget &&
              (event.key === "Enter" || event.key === " ")
            ) {
              event.preventDefault();
              onToggle();
            }
          }}
          role="group"
          tabIndex={isExpanded ? 0 : -1}
          aria-label={`Click to return to ${highlight.title}`}
        >
          <div className="flex min-h-[4.5rem] items-center justify-center border-b border-surface-container-high/60 px-5 py-4 text-center">
            <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
              {highlight.detailTitle || highlight.title}
            </h3>
          </div>
          <div className="p-5">
            <dl className="flex flex-col rounded-xl bg-surface-container-low px-4 text-sm">
              <div className="grid grid-cols-[1.25rem_3rem_minmax(0,1fr)] items-center gap-x-2 py-3">
                <span
                  className="material-symbols-outlined text-lg leading-none text-primary"
                  aria-hidden="true"
                >
                  calendar_month
                </span>
                <dt className="font-label text-xs font-bold uppercase leading-none tracking-wide text-primary">
                  Date
                </dt>
                <dd className="break-words leading-relaxed text-on-surface-variant">
                  {highlight.date}
                </dd>
              </div>
              <div className="grid grid-cols-[1.25rem_3rem_minmax(0,1fr)] items-center gap-x-2 border-t border-surface-container-high/70 py-3">
                <span
                  className="material-symbols-outlined text-lg leading-none text-tertiary"
                  aria-hidden="true"
                >
                  location_on
                </span>
                <dt className="font-label text-xs font-bold uppercase leading-none tracking-wide text-primary">
                  Venue
                </dt>
                <dd className="break-words leading-relaxed text-on-surface-variant">
                  {highlight.venue}
                </dd>
              </div>
            </dl>
            <p className="mt-4 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
              {highlight.details}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {highlight.photos.slice(0, 4).map((photo, index) => (
                <div
                  key={`${photo.src}-${index}`}
                  className="group overflow-hidden rounded-lg bg-surface-container"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-36"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <Link
              to={highlight.link}
              onClick={(event) => event.stopPropagation()}
              className="mt-4 inline-flex items-center gap-1 font-label text-sm font-bold text-primary hover:underline"
            >
              {highlight.action}
              <span
                className="material-symbols-outlined text-base"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [expandedHighlight, setExpandedHighlight] = useState(null);
  const [testimonialRating, setTestimonialRating] = useState(0);
  const [testimonialComment, setTestimonialComment] = useState("");
  const [submittedTestimonials, setSubmittedTestimonials] = useState([]);
  const [testimonialFormStatus, setTestimonialFormStatus] = useState("");
  const testimonialListRef = useRef(null);
  const highlights = [
    {
      id: "pe-days",
      category: "Campus Activities",
      title: "PE Days",
      detailTitle: "🎉 PE DAYS 2026: Pamiabe King Pamamyalung! 🏆",
      image: "/gallery/pe-days-2026-opening-ceremony.jpeg",
      imageAlt:
        "PE Days participants gathered for the campus opening ceremony at City College of Angeles",
      description:
        "🎉 PE Days 2026: Pamiabe King Pamamyalung! Get ready to move, compete, and celebrate unity and sportsmanship.",
      date: "September 24–25, 2026",
      venue: "CCA Covered Court and Quadrangle",
      details:
        "Get ready to move, compete, and celebrate the spirit of unity and sportsmanship! 💪✨ The Association of Physical Education Students (APES) proudly presents PE Days 2026, carrying the theme “Pamiabe King Pamamyalung: Tune Kule Ning Tagumpe”—a celebration of teamwork, friendship, culture, and the pursuit of victory. 🏆",
      photos: [
        {
          src: "/gallery/pe-days-cultural-performance.jpeg",
          alt: "Students presenting a cultural performance during PE Days",
        },
        {
          src: "/gallery/pe-days-color-guard-performance.jpeg",
          alt: "Students performing with colorful flags during PE Days",
        },
        {
          src: "/gallery/pe-days-awards-ceremony.jpeg",
          alt: "PE Days fitness and sports pageant awardees",
        },
        {
          src: "/gallery/pe-days-team-performance.jpeg",
          alt: "PE Days team posing together after their performance",
        },
      ],
      link: "/events#section-upcoming",
      action: "Explore events",
    },
    {
      id: "officiating",
      category: "Sports Services",
      title: "Officiating",
      detailTitle: "Officiating in Stedar International Montessori",
      image: "/gallery/sports-festival-teamwork.jpeg",
      imageAlt:
        "Students and officials taking part in a school sports activity",
      description:
        "🏅 Officiating in Sepak Takraw at Stedar International Montessori, promoting fairness, sportsmanship, and responsible competition.",
      date: "January 29–30, 2026",
      venue: "Villa Dolores Subdivision, Sto. Domingo, Angeles City",
      details:
        "Officiating in Sepak Takraw during the sports activities at Stedar International Montessori on January 29–30 provided an opportunity to demonstrate sportsmanship, fairness, and responsibility in athletic competition. The activity involved officiating duties to help ensure that the game was conducted properly and in accordance with the rules and regulations of Sepak Takraw.",
      photos: [
        {
          src: "/gallery/volleyball-officiating-session.jpeg",
          alt: "Students participating in a volleyball officiating seminar",
        },
        {
          src: "/gallery/basketball-officiating-session.jpeg",
          alt: "An instructor demonstrating sports officiating on court",
        },
      ],
      link: "/services#officiating",
      action: "View services",
    },
    {
      id: "volleyball-workshop",
      category: "Seminar Workshop",
      title: "Volleyball Officiating",
      detailTitle: "🏐 Volleyball Officiating: The Art of the Call",
      image: "/gallery/so%20(5).jpg",
      imageAlt: "Volleyball officiating seminar in a gym",
      description:
        "🏐 The Art of the Call: Advancing Referees Through Technical Training.",
      date: "April 6, 2026",
      venue: "CCA Covered Court",
      details:
        "Second-year Bachelor of Physical Education (BPE) students are actively participating in the Volleyball Officiating Seminar-Workshop at the City College of Angeles (CCA) Covered Court, enhancing their knowledge and skills in game rules, proper officiating, and decision-making on the court. The session features hands-on demonstrations and guided discussions, equipping future educators and aspiring referees with the competence and confidence needed to effectively officiate both basketball and volleyball games in accordance with standard rules and regulations. ⚖️",
      photos: [
        {
          src: "/gallery/so%20(4).jpg",
          alt: "Students taking part in a hands-on officiating workshop at the covered court",
        },

        {
          src: "/gallery/so%20(6).jpg",
          alt: "Volleyball officiating seminar participants with the Art of the Call display",
        },
      ],
      link: "/events#section-upcoming",
      action: "Learn more",
    },
  ];

  useEffect(() => {
    if (submittedTestimonials.length > 0) {
      const testimonialList = testimonialListRef.current;
      testimonialList?.scrollTo({
        left: testimonialList.scrollWidth,
        behavior: "smooth",
      });
    }
  }, [submittedTestimonials.length]);

  const submitTestimonial = (event) => {
    event.preventDefault();
    const comment = testimonialComment.trim();

    if (!testimonialRating) {
      setTestimonialFormStatus(
        "Please choose a star rating before submitting.",
      );
      return;
    }

    if (!comment) {
      setTestimonialFormStatus("Please enter a comment before submitting.");
      return;
    }

    setSubmittedTestimonials((current) => [
      ...current,
      {
        id: `${Date.now()}-${current.length}`,
        rating: testimonialRating,
        comment,
      },
    ]);
    setTestimonialComment("");
    setTestimonialRating(0);
    setTestimonialFormStatus(
      "Your anonymous review has been added for this visit.",
    );
  };

  return (
    <main>
      <div className="flex flex-col w-full">
        {/* SECTION 1: HERO */}
        <section className="relative w-full overflow-hidden bg-surface-container-lowest">
          {/* Atmospheric Dual-Energy Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
          <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-12 pb-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              {/* Left Column: Dynamic Hero Content */}
              <div className="lg:col-span-7 flex flex-col gap-space-lg relative z-10">
                <div className="flex flex-col gap-space-sm">
                  <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight leading-[1.08]">
                    We are the{" "}
                    <span className="text-primary">Galóng Galínda</span> Event
                    Organization
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs">
                    <span className="font-semibold text-primary">
                      “GALING, Karunungan, Pakikiisa at Pakikisama”
                    </span>{" "}
                    — As an event organization, we showcase the galing of every
                    Filipino who demonstrates dicipline and honor in various
                    events.
                  </p>
                </div>

                {/* Dual CTAs */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <Link
                    to="/events#section-upcoming"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(178,1,18,0.28)] hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_month
                    </span>
                    <span>Events Calendar</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary font-label-lg text-label-lg transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      event_available
                    </span>
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Emblem Spotlight & Kinetic Aura */}
              <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
                <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                  {/* Animated Kinetic Halo Graphic */}
                  <svg
                    className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]"
                    fill="none"
                    viewBox="0 0 400 400"
                  >
                    <circle
                      className="text-secondary/25"
                      cx="200"
                      cy="200"
                      r="185"
                      stroke="currentColor"
                      strokeDasharray="14 10"
                      strokeWidth="2"
                    ></circle>
                    <circle
                      className="text-primary/30"
                      cx="200"
                      cy="200"
                      r="150"
                      stroke="currentColor"
                      strokeDasharray="6 8"
                      strokeWidth="2"
                    ></circle>
                  </svg>
                  {/* Dual Energy Backdrop disc */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary-fixed/60 via-surface-container to-secondary-fixed/50 blur-xl opacity-75"></div>
                  {/* Central Phoenix Emblem Container */}
                  <div className="relative z-10 w-72 sm:w-84 h-72 sm:h-84 rounded-full p-2 flex items-center justify-center">
                    <img
                      alt="Galóng Galínda Phoenix Emblem"
                      className="w-full h-full rounded-full object-contain"
                      src="/gallery/galong-galinda-logo-clean.png"
                    />
                  </div>
                  {/* Floating Kinetic Badges */}
                  <div className="absolute -top-2 right-4 z-20 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-md flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PURPOSE & SALIENT PILLARS */}
        <section id="home-purpose" className="scroll-mt-32 w-full bg-surface-container-low py-space-xl">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
            {/* Split Overview Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
              <div className="lg:col-span-7 flex flex-col gap-space-xs">
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
                  What is <span className="text-primary">Galóng Galínda</span>?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  𝑮𝒂𝒍ó𝒏𝒈 𝑮𝒂𝒍í𝒏𝒅𝒂 aims to develop the skills of every community
                  member by providing seminars and workshops that enhance their
                  knowledge and abilities in their chosen line of
                  specialization.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end"></div>
            </div>

            {/* 3 Salient Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter pt-space-xs">
              <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 shadow-sm hover:shadow-md transition-all">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary/10 text-primary font-label-badge text-label-badge uppercase tracking-wider mb-space-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    visibility
                  </span>
                  <span>Our Vision</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight mb-2">
                  What is our Vision?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  To be a leading event organization that strengthen the
                  “Galing” of the Physical Education community through
                  innovative workshops, training, and professional seminars to
                  develop and enhance creativity and camaraderie.
                </p>
              </div>

              <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 shadow-sm hover:shadow-md transition-all">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-secondary-container/10 text-secondary font-label-badge text-label-badge uppercase tracking-wider mb-space-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    flag
                  </span>
                  <span>Our Mission</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight mb-2">
                  What is our Mission?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  To implement and design seminars, training and workshops for
                  the Physical Education Department that promotes purposeful
                  movement and learning while developing talents, teamwork,
                  physical fitness, and sportsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: EVENT HIGHLIGHTS */}
        <section
          id="home-highlights"
          className="scroll-mt-32 w-full bg-background py-space-xl"
          aria-labelledby="home-highlights-title"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-space-xl px-margin-mobile lg:px-margin">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-badge text-label-badge font-bold uppercase tracking-[0.2em] text-primary">
                Moments in Motion
              </span>
              <h2
                id="home-highlights-title"
                className="font-headline-lg text-headline-lg-mobile font-bold text-on-surface lg:text-headline-lg"
              >
                Event Highlights
              </h2>
              <p className="max-w-2xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
                A look at the activities, sports, and learning experiences
                brought together by Galóng Galínda.
              </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlights.map((highlight) => {
                const isExpanded = expandedHighlight === highlight.id;

                return (
                  <EventHighlightCard
                    key={highlight.id}
                    highlight={highlight}
                    isExpanded={isExpanded}
                    onToggle={() =>
                      setExpandedHighlight(isExpanded ? null : highlight.id)
                    }
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: SIGNATURE OFFERINGS PREVIEW */}
        <section id="home-offerings" className="scroll-mt-32 w-full bg-surface-container-lowest py-space-xl">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
                  Our Offerings
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
              <Link
                to="/services#officiating"
                className="group flex h-[28rem] flex-col overflow-hidden rounded-2xl bg-surface-container shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative min-h-0 w-full basis-3/4 shrink-0 overflow-hidden bg-surface-container-high">
                  <img
                    alt="Galóng Galínda sports officiating team"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src="/gallery/so%20(5).jpg"
                  />
                  <span className="absolute left-3 top-3 z-10 rounded-md bg-secondary px-3 py-1.5 font-label-md text-label-md uppercase text-on-secondary shadow-md">
                    Services
                  </span>
                </div>
                <div className="flex min-h-0 w-full basis-1/4 shrink-0 items-center gap-4 p-3 sm:p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary material-symbols-outlined text-[22px] sm:h-12 sm:w-12">
                    sports
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Officiating Services
                    </h3>
                    <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Professional officiating, referee clinics, and court
                      marshaling for intramurals and inter-collegiate
                      competitions.
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col rounded-2xl bg-surface-container shadow-sm">
                <div className="flex items-center gap-4 rounded-t-2xl border-b border-surface-container-high/60 p-5 sm:p-6">
                  <span className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center material-symbols-outlined text-[24px]">
                    shopping_bag
                  </span>
                  <div className="min-w-0">
                    <span className="font-label-badge text-label-badge uppercase text-primary">
                      Products
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Made for active days
                    </h3>
                  </div>
                </div>
                <div className="grid flex-1 grid-cols-1 gap-3 p-4 sm:p-5 lg:grid-cols-2">
                  <Link
                    to="/products#nutrifit"
                    className="offering-product-card group flex min-w-0 flex-col rounded-xl bg-surface-container-lowest"
                  >
                    <div className="offering-product-image-stage flex h-48 shrink-0 items-center justify-center rounded-t-xl p-3 sm:h-44">
                      <img
                        alt="Nutrifit Crackers"
                        className="offering-product-image h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-110"
                        src="/gallery/nutrifit-products-cutout.png"
                      />
                      <span className="offering-product-hover-preview" aria-hidden="true">
                        <img src="/gallery/nutrifit-products-cutout.png" alt="" />
                      </span>
                    </div>
                    <div className="flex-1 rounded-b-xl p-4">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                        Nutrifit Crackers
                      </h4>
                      <p className="mt-1 max-w-[32ch] font-body-sm text-body-sm text-on-surface-variant">
                        A convenient snack for active students and athletes.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/products#armfeet"
                    className="offering-product-card group flex min-w-0 flex-col rounded-xl bg-surface-container-lowest"
                  >
                    <div className="offering-product-image-stage flex h-48 shrink-0 items-center justify-center rounded-t-xl p-3 sm:h-44">
                      <img
                        alt="ArmFeet deodorant powder"
                        className="offering-product-image h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-110"
                        src="/gallery/armfeet-product-cutout.png"
                      />
                      <span className="offering-product-hover-preview" aria-hidden="true">
                        <img src="/gallery/armfeet-product-cutout.png" alt="" />
                      </span>
                    </div>
                    <div className="flex-1 rounded-b-xl p-4">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                        ArmFeet Powder
                      </h4>
                      <p className="mt-1 max-w-[32ch] font-body-sm text-body-sm text-on-surface-variant">
                        Underarm and foot care for active days.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="home-testimonials" className="scroll-mt-32 w-full bg-surface-container-low py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
              <span className="font-label-badge text-[11px] text-primary font-bold uppercase tracking-wider">
                Testimonials
              </span>
              <h2 className="font-headline text-3xl font-bold text-on-surface">
                What Participants Say
              </h2>
              <p className="font-body text-base text-on-surface-variant">
                Discover what our participants have to say about their
                experiences with Galóng Galínda.
              </p>
            </div>

            <div
              ref={testimonialListRef}
              aria-label="Participant reviews"
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
              tabIndex={0}
            >
              {/* Review 1 */}
              <div className="flex basis-[85%] shrink-0 snap-start flex-col justify-between rounded-2xl border border-surface-container-high/50 bg-surface-container-lowest p-6 shadow-sm transition-transform hover:-translate-y-1 sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-tertiary gap-0.5">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
                    “Galóng Galínda created an event that combined learning,
                    teamwork, and fun. The experience encouraged us to be more
                    confident and active in our chosen field.”
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container-high/50">
                  <div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center material-symbols-outlined text-primary text-[20px]"
                    aria-hidden="true"
                  >
                    person
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-surface">
                      Anonymous Participant
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Event Participant
                    </span>
                  </div>
                </div>
                <LikeButton
                  label="Love this participant comment"
                  icon="favorite"
                  storageKey="testimonial-1"
                  className="self-start mt-4"
                />
              </div>

              {/* Review 2 */}
              <div className="flex basis-[85%] shrink-0 snap-start flex-col justify-between rounded-2xl border border-surface-container-high/50 bg-surface-container-lowest p-6 shadow-sm transition-transform hover:-translate-y-1 sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-tertiary gap-0.5">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
                    “The hands-on demonstrations made the workshop easier to
                    understand. It gave us valuable experience that we can apply
                    in actual games and future activities”
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container-high/50">
                  <div
                    className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center material-symbols-outlined text-secondary text-[20px]"
                    aria-hidden="true"
                  >
                    person
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-surface">
                      Anonymous Participant
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Event Participant
                    </span>
                  </div>
                </div>
                <LikeButton
                  label="Love this participant comment"
                  icon="favorite"
                  storageKey="testimonial-2"
                  className="self-start mt-4"
                />
              </div>

              {/* Review 3 */}
              <div className="flex basis-[85%] shrink-0 snap-start flex-col justify-between rounded-2xl border border-surface-container-high/50 bg-surface-container-lowest p-6 shadow-sm transition-transform hover:-translate-y-1 sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-tertiary gap-0.5">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star_half
                    </span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
                    “The seminar was informative and engaging. I learned more
                    about proper officiating and gained a better understanding
                    of how to make confident decisions during a game.”
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container-high/50">
                  <div
                    className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center material-symbols-outlined text-tertiary text-[20px]"
                    aria-hidden="true"
                  >
                    person
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-surface">
                      Anonymous Participant
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Event Participant
                    </span>
                  </div>
                </div>
                <LikeButton
                  label="Love this participant comment"
                  icon="favorite"
                  storageKey="testimonial-3"
                  className="self-start mt-4"
                />
              </div>
              {submittedTestimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="flex basis-[85%] shrink-0 snap-start flex-col rounded-2xl border border-surface-container-high/50 bg-surface-container-lowest p-6 shadow-sm sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
                >
                  <div
                    className="flex items-center gap-0.5 text-tertiary"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        aria-hidden="true"
                      >
                        {index < testimonial.rating ? "star" : "star_outline"}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 font-body text-sm italic leading-relaxed text-on-surface-variant">
                    “{testimonial.comment}”
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-surface-container-high/50 pt-6">
                    <div
                      className="material-symbols-outlined flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-[20px] text-primary"
                      aria-hidden="true"
                    >
                      person
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-on-surface">
                        Anonymous Participant
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        Event Participant
                      </span>
                    </div>
                  </div>
                  <LikeButton
                    label="Love this participant comment"
                    icon="favorite"
                    className="mt-4 self-start"
                  />
                </article>
              ))}
            </div>

            <form
              onSubmit={submitTestimonial}
              className="mx-auto w-full max-w-2xl rounded-2xl border border-surface-container-high/60 bg-surface-container-lowest p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                  Share your experience
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Leave an anonymous comment and rate your experience.
                </p>
              </div>
              <fieldset className="mt-4">
                <legend className="text-sm font-semibold text-on-surface">
                  Your rating
                </legend>
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, index) => {
                    const starRating = index + 1;
                    return (
                      <button
                        key={starRating}
                        type="button"
                        aria-label={`${starRating} star${starRating === 1 ? "" : "s"}`}
                        aria-pressed={testimonialRating === starRating}
                        onClick={() => {
                          setTestimonialRating(starRating);
                          setTestimonialFormStatus("");
                        }}
                        className="rounded-md p-0.5 text-tertiary transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                      >
                        <span
                          className="material-symbols-outlined text-2xl"
                          style={{
                            fontVariationSettings: `'FILL' ${starRating <= testimonialRating ? 1 : 0}`,
                          }}
                          aria-hidden="true"
                        >
                          star
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <label
                htmlFor="testimonial-comment"
                className="mt-4 block text-sm font-semibold text-on-surface"
              >
                Add a comment
              </label>
              <textarea
                id="testimonial-comment"
                value={testimonialComment}
                onChange={(event) => setTestimonialComment(event.target.value)}
                maxLength={500}
                rows={3}
                placeholder="Tell us about your experience..."
                className="mt-2 w-full resize-y rounded-xl border border-surface-container-high bg-surface-container-lowest px-4 py-2.5 text-sm text-on-surface outline-none transition-shadow placeholder:text-on-surface-variant/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
              <div className="mt-3 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-xs leading-relaxed text-on-surface-variant">
                  Anonymous and visible only during this visit. Public reviews
                  require a connected website service.
                </p>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-on-primary shadow-sm transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span
                    className="material-symbols-outlined text-lg"
                    aria-hidden="true"
                  >
                    send
                  </span>
                  Submit review
                </button>
              </div>
              {testimonialFormStatus && (
                <p
                  className="mt-4 text-sm font-medium text-primary"
                  role="status"
                  aria-live="polite"
                >
                  {testimonialFormStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
