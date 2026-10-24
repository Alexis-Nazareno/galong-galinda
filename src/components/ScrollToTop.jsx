import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let animationFrameId;
    let timeoutId;
    let cancelled = false;
    let previousTop;
    let stableFrames = 0;

    const scrollToTarget = () => {
      if (cancelled) return;

      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);
      if (!target) {
        animationFrameId = window.requestAnimationFrame(scrollToTarget);
        return;
      }

      const pageTransition = document.querySelector('.page-transition-enter');
      const isTransitioning = pageTransition?.getAnimations().some(
        (animation) => animation.playState === 'running',
      );
      const targetTop = target.getBoundingClientRect().top;

      if (
        isTransitioning ||
        previousTop === undefined ||
        Math.abs(targetTop - previousTop) > 1
      ) {
        stableFrames = 0;
      } else {
        stableFrames += 1;
      }

      previousTop = targetTop;

      if (stableFrames >= 2) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      animationFrameId = window.requestAnimationFrame(scrollToTarget);
    };

    if (hash) {
      animationFrameId = window.requestAnimationFrame(scrollToTarget);
      timeoutId = window.setTimeout(() => {
        cancelled = true;
      }, 10000);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(timeoutId);
    };
  }, [pathname, hash]);

  return null; // This component renders nothing to the screen
}