import { useEffect, useRef, useState } from 'react';

export default function ProductImageCarousel({ images, label }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (images.length < 2 || isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [activeImage, images.length, isPaused]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchDistance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(touchDistance) > 40) {
      setActiveImage((current) => (
        current + (touchDistance < 0 ? 1 : -1) + images.length
      ) % images.length);
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative h-64 touch-pan-y overflow-hidden rounded-2xl bg-surface-container shadow-md"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="relative h-full w-full overflow-hidden">
        {images.map((image, index) => {
          const isActive = activeImage === index;
          return (
            <div
              key={image.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'scale-100 opacity-100 blur-0' : 'pointer-events-none scale-105 opacity-0 blur-sm'}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-8">
        <div className="flex items-center gap-1" role="group" aria-label={`${label} photo slides`}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show ${label} photo ${index + 1}`}
              aria-current={activeImage === index ? 'true' : undefined}
              className="flex h-8 w-7 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white"
            >
              <span
                className={`h-2.5 rounded-full shadow-sm transition-all ${activeImage === index ? 'w-5 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/90'}`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
