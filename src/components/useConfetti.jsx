import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const CONFETTI_COUNT = 64;
const CONFETTI_DURATION_MS = 2300;
const CONFETTI_COLORS = [
  "#ff4d6d",
  "#ffb703",
  "#fff176",
  "#5dd9ff",
  "#a87bff",
  "#79f2c0",
  "#ffffff",
];

const createConfetti = (rect) =>
  Array.from({ length: CONFETTI_COUNT }, (_, index) => ({
    id: index,
    left: 25 + Math.round(Math.random() * 50),
    top: 60 + Math.round(Math.random() * 25),
    spreadX: Math.round((Math.random() - 0.5) * 2 * rect.width * 0.55),
    up: -Math.round(rect.height * (0.45 + Math.random() * 0.5)),
    fall: Math.round(rect.height * (0.5 + Math.random() * 0.5) + 60),
    size: 6 + Math.round(Math.random() * 7),
    rotation: Math.round(Math.random() * 720 + 240),
    delay: Math.round(Math.random() * 120),
    color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
    roundness: Math.round(Math.random() * 45),
  }));

export default function useConfetti() {
  const timeoutRef = useRef(null);
  const [burst, setBurst] = useState(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const fireConfetti = useCallback((element) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = element?.getBoundingClientRect();
    if (!rect) return;
    clearTimeout(timeoutRef.current);
    setBurst({ key: Date.now(), rect, confetti: createConfetti(rect) });
    timeoutRef.current = setTimeout(
      () => setBurst(null),
      CONFETTI_DURATION_MS + 300,
    );
  }, []);

  const confettiLayer = burst
    ? createPortal(
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
          {burst.confetti.map((piece) => (
            <span
              key={piece.id}
              className="poster-sparkle"
              style={{
                left: `${piece.left}%`,
                top: `${piece.top}%`,
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                borderRadius: `${piece.roundness}%`,
                animationDelay: `${piece.delay}ms`,
                "--confetti-x": `${piece.spreadX}px`,
                "--confetti-up": `${piece.up}px`,
                "--confetti-fall": `${piece.fall}px`,
                "--confetti-rotation": `${piece.rotation}deg`,
              }}
            />
          ))}
        </div>,
        document.body,
      )
    : null;

  return { fireConfetti, confettiLayer };
}
