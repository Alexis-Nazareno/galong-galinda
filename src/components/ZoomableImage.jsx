import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const EMBER_COUNT = 48;
const EMBER_COLORS = ["#ff7a18", "#ffb347", "#ffd166", "#ff4d1a", "#ffe29a"];

const createEmbers = () =>
  Array.from({ length: EMBER_COUNT }, (_, index) => ({
    id: index,
    left: Math.round(Math.random() * 110 - 5),
    bottom: Math.round(Math.random() * 30 - 8),
    size: 4 + Math.round(Math.random() * 7),
    rise: 140 + Math.round(Math.random() * 280),
    sway: Math.round((Math.random() - 0.5) * 120),
    duration: 2600 + Math.round(Math.random() * 2800),
    delay: Math.round(Math.random() * 2400),
    color: EMBER_COLORS[index % EMBER_COLORS.length],
  }));

export default function ZoomableImage({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  children = null,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [embers, setEmbers] = useState([]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const open = (event) => {
    event.stopPropagation();
    setEmbers(createEmbers());
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        onKeyDown={(event) => event.stopPropagation()}
        aria-label={`View larger image: ${alt}`}
        className={`zoomable-image-trigger ${wrapperClassName}`}
      >
        <img src={src} alt={alt} loading="lazy" className={className} />
        {children}
      </button>
      {isOpen &&
        createPortal(
          <div
            className="zoomable-image-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={alt || "Image preview"}
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(false);
            }}
          >
            <div className="zoomable-image-stage">
              <img
                src={src}
                alt={alt}
                className="zoomable-image-full"
                onClick={(event) => event.stopPropagation()}
              />
              <div className="zoomable-ember-field" aria-hidden="true">
                {embers.map((ember) => (
                  <span
                    key={ember.id}
                    className="zoomable-ember"
                    style={{
                      left: `${ember.left}%`,
                      bottom: `${ember.bottom}%`,
                      width: ember.size,
                      height: ember.size,
                      backgroundColor: ember.color,
                      color: ember.color,
                      animationDuration: `${ember.duration}ms`,
                      animationDelay: `${ember.delay}ms`,
                      "--ember-rise": `${ember.rise}px`,
                      "--ember-sway": `${ember.sway}px`,
                    }}
                  />
                ))}
              </div>
            </div>
            <button
              type="button"
              className="zoomable-image-close"
              aria-label="Close image preview"
              onClick={(event) => {
                event.stopPropagation();
                setIsOpen(false);
              }}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                close
              </span>
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}
