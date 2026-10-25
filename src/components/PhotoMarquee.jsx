import { useRef, useState } from "react";
import ZoomableImage from "./ZoomableImage";
import useConfetti from "./useConfetti";

const HOVER_COOLDOWN_MS = 1800;
const MIN_SET_SIZE = 6;
const SECONDS_PER_PHOTO = 6;
const MARQUEE_EPOCH = performance.now();

export default function PhotoMarquee({ photos, label }) {
  const { fireConfetti, confettiLayer } = useConfetti();
  const lastBurstRef = useRef(0);

  const celebrate = (element) => {
    const now = Date.now();
    if (now - lastBurstRef.current < HOVER_COOLDOWN_MS) return;
    lastBurstRef.current = now;
    fireConfetti(element);
  };

  const repeats = Math.max(1, Math.ceil(MIN_SET_SIZE / photos.length));
  const set = Array.from({ length: repeats }, () => photos).flat();
  const loop = [...set, ...set];
  const duration = set.length * SECONDS_PER_PHOTO;
  // Same speed per photo, and a shared clock so every marquee moves in step
  const [offset] = useState(() => ((performance.now() - MARQUEE_EPOCH) / 1000) % duration);

  return (
    <div className="photo-marquee" role="group" aria-label={label}>
      <div
        className="photo-marquee-track"
        style={{ animationDuration: `${duration}s`, animationDelay: `-${offset}s` }}
      >
        {loop.map((photo, index) => {
          const isClone = index >= photos.length;
          return (
            <div
              key={`${photo.imgSrc}-${index}`}
              className="photo-marquee-item"
              aria-hidden={isClone}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") celebrate(event.currentTarget);
              }}
              onClick={(event) => celebrate(event.currentTarget)}
            >
              <ZoomableImage
                src={photo.imgSrc}
                alt={isClone ? "" : label}
                wrapperClassName="block h-full w-full"
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
      {confettiLayer}
    </div>
  );
}
