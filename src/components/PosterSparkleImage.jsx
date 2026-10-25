import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const DROP_COUNT = 34;
const DROP_DURATION_MS = 2200;
const DROP_COLORS = ["#ff4d1a", "#ff7a18", "#ffb347", "#ffd166"];

const createDrops = (rect) =>
  Array.from({ length: DROP_COUNT }, (_, index) => ({
    id: index,
    left: 4 + Math.round(Math.random() * 92),
    top: 70 + Math.round(Math.random() * 25),
    width: 7 + Math.round(Math.random() * 7),
    fall: Math.round(rect.height * (0.25 + Math.random() * 0.4) + 50),
    sway: Math.round((Math.random() - 0.5) * 24),
    delay: Math.round(Math.random() * 700),
    color: DROP_COLORS[index % DROP_COLORS.length],
  }));

export default function PosterSparkleImage({ className = "", ...imgProps }) {
  const imageRef = useRef(null);
  const timeoutRef = useRef(null);
  const [burst, setBurst] = useState(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleClick = () => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    clearTimeout(timeoutRef.current);
    setBurst({ key: Date.now(), rect, drops: createDrops(rect) });
    timeoutRef.current = setTimeout(
      () => setBurst(null),
      DROP_DURATION_MS + 800,
    );
  };

  return (
    <>
      <img
        ref={imageRef}
        className={`cursor-pointer ${className}`}
        onClick={handleClick}
        {...imgProps}
      />
      {burst &&
        createPortal(
          <div
            key={burst.key}
            aria-hidden="true"
            className="poster-sparkle-burst"
            style={{
              left: burst.rect.left,
              top: burst.rect.top,
              width: burst.rect.width,
              height: burst.rect.height,
            }}
          >
            {burst.drops.map((drop) => (
              <span
                key={drop.id}
                className="fire-drop"
                style={{
                  left: `${drop.left}%`,
                  top: `${drop.top}%`,
                  width: `${drop.width}px`,
                  height: `${drop.width * 1.6}px`,
                  background: `radial-gradient(circle at 50% 70%, #fff3b0 0%, ${drop.color} 55%, transparent 100%)`,
                  boxShadow: `0 0 10px 2px ${drop.color}`,
                  animationDelay: `${drop.delay}ms`,
                  "--drop-fall": `${drop.fall}px`,
                  "--drop-sway": `${drop.sway}px`,
                }}
              />
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}
