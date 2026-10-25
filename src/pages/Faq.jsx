import { useState } from "react";

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "What is Galóng Galínda?",
      answer:
        "Galóng Galínda is an educational and collegiate platform created by Physical Education and Sports Science students at City College of Angeles (CCA). It highlights purposeful kinesthetic movement, student sports events, physical fitness awareness, and practical athletic event coordination.",
    },
    {
      id: 2,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "What is the purpose of this website?",
      answer:
        "The website serves as an official academic showcase and portfolio for the EVENT3 subject requirement. It functions to provide comprehensive event details, highlight student-coaching initiatives, share athletic knowledge, and simulate a real-world sports service secretariat.",
    },
    {
      id: 3,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "Who can visit and explore this platform?",
      answer:
        "Anyone interested in physical education, sports officiating, wellness initiatives, community tournaments, and collegiate sports event management is welcome to visit, learn, and review our resources.",
    },
    {
      id: 4,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "What content can I find across the site?",
      answer: (
        <ul className="mt-space-sm list-disc pl-5 space-y-1 leading-relaxed">
          <li>
            Upcoming sports events, student workshops, and coaching modules.
          </li>
          <li>High-resolution event photo galleries and competition recaps.</li>
          <li>
            Physical fitness training products including Nutrifit snacks and
            Armfeet Powder.
          </li>
          <li>
            Sports officiating service profiles, guidelines, and proposal
            dispatcher forms.
          </li>
        </ul>
      ),
    },
    {
      id: 5,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "How do I participate in featured workshops or clinics?",
      answer:
        "Institutions and individuals can submit a request using our Event Request Dispatcher form on this Contact page or reach out directly through our liaison office hotline (0956 387 1771) and campus email.",
    },
    {
      id: 6,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "Are sessions open to everyone or limited to CCA students?",
      answer:
        "While some sessions cater specifically to City College of Angeles classes, many community workshops, officiating clinics, and athletic festivals are open to partner schools, local barangays, and sports organizations in Central Luzon.",
    },
    {
      id: 7,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "Is there a registration fee to attend academic seminars?",
      answer:
        "Most educational seminars hosted under the academic curriculum are completely free of charge or require only minimal cost-recovery contributions for materials, certificates, and tactical drills equipment.",
    },
    {
      id: 8,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question:
        "Where can I browse documentation and photos of previous events?",
      answer:
        "You can visit our Gallery & Events page, which features photographic archives of intramural games, movement clinics, teacher training sessions, and community sports festivals.",
    },
    {
      id: 9,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "Can students or participants submit photos to be featured?",
      answer: (
        <>
          Yes! Participants and student photographers are encouraged to submit
          event snapshots via email to{" "}
          <strong className="text-on-surface">galonggalinda@gmail.com</strong>{" "}
          or by tagging our official Galóng Galínda Facebook page.
        </>
      ),
    },
    {
      id: 10,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "How can I contact the organizing committee?",
      answer: (
        <>
          You can reach our Secretariat through our campus hotline at{" "}
          <strong className="text-on-surface">0956 387 1771</strong>, via email
          at{" "}
          <strong className="text-on-surface">galonggalinda@gmail.com</strong>,
          or in person at City College of Angeles, Arayat Blvd., Brgy. Pampang,
          Angeles City.
        </>
      ),
    },
    {
      id: 11,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "How often is this platform updated?",
      answer:
        "The portal is updated continuously throughout the academic semester as new modules, workshop photos, tournament schedules, and curriculum projects are completed.",
    },
    {
      id: 12,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "What if event dates or seminar schedules change?",
      answer:
        "In case of weather advisories, campus activity adjustments, or venue shifts, notifications will be posted prominently on the website banner and broadcasted across our official Facebook page.",
    },
    {
      id: 13,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question:
        "Can educators use the photos and guides for teaching purposes?",
      answer:
        "Yes. Because this is an academic educational initiative, educators and coaches may utilize our exercise illustrations and guides for non-commercial instructional use, provided proper attribution is given to Galóng Galínda and CCA.",
    },
    {
      id: 14,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question:
        "How do I report inaccurate information or request photo removal?",
      answer: (
        <>
          Please contact our site administrators directly at{" "}
          <strong className="text-on-surface">galonggalinda@gmail.com</strong>{" "}
          with the specific URL and details. Our student editorial committee
          will address inquiries promptly.
        </>
      ),
    },
    {
      id: 15,
      category: "about",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      question: "How can college students get involved in event leadership?",
      answer:
        "Students enrolled in Physical Education and related curricula can coordinate with the student council and course professors to join committee assignments in logistics, technical officiating, and participant engagement.",
    },
    {
      id: 16,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question: "What products are featured under Galóng Galínda?",
      answer: (
        <>
          We proudly showcase student wellness innovations designed for athletes
          and active learners:{" "}
          <strong className="text-secondary">Nutrifit</strong> (energy and
          nutrient-dense athlete snacks) and{" "}
          <strong className="text-primary">Armfeet</strong> (supportive athletic
          compression arm sleeves).
        </>
      ),
    },
    {
      id: 17,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question: "What is Nutrifit and what are its key nutritional benefits?",
      answer:
        "Nutrifit is a wholesome, energy-replenishing snack bar formulated with whole oats, natural honey, chia seeds, and roasted nuts. It delivers slow-releasing complex carbohydrates and protein for pre-game sustained energy and post-training recovery.",
    },
    {
      id: 18,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question: "What is Armfeet and how does it support athletic performance?",
      answer:
        "Armfeet consists of graduated compression arm sleeves crafted from breathable, moisture-wicking elastane fabric. It stabilizes muscle vibrations, enhances blood circulation in repetitive overhead sports like volleyball and basketball, and offers UV protection during outdoor field matches.",
    },
    {
      id: 19,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question: "What are the prices for Nutrifit and Armfeet items?",
      answer:
        "Pricing is kept affordable for collegiate athletes and students: Nutrifit bars are offered at student-friendly rates (≈ ₱35 to ₱50 per pack), while Armfeet compression sleeves are priced at ₱120 to ₱150 per pair, specifically priced to support student athletic accessibility.",
    },
    {
      id: 20,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question: "How do I purchase or order Nutrifit and Armfeet?",
      answer:
        "Orders can be placed during on-campus physical education pop-up booths, major sports fest days at CCA, or by sending a direct inquiry through our contact from and Facebook messenger team.",
    },
    {
      id: 21,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question: "Are these products available all year round?",
      answer:
        "Nutrifit and Armfeet are produced in limited batches synchronized with active academic terms, college sports meets, and seminar workshop cycles to guarantee fresh ingredients and optimal gear quality.",
    },
    {
      id: 22,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question: "Can non-CCA residents place orders online?",
      answer:
        "Yes, residents in Angeles City and nearby Pampanga municipalities can place pre-orders online for on-campus pickup at CCA or local scheduled courier dispatch during academic operating weeks.",
    },
    {
      id: 23,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question:
        "Are there allergy warnings and dietary considerations for Nutrifit?",
      answer: (
        <>
          <span className="font-semibold text-primary">Allergen Notice:</span>{" "}
          Nutrifit contains peanuts, tree nuts, and whole oats. Individuals with
          severe nut allergies or specific dietary restrictions should review
          ingredient specifications before consumption.
        </>
      ),
    },
    {
      id: 24,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question: "Can defective or wrong size Armfeet sleeves be exchanged?",
      answer:
        "Unused, unworn Armfeet sleeves with tags intact may be exchanged for a different size within 3 school days of pickup at the CCA physical education department hub.",
    },
    {
      id: 25,
      category: "products",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      question:
        "Where can I see complete specifications and size charts for Armfeet?",
      answer:
        "Detailed bicep-to-wrist size charts (S, M, L, XL), compression ratios, and fabric care guidelines are detailed in the Services & Workshops section and at our secretariat counter.",
    },
    {
      id: 26,
      category: "officiating",
      badgeColor: "bg-surface-container-high text-tertiary",
      question: "What sports officiating services does Galóng Galínda provide?",
      answer:
        "We provide comprehensive athletic officiating, including certified student referees, table officials, scorekeepers, timekeepers, and tournament technical directors for school leagues and community invitationals.",
    },
    {
      id: 27,
      category: "officiating",
      badgeColor: "bg-surface-container-high text-tertiary",
      question: "Which sports disciplines can your technical officials manage?",
      answer: (
        <>
          Our student technical corps specializes primarily in{" "}
          <strong className="text-on-surface">Basketball</strong> (FIBA rules)
          and <strong className="text-on-surface">Volleyball</strong> (FIVB
          rules), with supplementary competence in badminton, table tennis, and
          track & field officiating.
        </>
      ),
    },
    {
      id: 28,
      category: "officiating",
      badgeColor: "bg-surface-container-high text-tertiary",
      question:
        "What are the qualifications of your student referees and officials?",
      answer:
        "All officiating members are enrolled BPED students who have undergone rigorous practical coursework in Rules and Officiating, tactical mechanics drills, SBP/LVPI guideline workshops, and supervised officiating in campus intramurals.",
    },
    {
      id: 29,
      category: "officiating",
      badgeColor: "bg-surface-container-high text-tertiary",
      question:
        "Can external schools or barangay leagues hire your officiating crew?",
      answer:
        "Yes! We welcome official partnerships with external academic institutions, barangay sports committees, and youth leagues across Angeles City looking for competent, fair, and professional student match officials.",
    },
    {
      id: 30,
      category: "officiating",
      badgeColor: "bg-surface-container-high text-tertiary",
      question: "How are officiating service fees determined?",
      answer:
        "Honoraria and coordination rates depend on the number of matches, tournament duration, game level (elementary, high school, or open division), venue location, and technical table requirements. Inquiries receive a formal itemized quote upon proposal dispatch.",
    },
    {
      id: 31,
      category: "officiating",
      badgeColor: "bg-surface-container-high text-tertiary",
      question: "How early must a tournament officiating request be submitted?",
      answer: (
        <>
          We request a minimum lead time of{" "}
          <strong className="text-on-surface">2 to 3 weeks</strong> before
          tournament tip-off to allow our technical committee to assign
          officials without conflict with their college academic schedules.
        </>
      ),
    },
    {
      id: 32,
      category: "officiating",
      badgeColor: "bg-surface-container-high text-tertiary",
      question: "Do your officials enforce official international rulebooks?",
      answer:
        "Yes. Our referees strictly implement the latest FIBA official basketball rules and FIVB official volleyball guidelines, along with customized tournament ground rules agreed upon with organizers during technical solidarity meetings.",
    },
    {
      id: 33,
      category: "officiating",
      badgeColor: "bg-surface-container-high text-tertiary",
      question:
        "Does Galóng Galínda conduct officiating workshops for high school students?",
      answer:
        "Yes, our senior sports science facilitators conduct basic mechanics and hand-signal seminars for junior referees, PE student-leaders, and grassroots sports coordinators as part of our community extension advocacy.",
    },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <main>
      {/* Hero Showcase Section (Matched to Home/About) */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-16 lg:pt-24 pb-12 border-b border-surface-container-high/60">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center text-center gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="font-display-hero text-4xl lg:text-[64px] lg:leading-[72px] text-on-surface font-bold tracking-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x drop-shadow-sm">
                Questions
              </span>
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed mt-2 max-w-2xl mx-auto">
              Find comprehensive answers regarding Galóng Galínda, student
              initiatives, our Nutrifit & Armfeet products, and sports
              officiating services.
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-surface-container-low py-12 px-margin-mobile lg:px-margin"
        id="faqs-section"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Category Filter Pills */}
          <div
            className="flex flex-wrap items-center justify-center gap-space-xs mb-space-lg w-full"
            id="faq-category-pills"
          >
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer shadow-sm hover:opacity-95 font-semibold ${activeCategory === "all" ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest"}`}
            >
              All FAQs (33)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("about")}
              className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer shadow-sm hover:opacity-95 font-medium ${activeCategory === "about" ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest"}`}
            >
              About & Organization (15)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("products")}
              className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer shadow-sm hover:opacity-95 font-medium ${activeCategory === "products" ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest"}`}
            >
              Products: Nutrifit & Armfeet (10)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("officiating")}
              className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer shadow-sm hover:opacity-95 font-medium ${activeCategory === "officiating" ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest"}`}
            >
              Sports Officiating (8)
            </button>
          </div>

          {/* FAQ Accordion List */}
          <div
            key={activeCategory}
            className="tab-transition-enter w-full flex flex-col gap-space-sm"
          >
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="faq-card rounded-xl bg-surface-container-lowest border border-surface-container-high/60 shadow-sm transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-space-md md:p-space-lg flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-headline-sm text-[18px] md:text-headline-sm font-bold text-on-surface flex items-center gap-space-sm">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-label-badge font-bold ${faq.badgeColor}`}
                    >
                      {faq.id.toString().padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-on-surface-variant transition-transform duration-200 shrink-0 ml-2 ${openFaqId === faq.id ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </button>

                {/* Conditionally render the body if this FAQ is open */}
                {openFaqId === faq.id && (
                  <div className="px-space-md md:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md border-t border-surface-container/50">
                    <p className="mt-space-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Urgent Assistance Banner */}
          <div className="mt-space-lg p-space-md rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md w-full border border-surface-container-high/60">
            <div className="flex items-center gap-space-sm text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  contact_support
                </span>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Have an urgent question or specific campus inquiry?
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Our team is available by phone Monday to Friday from 8:00 AM
                  to 5:00 PM.
                </p>
              </div>
            </div>
            <a
              className="px-space-md py-2 rounded-lg bg-secondary text-on-secondary font-label-badge text-label-badge uppercase tracking-wider hover:bg-secondary-container transition-colors shrink-0 flex items-center gap-1 shadow-sm"
              href="tel:09563871771"
            >
              <span className="material-symbols-outlined text-[16px]">
                call
              </span>
              <span>Call 0956 387 1771</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
