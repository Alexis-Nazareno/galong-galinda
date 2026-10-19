import { useState } from 'react';

export default function About() {
  const [activePillar, setActivePillar] = useState(null);
  const [activeMember, setActiveMember] = useState(null);

  // Team data grouped by department for the new split-role design
  const teamGroups = [
    {
      category: "Event Management & Coordination",
      members: [
        { role: "Event Manager", name: "Angela E. Ellegue", img: "/gallery/team/pic%20(2).jpg" },
        { role: "Assistant Manager", name: "Edmon S. Licup", img: "/gallery/team/pic%20(1).jpg" },
        { role: "Coordinator", name: "Jasper A. Dalusung", img: "/gallery/team/pic%20(7).jpg" },
      ]
    },
    {
      category: "Budget & Finance",
      members: [
        { role: "Budget", name: "Alfreda Joy E. Magisa", img: "/gallery/team/pic%20(6).jpg" },
        { role: "Budget", name: "Nicole A. Quinto", img: "/gallery/team/pic%20(3).jpg" },
      ]
    },
    {
      category: "Infrastructure & Security",
      members: [
        { role: "Infrastructure", name: "Sean Alexis Quismondo", img: "/gallery/team/pic%20(5).jpg" },
        { role: "Infrastructure", name: "Arvi John S. Solano", img: "/gallery/team/pic%20(4).jpg" },
        { role: "Security", name: "Aaron C. Cortez", img: "/gallery/team/pic%20(12).jpg" },
        { role: "Security", name: "Mikel Dean P. Lobo", img: "/gallery/team/pic%20(13).jpg" },
      ]
    },
    {
      category: "Information & Logistics",
      members: [
        { role: "Information", name: "Christine Joy S. Valdevieso", img: "/gallery/team/pic%20(10).jpg" },
        { role: "Information", name: "Niña Reachelle M. Nunag", img: "/gallery/team/pic%20(9).jpg" },
        { role: "Logistics", name: "Jonaira M. Bonsa", img: "/gallery/team/pic%20(8).jpg" },
        { role: "Logistics", name: "Andrew G. Magpantay", img: "/gallery/team/pic%20(11).jpg" }
      ]
    }
  ];

  const teamResponsibilities = {
    "Event Manager": "Leads event planning and delivery, oversees the program schedule, and coordinates the team to keep activities on track.",
    "Assistant Manager": "Supports the event manager, follows up on team progress, and helps coordinate event operations.",
    "Coordinator": "Connects the working teams, shares schedules and updates, and helps keep assigned tasks organized.",
    "Budget": "Helps prepare and track event expenses, organize budget records, and coordinate purchasing needs.",
    "Infrastructure": "Prepares the venue layout and equipment, and coordinates setup and facility requirements.",
    "Security": "Helps maintain an orderly event space, supports access coordination, and raises safety concerns to the organizers.",
    "Information": "Shares event announcements and important details, and helps respond to participant questions.",
    "Logistics": "Coordinates event supplies, transport, setup, and distribution of materials where they are needed."
  };

  return (
    <main>
      <div className="flex flex-col w-full">
        
         <section className="relative flex min-h-[26rem] w-full items-center overflow-hidden bg-surface-container-lowest py-space-xl border-b border-surface-container-high/60 lg:min-h-[32rem]">
          <img src="/gallery/about-us-photo.jpeg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-[center_68%]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#071b43]/90 via-[#073b78]/80 to-[#075985]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b43]/45 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              
              
              {/* Left Column: Text Content & Goals */}
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                <div className="flex flex-wrap items-center gap-space-xs"></div>
                <h1 className="font-display-hero text-4xl lg:text-[64px] lg:leading-[72px] font-bold text-white tracking-tight">
                  About <span className="text-sky-200">Galóng Galínda</span>
                </h1>
                
                <div className="flex flex-col gap-space-sm text-body-lg font-body-lg text-white/90 leading-relaxed">
                  <p className="font-normal text-white">
                    Our organization focuses on the <b>Physical Education community, providing seminars, workshops, training programs, and events</b> designed to develop both individual talents and professional skills. We believe that Physical Education goes beyond physical activity—it is a platform for learning, leadership, self-expression, teamwork, and personal growth.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: OUR GOALS */}
        <section className="w-full py-space-xl bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
            
            <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Our Goals</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "Enhance and develop the skills of every student that promote excellence in Physical Education.",
                    "Show the talents and performance of each communities through sports, games and dances.",
                    "Provide opportunities for professional development through seminars, workshops and hands-on demonstrations.",
                    "To promote teamwork, leadership, and sportsmanship among participants through collaborative and competitive activities.",
                    "To foster a culture of lifelong fitness and physical activity by emphasizing the importance of health, wellness, and active living."
                  ].map((objective, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px] text-primary mt-0.5 shrink-0">check_circle</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center text-center animate-float-slow lg:col-span-5">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-2 flex items-center justify-center">
                  <img
                    alt="Galóng Galínda Crest Emblem"
                    className="h-full w-full rounded-full object-contain transition-transform duration-500 hover:scale-105"
                    src="/gallery/galong-galinda-logo-clean.png"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 max-w-sm">
                  <span className="font-label-badge text-label-badge tracking-[0.2em] text-primary uppercase block font-bold">Official Motto</span>
                  <p className="mt-1 font-headline-sm text-headline-sm font-extrabold leading-snug tracking-tight text-on-surface">
                    “Patinikang Gâlo, Ipákit Ing Galíng Da”
                  </p>
                  <p className="mt-2 font-body-sm text-body-sm font-medium italic leading-relaxed text-on-surface-variant">
                    Sharpen movement, display their greatness and innate talent.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-space-sm max-w-3xl mb-space-md">
              <div className="mt-8 flex flex-col gap-2 border-l-4 border-primary pl-4">
                <span className="font-label-badge text-label-badge font-bold uppercase tracking-[0.2em] text-primary">The foundation of our organization</span>
                <h3 className="font-headline-lg text-3xl font-extrabold uppercase tracking-[0.12em] text-on-surface sm:text-4xl">Core Pillars</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Explore the four values that guide every Galóng Galínda activity.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              <button type="button" aria-expanded={activePillar === 0} onClick={() => setActivePillar(activePillar === 0 ? null : 0)} className={`flex min-h-[14rem] w-full self-start flex-col gap-space-xs rounded-xl border bg-surface-container-lowest p-space-lg text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${activePillar === 0 ? 'border-primary ring-1 ring-primary/20' : 'border-primary/20'}`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary font-bold">01</span>
                </div>
                <h3 className="mt-1 min-h-7 font-headline-sm text-headline-sm font-bold text-on-surface">Galing</h3>
                <p className="min-h-[4.5rem] font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through the discovery and enhancement of their talents and skills</p>
                {activePillar === 0 && <p className="mt-2 border-t border-surface-container-high pt-3 text-sm leading-relaxed text-on-surface-variant">Galing is the confidence to practice, strengthen, and share each person’s abilities through meaningful activities and opportunities to perform.</p>}
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-primary">{activePillar === 0 ? 'Show less' : 'Explore pillar'}<span className="material-symbols-outlined text-base">{activePillar === 0 ? 'expand_less' : 'expand_more'}</span></span>
              </button>
              
              <button type="button" aria-expanded={activePillar === 1} onClick={() => setActivePillar(activePillar === 1 ? null : 1)} className={`flex min-h-[14rem] w-full self-start flex-col gap-space-xs rounded-xl border bg-surface-container-lowest p-space-lg text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary ${activePillar === 1 ? 'border-secondary ring-1 ring-secondary/20' : 'border-secondary/20'}`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">psychology</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">02</span>
                </div>
                <h3 className="mt-1 min-h-7 font-headline-sm text-headline-sm font-bold text-on-surface">Karunungan</h3>
                <p className="min-h-[4.5rem] font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through education, training, and practical experiences</p>
                {activePillar === 1 && <p className="mt-2 border-t border-surface-container-high pt-3 text-sm leading-relaxed text-on-surface-variant">Karunungan grows through learning, thoughtful practice, and applying new knowledge in seminars, workshops, and real event settings.</p>}
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-secondary">{activePillar === 1 ? 'Show less' : 'Explore pillar'}<span className="material-symbols-outlined text-base">{activePillar === 1 ? 'expand_less' : 'expand_more'}</span></span>
              </button>
              
              <button type="button" aria-expanded={activePillar === 2} onClick={() => setActivePillar(activePillar === 2 ? null : 2)} className={`flex min-h-[14rem] w-full self-start flex-col gap-space-xs rounded-xl border bg-surface-container-lowest p-space-lg text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-tertiary ${activePillar === 2 ? 'border-tertiary ring-1 ring-tertiary/20' : 'border-tertiary/20'}`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">handshake</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-tertiary font-bold">03</span>
                </div>
                <h3 className="mt-1 min-h-7 font-headline-sm text-headline-sm font-bold text-on-surface">Pakikiisa</h3>
                <p className="min-h-[4.5rem] font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through teamwork and active participation</p>
                {activePillar === 2 && <p className="mt-2 border-t border-surface-container-high pt-3 text-sm leading-relaxed text-on-surface-variant">Pakikiisa means taking part, contributing ideas, and working together toward shared goals in every program and activity.</p>}
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-tertiary">{activePillar === 2 ? 'Show less' : 'Explore pillar'}<span className="material-symbols-outlined text-base">{activePillar === 2 ? 'expand_less' : 'expand_more'}</span></span>
              </button>
              
               <button type="button" aria-expanded={activePillar === 3} onClick={() => setActivePillar(activePillar === 3 ? null : 3)} className={`flex min-h-[14rem] w-full self-start flex-col gap-space-xs rounded-xl border bg-surface-container-lowest p-space-lg text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${activePillar === 3 ? 'border-primary ring-1 ring-primary/20' : 'border-tertiary/20'}`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">diversity_3</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant font-bold">04</span>
                </div>
                <h3 className="mt-1 min-h-7 font-headline-sm text-headline-sm font-bold text-on-surface">Pakikisama</h3>
                <p className="min-h-[4.5rem] font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through collaboration, respect, and camaraderie</p>
                {activePillar === 3 && <p className="mt-2 border-t border-surface-container-high pt-3 text-sm leading-relaxed text-on-surface-variant">Pakikisama is building positive relationships by treating others with respect, supporting one another, and celebrating shared achievements.</p>}
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-primary">{activePillar === 3 ? 'Show less' : 'Explore pillar'}<span className="material-symbols-outlined text-base">{activePillar === 3 ? 'expand_less' : 'expand_more'}</span></span>
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 3: OUR EXPERIENCE & COMMITMENT */}
        <section className="w-full py-space-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                  Our Experience &amp; Commitment
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  For us, an event is more than a gathering. It is an opportunity to learn, connect, and showcase what we can do.
                </p>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <div>Through every seminar, workshop, training session, and event, Galóng Galínda continues to uphold the values behind our name:</div>
                  <div><br /></div>
                  <div><b>Galing. Karunungan. Pakikiisa. Pakikisama.</b></div>
                  <div><br /></div>
                  <div>Together, we create experiences that move people—not only physically, but also toward growth, learning, confidence, and excellence.</div>
                </div>
              </div>
              
              <div className="lg:col-span-5 flex flex-col gap-space-sm">
                <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md group">
                  <img alt="City College of Angeles PE stage committee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/so%20(7).jpg"  />
                </div>
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="relative h-36 rounded-xl overflow-hidden shadow-sm group">
                    <img alt="Participants taking part in a PE Days group activity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/pe%20(2).jpg"  />
                  </div>
                  <div className="relative h-36 rounded-xl overflow-hidden shadow-sm group">
                    <img alt="Participants learning sports officiating skills" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/officiating.jpg"  />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-transparent to-transparent flex items-end p-2">
                      <span className="text-inverse-on-surface text-[11px] font-label-badge uppercase tracking-wider font-bold"><br /></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        

        {/* SECTION 4: OUR TEAM (REDESIGNED FOR ROLES & MOBILE 2-COLUMN) */}
        <section className="w-full py-space-xl bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-2">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="font-label-badge text-label-badge font-bold uppercase tracking-[0.2em] text-primary">The people behind every activity</span>
                <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">Our Team</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Meet the people behind Galóng Galínda. Select a team member to learn about their role and responsibilities.
                </p>
              </div>
            </div>
            
            {/* Split Roles Grid Container */}
            <div className="flex flex-col gap-12 lg:gap-16">
              {teamGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-col gap-6">
                  {/* Department Title */}
                  <h3 className="inline-flex items-center gap-3 font-headline-md text-xl md:text-2xl font-bold text-on-surface border-b border-surface-container-high pb-3">
                    <span className="h-7 w-1.5 rounded-full bg-primary" aria-hidden="true"></span>
                    {group.category}
                  </h3>
                  
                  {/* Members Grid (2 Columns on Mobile, 4-5 on Desktop) */}
                  <div className="grid grid-cols-2 items-start md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-10">
                    {group.members.map((member, memberIdx) => {
                      const memberId = `${groupIdx}-${memberIdx}`;
                      const isExpanded = activeMember === memberId;

                      return (
                        <div key={memberId} className="group w-full self-start overflow-hidden rounded-2xl border border-surface-container-high/70 bg-surface-container-lowest shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            onClick={() => setActiveMember(isExpanded ? null : memberId)}
                            className="flex w-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                          >
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-container-low">
                              <img
                                src={member.img}
                                alt={member.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                              <span className="absolute bottom-3 left-3 rounded-full bg-[#071b43]/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                                {member.role}
                              </span>
                            </div>
                            <div className="flex min-h-[5.5rem] flex-col items-center p-4 text-center">
                              <h4 className="flex min-h-12 w-full items-center justify-center font-headline-sm text-[15px] font-bold leading-snug text-on-surface sm:text-base">
                                {member.name}
                              </h4>
                              <span className="mt-2 inline-flex min-h-5 w-full items-center justify-center gap-1 text-xs font-semibold text-primary">
                                {isExpanded ? 'Hide responsibilities' : 'View responsibilities'}
                                <span className="material-symbols-outlined text-base" aria-hidden="true">
                                  {isExpanded ? 'expand_less' : 'expand_more'}
                                </span>
                              </span>
                              {isExpanded && (
                                <p className="mt-3 border-t border-surface-container-high pt-3 text-sm leading-relaxed text-on-surface-variant">
                                  {teamResponsibilities[member.role]}
                                </p>
                              )}
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 5: CLOSING ANTHEM */}
        <section className="w-full py-space-xl bg-surface-container-low border-y border-surface-container-high/60">
          <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin text-center flex flex-col items-center gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blurtext-primary font-label-badge text-label-badge uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
              Official Motto &amp; Anthem
            </div>
            <span className="font-headline-sm sm:font-headline-md font-bold text-primary tracking-wide">
              “Patinikang Gâlo, Ipákit Ing Galíng Da”
            </span>
            <blockquote className="font-headline-sm md:text-headline-md text-on-surface font-semibold leading-relaxed max-w-4xl">
              “At Galóng Galínda, we believe that everyone has the potential to excel. Through galing, karunungan, pakikiisa, at pakikisama, we continue to create opportunities where people can learn, move, connect, and grow together.”
            </blockquote>
          </div>
        </section>

      </div>
    </main>
  );
}