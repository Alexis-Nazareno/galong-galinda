import { useRef, useState } from 'react';

export default function ProductImageCarousel({ images, label }) {
  const [activeImage, setActiveImage] = useState(0);
  const touchStartX = useRef(null);

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchDistance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(touchDistance) > 40) {
      if (touchDistance < 0) showNextImage();
      else showPreviousImage();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative h-64 touch-pan-y overflow-hidden rounded-2xl bg-surface-container shadow-md"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex h-full w-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            aria-hidden={activeImage !== index}
            className="h-full w-full shrink-0 object-cover transition-transform duration-500"
            style={{ transform: `translateX(-${activeImage * 100}%)` }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white drop-shadow">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">swipe</span>
          Swipe to explore
        </span>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-black/50 px-2 py-1 text-[11px] font-semibold text-white" aria-live="polite">
            {activeImage + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={showPreviousImage}
            aria-label={`Previous ${label} photo`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-on-surface transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chevron_left</span>
          </button>
          <button
            type="button"
            onClick={showNextImage}
            aria-label={`Next ${label} photo`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-on-surface transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
