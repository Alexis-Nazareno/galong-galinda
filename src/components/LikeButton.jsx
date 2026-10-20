import { useState } from 'react';

export default function LikeButton({ label = 'Like', className = '' }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isLiked}
      onClick={() => setIsLiked((liked) => !liked)}
      className={`inline-flex items-center gap-1.5 rounded-full bg-surface-container-lowest/95 px-3 py-2 text-xs font-semibold text-on-surface shadow-sm transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${isLiked ? 'text-primary' : ''} ${className}`}
    >
      <span
        className="material-symbols-outlined text-[18px]"
        style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
        aria-hidden="true"
      >
        favorite
      </span>
      <span>{isLiked ? 'Liked' : 'Like'}</span>
    </button>
  );
}
