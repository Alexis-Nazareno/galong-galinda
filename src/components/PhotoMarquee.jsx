import { useRef } from "react";
import ZoomableImage from "./ZoomableImage";
import useConfetti from "./useConfetti";

const HOVER_COOLDOWN_MS = 1800;

export default function PhotoMarquee({ photos, label }) {
  const { fireConfetti, confettiLayer } = useConfetti();
  const lastBurstRef = useRef(0);

  const celebrate = (element) => {
    const now = Date.now();
    if (now - lastBurstRef.current < HOVER_COOLDOWN_MS) return;
    lastBurstRef.current = now;
    fireConfetti(element);
  };

  const loop = [...photos, ...photos];

  return (
    <div className="photo-marquee" role="group" aria-label={label}>
      <div className="photo-marquee-track">
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
