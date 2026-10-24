import ProductImageCarousel from '../components/ProductImageCarousel';

const promoVideoClass = 'absolute inset-0 h-full w-full';

function PromoVideo({ src, title }) {
  return (
    <div className="relative flex h-64 flex-col overflow-hidden rounded-2xl border-2 border-primary/70 bg-black shadow-lg ring-1 ring-on-surface/15">
      <div className="z-10 flex items-center gap-1.5 border-b border-white/20 bg-slate-950 px-3 py-2">
        <span className="material-symbols-outlined text-[14px] text-secondary-fixed" aria-hidden="true">movie</span>
        <span className="font-label-badge text-[10px] font-bold uppercase text-secondary-fixed">Promo Reel</span>
      </div>
      <div className="relative flex-1 w-full">
        <iframe
          src={src}
          title={`${title} promotional video`}
          className={promoVideoClass}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <main>
      <div className="flex w-full flex-col">
        <section className="relative w-full overflow-hidden border-b border-surface-container-high/50 bg-surface-container-lowest py-16 lg:py-24">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-secondary-container/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-7xl px-margin-mobile lg:px-margin">
            <h1 className="font-display-hero text-4xl font-bold tracking-tight text-on-surface lg:text-[64px] lg:leading-[72px]">
              Our <span className="bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="mt-4 max-w-3xl font-body-lg text-lg leading-relaxed text-on-surface-variant">
              Explore Nutrifit Crackers and ArmFeet Powder, with product photos and promotional videos.
            </p>
          </div>
        </section>

        <section className="w-full bg-background py-space-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-24 px-margin-mobile lg:gap-32 lg:px-margin">
            <article id="nutrifit" className="grid scroll-mt-32 grid-cols-1 items-center gap-space-lg lg:grid-cols-12 lg:gap-space-xl">
              <div className="order-2 grid grid-cols-1 gap-space-sm sm:grid-cols-2 lg:col-span-7 lg:order-1">
                <ProductImageCarousel
                  label="Nutrifit"
                  images={[
                    { src: '/gallery/crackers.jpg', alt: 'Nutrifit Crackers packages' },
                    { src: '/gallery/crackers-armfeet.jpg', alt: 'Nutrifit Crackers displayed with ArmFeet powder' }
                  ]}
                />
                <PromoVideo
                  title="Nutrifit Crackers"
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1516798193346768%2F&show_text=false&width=560&t=0"
                />
              </div>
              <div className="order-1 flex flex-col gap-space-md lg:col-span-5 lg:order-2">
                <div>
                  <span className="mb-3 inline-flex items-center rounded-full bg-tertiary/10 px-3 py-1 font-label-badge text-label-badge font-bold uppercase tracking-wider text-tertiary">
                    Athletic Nutrition
                  </span>
                  <h2 className="font-headline-lg text-headline-md font-bold text-on-surface lg:text-headline-lg">NutriFit Crackers</h2>
                </div>
                <p className="font-body-lg leading-relaxed text-on-surface-variant">
                  Take a break and take a bite! Whole grain goodness feels so right. Simple snack with tasty delight—fuel your day with every crunch in sight!
                </p>
              </div>
            </article>

            <article id="armfeet" className="grid scroll-mt-32 grid-cols-1 items-center gap-space-lg lg:grid-cols-12 lg:gap-space-xl">
              <div className="flex flex-col gap-space-md lg:col-span-5">
                <div>
                  <span className="mb-3 inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 font-label-badge text-label-badge font-bold uppercase tracking-wider text-secondary">
                    Personal Care
                  </span>
                  <h2 className="font-headline-lg text-headline-md font-bold text-on-surface lg:text-headline-lg">ArmFeet Powder</h2>
                </div>
                <p className="font-body-lg leading-relaxed text-on-surface-variant">
                  Stay fresh and energized all day! With ArmFeet 2-in-1 Underarm &amp; Foot Deodorant Powder, you can stay confident whether you’re on the go, at school, or playing your favorite sports. No more worries about sweat and odor—just long-lasting freshness and comfort!
                </p>
              </div>
              <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2 lg:col-span-7">
                <ProductImageCarousel
                  label="ArmFeet"
                  images={[
                    { src: '/gallery/sticker.webp', alt: 'ArmFeet deodorant powder bottles' },
                    { src: '/gallery/crackers-armfeet.jpg', alt: 'ArmFeet powder shown with Nutrifit Crackers' }
                  ]}
                />
                <PromoVideo
                  title="ArmFeet Powder"
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1445901410357588%2F&show_text=false&width=560&t=0"
                />
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
