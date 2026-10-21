import { useState } from 'react';

function getInitialState(storageKey, icon) {
  if (icon !== 'favorite' || !storageKey) {
    return { count: 0, isLiked: false };
  }

  const countKey = `galong-galinda:heart-count:${storageKey}`;
  const storedCount = window.localStorage.getItem(countKey);
  const parsedCount = Number(storedCount);
  const count =
    storedCount !== null && Number.isSafeInteger(parsedCount) && parsedCount >= 0
      ? parsedCount
      : Math.floor(Math.random() * 16) + 5;

  if (storedCount === null || count !== parsedCount) {
    window.localStorage.setItem(countKey, String(count));
  }

  return {
    count,
    isLiked: window.localStorage.getItem(`${countKey}:liked`) === 'true',
  };
}

export default function LikeButton({
  label = 'Like',
  icon = 'thumb_up',
  storageKey,
  className = '',
}) {
  const [state, setState] = useState(() => getInitialState(storageKey, icon));
  const isIncrementingHeart = icon === 'favorite';

  function handleClick() {
    if (!isIncrementingHeart) {
      setState((current) => ({ ...current, isLiked: !current.isLiked }));
      return;
    }

    const nextLiked = !state.isLiked;
    const nextState = {
      count: Math.max(0, state.count + (nextLiked ? 1 : -1)),
      isLiked: nextLiked,
    };
    if (storageKey) {
      const countKey = `galong-galinda:heart-count:${storageKey}`;
      window.localStorage.setItem(countKey, String(nextState.count));
      window.localStorage.setItem(`${countKey}:liked`, String(nextState.isLiked));
    }
    setState(nextState);
  }

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={state.isLiked}
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 rounded-full border border-surface-container-high bg-surface-container-lowest px-3 py-2 text-xs font-semibold text-on-surface shadow-sm transition-colors hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${className}`}
    >
      <span
        className={`material-symbols-outlined text-[18px] ${icon === 'favorite' ? 'text-red-600' : ''}`}
        style={{ fontVariationSettings: state.isLiked ? "'FILL' 1" : "'FILL' 0" }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="min-w-3 text-right tabular-nums" aria-live="polite">
        {isIncrementingHeart ? state.count : state.isLiked ? 1 : 0}
      </span>
    </button>
  );
}
