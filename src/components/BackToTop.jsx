export default function BackToTop({ isVisible }) {
  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="back-to-top flex h-9 w-14 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="back-to-top-tooltip" aria-hidden="true">Back to top</span>
      <svg
        className="back-to-top-arrow"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="back-to-top-gradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#63b8f2" />
            <stop offset="1" stopColor="#4f7ff0" />
          </linearGradient>
        </defs>
        <path d="m4 13 9.9-9.9a3 3 0 0 1 4.2 0L28 13l-4.2 4.2L16 9.4l-7.8 7.8z" />
        <path d="m4 25 9.9-9.9a3 3 0 0 1 4.2 0L28 25l-4.2 4.2L16 21.4l-7.8 7.8z" />
      </svg>
    </button>
  );
}
