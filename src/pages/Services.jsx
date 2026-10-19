import { useState, useEffect } from "react";
import Papa from "papaparse";

export default function Services() {
  const [dynamicServices, setDynamicServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sheetCsvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSowJhCiO6-TjuZRK0Iho_eaLfsZBey_2lrFYMCuf88hc91ogE6_K7jv9QurxlVkHonQAu2dT9bUsEQ/pub?gid=1327649785&single=true&output=csv";

    Papa.parse(sheetCsvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        // Filter out any rows without a title
        const validRows = results.data.filter(
          (row) => row.title && row.imageMain,
        );
        setDynamicServices(validRows);
        setIsLoading(false);
      },
      error: (error) => {
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

              {/* Highlights Pill Box */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="grid grid-cols-1 gap-space-sm p-space-md rounded-xl bg-surface-container-lowest/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-container-highest self-stretch shrink-0">
                  <a
                    href="#officiating"
                    className="flex items-center gap-space-sm p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors group border border-surface-container-high/50"
                  >
                    <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                      sports
                    </span>
                    <span className="font-headline-sm text-[15px] font-bold text-on-surface">
                      Officiating
                    </span>
                  </a>
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
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="mb-2 font-label-lg text-label-lg font-bold text-on-surface">
                      Sports Officiating
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "Basketball",
                        "Volleyball",
                        "Swimming",
                        "Badminton",
                      ].map((sport) => (
                        <li
                          key={sport}
                          className="rounded-full bg-secondary/10 px-3 py-1.5 text-sm font-semibold text-secondary"
                        >
                          {sport}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-label-lg text-label-lg font-bold text-on-surface">
                      Event Organizing
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "PE Days",
                        "Culminating Activities",
                        "School Events",
                      ].map((activity) => (
                        <li
                          key={activity}
                          className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary"
                        >
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div className="relative rounded-2xl overflow-hidden shadow-md sm:col-span-2 h-64 bg-surface-container">
                  <img
                    alt="Student team at a school sports festival"
                    className="w-full h-full object-cover"
                    src="/gallery/volleyball-officiating-session.jpeg"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-sm h-40 bg-surface-container">
                  <img
                    alt="Volleyball officiating during a school sports event"
                    className="w-full h-full object-cover"
                    src="/gallery/basketball-officiating-session.jpeg"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-xl bg-surface-container shadow-sm">
                  <img
                    alt="Basketball game in progress at Pampanga People's Gym"
                    className="h-full w-full object-cover"
                    src="/gallery/basketball-court-game.jpeg"
                  />
                </div>
              </div>
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
