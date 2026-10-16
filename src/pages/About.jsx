export default function About() {
  // Team data grouped by department for the new split-role design
  const teamGroups = [
    {
      category: "Event Management & Coordination",
      members: [
        { role: "Event Manager", name: "Angela E. Ellegue", img: "/gallery/team/pic%20(2).jpg" },
        { role: "Ass. Manager", name: "Edmon S. Licup", img: "/gallery/team/pic%20(1).jpg" },
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

  return (
    <main>
      <div className="flex flex-col w-full">
        
         <section className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl border-b border-surface-container-high/60">
          {/* Atmospheric Dual-Energy Glows (Consistent with Home) */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              
              
              {/* Left Column: Text Content & Goals */}
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                <div className="flex flex-wrap items-center gap-space-xs"></div>
                <h1 className="font-display-hero text-4xl lg:text-[64px] lg:leading-[72px] font-bold text-on-surface tracking-tight">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x drop-shadow-sm bg-[length:200%_200%]">Galóng Galínda</span>
                </h1>
                
                <div className="flex flex-col gap-space-sm text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  <p className="font-normal text-on-surface">
                    Our organization focuses on the <b>Physical Education community, providing seminars, workshops, training programs, and events</b> designed to develop both individual talents and professional skills. We believe that Physical Education goes beyond physical activity—it is a platform for learning, leadership, self-expression, teamwork, and personal growth.
                  </p>

                </div>
              </div>
              
              {/* Right Column: Original Card with Subtle Float */}
              <div className="lg:col-span-4 flex flex-col items-center lg:mt-0 mt-8">
                <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-surface-container-lowest/80 backdrop-blur-sm p-space-lg shadow-[0_20px_50px_-10px_rgba(178,1,18,0.15)] dark:shadow-[0_0_40px_rgba(255,180,171,0.1)] flex flex-col items-center justify-center border border-surface-container-highest text-center animate-float-slow">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden p-2 flex items-center justify-center">
                    <img alt="Galóng Galínda Crest Emblem" className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500" src="/gallery/sticker%20(2).webp" />
                  </div>
                  <div className="mt-space-md">
                    <span className="font-label-badge text-label-badge tracking-widest text-primary uppercase block font-bold">Official Motto</span>
                    <p className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight mt-0.5">
                      “Patinikang Gâlo, Ipákit Ing Galíng Da”
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-1">
                      Sharpen movement, display their greatness and innate talent.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* SECTION 2: OUR GOALS */}
        <section className="w-full py-space-xl bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
            
            <div className="flex flex-col gap-space-sm max-w-3xl mb-space-md">
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Our Goals</h2>

              {/* Integrated "Our Goals" List */}
                  <div className="mt-4 flex flex-col gap-4">
                    <ul className="flex flex-col gap-3">
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
              
              <p className="font-body-md text-body-md text-on-surface-variant">
                <br></br>We aim to help participants develop their four core pillars:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-primary/20 shadow-sm flex flex-col gap-space-xs hover:border-primary hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary font-bold">01</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">Galing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through the discovery and enhancement of their talents and skills</p>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-secondary/20 shadow-sm flex flex-col gap-space-xs hover:border-secondary hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">psychology</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">02</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">Karunungan</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through education, training, and practical experiences</p>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-tertiary/20 shadow-sm flex flex-col gap-space-xs hover:border-tertiary hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">handshake</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-tertiary font-bold">03</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">Pakikiisa</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through teamwork and active participation</p>
              </div>
              
               <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-tertiary/20 shadow-sm flex flex-col gap-space-xs hover:border-tertiary hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">diversity_3</span>
                  </div>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant font-bold">04</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">Pakikisama</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">through collaboration, respect, and camaraderie</p>
              </div>
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
                    <img alt="PE mass field routine demonstration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/offawards.jpg"  />
                  </div>
                  <div className="relative h-36 rounded-xl overflow-hidden shadow-sm group">
                    <img alt="Sports officiating covered court assembly" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/gallery/so%20(4).jpg"  />
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
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Our Team</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  The minds and hands behind Galóng Galínda. Each member contributes different skills and responsibilities in planning, coordination, documentation, communication, program implementation, and event management.
                </p>
              </div>
            </div>
            
            {/* Split Roles Grid Container */}
            <div className="flex flex-col gap-12 lg:gap-16">
              {teamGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-col gap-6">
                  {/* Department Title */}
                  <h3 className="font-headline-md text-xl md:text-2xl font-bold text-on-surface border-b border-surface-container-high pb-3">
                    {group.category}
                  </h3>
                  
                  {/* Members Grid (2 Columns on Mobile, 4-5 on Desktop) */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-10">
                    {group.members.map((member, memberIdx) => (
                      <div key={memberIdx} className="flex flex-col items-center group">
                        
                        {/* Portrait Image Container */}
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low mb-3 shadow-sm border border-surface-container-high/40">
                          <img 
                            src={member.img} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Text Styling (Matched to reference image) */}
                        <h4 className="font-headline-sm text-[15px] sm:text-base font-bold text-on-surface text-center leading-snug">
                          {member.name}
                        </h4>
                        <span className="font-body-sm text-[13px] text-on-surface-variant text-center mt-0.5">
                          {member.role}
                        </span>

                      </div>
                    ))}
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