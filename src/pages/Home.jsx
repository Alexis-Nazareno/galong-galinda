import { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../components/LikeButton';

export default function Home() {
  const [expandedHighlight, setExpandedHighlight] = useState(null);
  const highlights = [
    {
      id: 'pe-days',
      category: 'Campus Activities',
      title: 'PE Days',
      image: '/gallery/pe%20(2).jpg',
      imageAlt: 'Students taking part in a PE Days Zumba competition',
      description: 'Celebrating movement, teamwork, and school spirit through physical activities.',
      details: 'PE Days brings students together for campus activities that encourage participation, teamwork, and school spirit.',
      photos: [
        { src: '/gallery/pe%20(2).jpg', alt: 'Students performing in the PE Days Zumba competition' },
        { src: '/gallery/pe%20(4).jpg', alt: 'Students gathered during a PE Days ceremony' }
      ],
      link: '/events#section-upcoming',
      action: 'Explore events'
    },
    {
      id: 'officiating',
      category: 'Sports Services',
      title: 'Officiating',
      image: '/gallery/basketball-officiating-session.jpeg',
      imageAlt: 'Basketball officiating instruction during a community sports session',
      description: 'Supporting fair play and organized competition through sports officiating.',
      details: 'Galóng Galínda offers officiating for basketball, volleyball, swimming, and badminton, as well as event organizing for PE Days, culminating activities, and school events.',
      photos: [
        { src: '/gallery/basketball-officiating-session.jpeg', alt: 'Basketball officiating instruction' },
        { src: '/gallery/basketball-court-game.jpeg', alt: 'Basketball game in progress at Pampanga People’s Gym' }
      ],
      link: '/services#officiating',
      action: 'View services'
    },
    {
      id: 'volleyball-workshop',
      category: 'Seminar Workshop',
      title: 'Volleyball Officiating',
      image: '/gallery/volleyball-officiating-session.jpeg',
      imageAlt: 'Volleyball officiating seminar in a gym',
      description: 'Building practical officiating skills and teamwork through hands-on sports activities.',
      details: 'A seminar-workshop focused on volleyball officiating, with participants learning through demonstrations and practical activities.',
      photos: [
        { src: '/gallery/volleyball-officiating-session.jpeg', alt: 'Volleyball officiating workshop in a gym' },
        { src: '/gallery/so%20(6).jpg', alt: 'Participants at an interactive volleyball seminar workshop' }
      ],
      link: '/events#section-upcoming',
      action: 'Learn more'
    }
  ];

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
                    We are the <span className="text-primary">Galóng Galínda</span> Event Organization
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs">
                    <span className="font-semibold text-primary">
                      “GALING, Karunungan, Pakikiisa at Pakikisama”
                    </span> — As an event organization, we showcase the galing of every Filipino who demonstrates dicipline and honor in various events.
                  </p>
                </div>
                
                {/* Dual CTAs */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <Link to="/events#section-upcoming" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(178,1,18,0.28)] hover:-translate-y-0.5">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    <span>Upcoming Events / Events Calendar</span>
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary font-label-lg text-label-lg transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">event_available</span>
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Emblem Spotlight & Kinetic Aura */}
              <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
                <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                  {/* Animated Kinetic Halo Graphic */}
                  <svg className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]" fill="none" viewBox="0 0 400 400">
                    <circle className="text-secondary/25" cx="200" cy="200" r="185" stroke="currentColor" strokeDasharray="14 10" strokeWidth="2"></circle>
                    <circle className="text-primary/30" cx="200" cy="200" r="150" stroke="currentColor" strokeDasharray="6 8" strokeWidth="2"></circle>
                  </svg>
                  {/* Dual Energy Backdrop disc */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary-fixed/60 via-surface-container to-secondary-fixed/50 blur-xl opacity-75"></div>
                  {/* Central Phoenix Emblem Container */}
                  <div className="relative z-10 w-72 sm:w-84 h-72 sm:h-84 rounded-full p-2 flex items-center justify-center">
                    <img alt="Galóng Galínda Phoenix Emblem" className="w-full h-full rounded-full object-contain" src="/gallery/galong-galinda-logo-clean.png" />
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
        <section className="w-full bg-surface-container-low py-space-xl">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
            {/* Split Overview Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
              <div className="lg:col-span-7 flex flex-col gap-space-xs">
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
                  What is <span className="text-primary">Galóng Galínda</span>?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  𝑮𝒂𝒍ó𝒏𝒈 𝑮𝒂𝒍í𝒏𝒅𝒂 aims to develop the skills of every community member by providing seminars and workshops that enhance their knowledge and abilities in their chosen line of specialization.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end"></div>
            </div>
            
            {/* 3 Salient Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter pt-space-xs">
              <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 shadow-sm hover:shadow-md transition-all">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary/10 text-primary font-label-badge text-label-badge uppercase tracking-wider mb-space-sm">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Our Vision</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight mb-2">What is our Vision?</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  To be a leading event organization that strengthen the “Galing” of the Physical Education community through innovative workshops, training, and professional seminars to develop and enhance creativity and camaraderie.
                </p>
              </div>
              
              <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 shadow-sm hover:shadow-md transition-all">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-secondary-container/10 text-secondary font-label-badge text-label-badge uppercase tracking-wider mb-space-sm">
                  <span className="material-symbols-outlined text-[16px]">flag</span>
                  <span>Our Mission</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight mb-2">What is our Mission?</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  To implement and design seminars, training and workshops for the Physical Education Department that promotes purposeful movement and learning while developing talents, teamwork, physical fitness, and sportsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: EVENT HIGHLIGHTS */}
        <section className="w-full bg-background py-space-xl" aria-labelledby="home-highlights-title">
          <div className="mx-auto flex max-w-7xl flex-col gap-space-xl px-margin-mobile lg:px-margin">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-badge text-label-badge font-bold uppercase tracking-[0.2em] text-primary">Moments in Motion</span>
              <h2 id="home-highlights-title" className="font-headline-lg text-headline-lg-mobile font-bold text-on-surface lg:text-headline-lg">
                Event Highlights
              </h2>
              <p className="max-w-2xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
                A look at the activities, sports, and learning experiences brought together by Galóng Galínda.
              </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlights.map((highlight) => {
                const isExpanded = expandedHighlight === highlight.id;
                const detailsId = `highlight-details-${highlight.id}`;

                return (
                  <article key={highlight.id} className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      onClick={() => setExpandedHighlight(isExpanded ? null : highlight.id)}
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
                      <div className="p-5">
                        <span className="font-label-badge text-label-badge font-bold uppercase tracking-wider text-primary">{highlight.category}</span>
                        <h3 className="mt-2 font-headline-sm text-headline-sm font-bold text-on-surface">{highlight.title}</h3>
                        <p className="mt-2 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{highlight.description}</p>
                        <span className="mt-4 inline-flex items-center gap-1 font-label text-sm font-bold text-primary">
                          {isExpanded ? 'Hide details' : 'View details'}
                          <span className={`material-symbols-outlined text-base transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true">
                            expand_more
                          </span>
                        </span>
                      </div>
                    </button>
                    {isExpanded && (
                      <div id={detailsId} className="highlight-details-enter border-t border-surface-container-high/60 p-5">
                        <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{highlight.details}</p>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          {highlight.photos.map((photo) => (
                            <div key={photo.src} className="overflow-hidden rounded-lg bg-surface-container">
                              <img src={photo.src} alt={photo.alt} className="h-28 w-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                            </div>
                          ))}
                        </div>
                        <Link to={highlight.link} className="mt-4 inline-flex items-center gap-1 font-label text-sm font-bold text-primary hover:underline">
                          {highlight.action}
                          <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                        </Link>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: SIGNATURE OFFERINGS PREVIEW */}
        <section className="w-full bg-surface-container-lowest py-space-xl">
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
              <Link to="/services#officiating" className="flex flex-col rounded-2xl bg-surface-container overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="relative h-48 w-full shrink-0 overflow-hidden bg-surface-container-high sm:h-56">
                  <img alt="Galóng Galínda sports officiating team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/so%20(5).jpg" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-secondary uppercase">Services</span>
                </div>
                <div className="flex flex-1 items-start gap-4 p-5 sm:p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary material-symbols-outlined text-[22px] sm:h-12 sm:w-12">sports</span>
                  <div className="min-w-0 max-w-xl">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Officiating Services</h3>
                    <p className="mt-2 max-w-[42ch] font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Professional officiating, referee clinics, and court marshaling for intramurals and inter-collegiate competitions.
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col rounded-2xl bg-surface-container overflow-hidden shadow-sm">
                <div className="flex items-center gap-4 border-b border-surface-container-high/60 p-5 sm:p-6">
                  <span className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center material-symbols-outlined text-[24px]">shopping_bag</span>
                  <div className="min-w-0">
                    <span className="font-label-badge text-label-badge uppercase text-primary">Products</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Made for active days</h3>
                  </div>
                </div>
                <div className="grid flex-1 grid-cols-1 gap-3 p-4 sm:p-5 lg:grid-cols-2">
                  <Link to="/products#nutrifit" className="group flex min-w-0 flex-col overflow-hidden rounded-xl bg-surface-container-lowest">
                    <div className="h-48 shrink-0 overflow-hidden bg-surface-container-high">
                      <img alt="Nutrifit Crackers" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="/gallery/crackers.jpg" />
                    </div>
                    <div className="flex-1 p-4">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Nutrifit Crackers</h4>
                      <p className="mt-1 max-w-[32ch] font-body-sm text-body-sm text-on-surface-variant">A convenient snack for active students and athletes.</p>
                    </div>
                  </Link>
                  <Link to="/products#armfeet" className="group flex min-w-0 flex-col overflow-hidden rounded-xl bg-surface-container-lowest">
                    <div className="h-48 shrink-0 overflow-hidden bg-white">
                      <img alt="ArmFeet deodorant powder" className="h-full w-full scale-150 object-cover object-center transition-transform duration-300 group-hover:scale-[1.6]" src="/gallery/crackers-armfeet.jpg" />
                    </div>
                    <div className="flex-1 p-4">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">ArmFeet Powder</h4>
                      <p className="mt-1 max-w-[32ch] font-body-sm text-body-sm text-on-surface-variant">Underarm and foot care for active days.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
              <span className="font-label-badge text-[11px] text-primary font-bold uppercase tracking-wider">Testimonials</span>
              <h2 className="font-headline text-3xl font-bold text-on-surface">
                What Participants Say
              </h2>
              <p className="font-body text-base text-on-surface-variant">
                Discover what our participants have to say about their experiences with Galóng Galínda.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Review 1 */}
              <div className="flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container-high/50 hover:-translate-y-1 transition-transform">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-tertiary gap-0.5">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
                    “Galóng Galínda created an event that combined learning, teamwork, and fun. The experience encouraged us to be more confident and active in our chosen field.”
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container-high/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center material-symbols-outlined text-primary text-[20px]" aria-hidden="true">person</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-surface">Anonymous Participant</span>
                    <span className="text-xs text-on-surface-variant">Event Participant</span>
                  </div>
                </div>
                <LikeButton label="Love this participant comment" icon="favorite" storageKey="testimonial-1" className="self-start mt-4" />
              </div>

              {/* Review 2 */}
              <div className="flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container-high/50 hover:-translate-y-1 transition-transform">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-tertiary gap-0.5">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
                    “The hands-on demonstrations made the workshop easier to understand. It gave us valuable experience that we can apply in actual games and future activities”
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container-high/50">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">person</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-surface">Anonymous Participant</span>
                    <span className="text-xs text-on-surface-variant">Event Participant</span>
                  </div>
                </div>
                <LikeButton label="Love this participant comment" icon="favorite" storageKey="testimonial-2" className="self-start mt-4" />
              </div>

              {/* Review 3 */}
              <div className="flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container-high/50 hover:-translate-y-1 transition-transform">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-tertiary gap-0.5">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
                    “The seminar was informative and engaging. I learned more about proper officiating and gained a better understanding of how to make confident decisions during a game.”
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container-high/50">
                  <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center material-symbols-outlined text-tertiary text-[20px]" aria-hidden="true">person</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-surface">Anonymous Participant</span>
                    <span className="text-xs text-on-surface-variant">Event Participant</span>
                  </div>
                </div>
                <LikeButton label="Love this participant comment" icon="favorite" storageKey="testimonial-3" className="self-start mt-4" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}