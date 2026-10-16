import { Link } from 'react-router-dom';

export default function Home() {
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
                  <Link to="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(178,1,18,0.28)] hover:-translate-y-0.5">
                    <span>Product &amp; Services</span>
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
                    <img alt="Galóng Galínda Phoenix Emblem" className="w-full h-full object-contain rounded-full" src="/gallery/sticker%20(2).webp" />
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

        {/* SECTION 3: SIGNATURE OFFERINGS PREVIEW */}
        <section className="w-full bg-surface-container-lowest py-space-xl">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
                  Products &amp; Services
                </h2>
              </div>
            </div>
            
            {/* Offerings Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter lg:grid-cols-3">
              
              {/* Offering 1: Sports Officiating Services */}
              <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="h-44 w-full relative overflow-hidden bg-surface-container-high">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/so%20(5).jpg"  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-secondary uppercase">Official Service</span>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-secondary">Sports Event Management</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Officiating Services</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Professional officiating, referee clinics, and court marshaling for intramurals, invitational leagues, and inter-collegiate competitions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Offering 2: Nutrifit Crackers */}
              <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="h-44 w-full relative overflow-hidden bg-surface-container-high">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/crackers.jpg"  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-primary uppercase">Nutrition Product</span>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary">Energy Snack</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Nutrifit Crackers</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Whole-grain fortified crackers designed to provide a convenient source of energy for active students and athletes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Offering 3: ArmFeet Deodorant Powder */}
              <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="h-44 w-full relative overflow-hidden bg-surface-container-high">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/sticker.webp"/>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-tertiary-container uppercase">Hygiene Product</span>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-tertiary-container">2-in-1 Underarm &amp; Foot Care</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">ArmFeet Deodorant Powder</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Dual-action odor and moisture control deodorant powder (40g) keeping athletes and students fresh during sports, training, and active days.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-high/40 py-16 lg:py-24">
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
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">MR</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-surface">Mark Ryan Dizon</span>
                    <span className="text-xs text-on-surface-variant">BSCS Participant</span>
                  </div>
                </div>
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
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center font-bold text-secondary text-sm">CL</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-surface">Clarissa L. Santos</span>
                    <span className="text-xs text-on-surface-variant">BPE Participant</span>
                  </div>
                </div>
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
                  <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center font-bold text-tertiary text-sm">JE</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-surface">Jerome Encarnacion</span>
                    <span className="text-xs text-on-surface-variant">BLIS Participant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}