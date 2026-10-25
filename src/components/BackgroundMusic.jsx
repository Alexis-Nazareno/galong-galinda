import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState('');

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let cancelled = false;
    const events = ['pointerdown', 'keydown', 'touchstart', 'wheel', 'scroll'];

    const removeListeners = () => {
      events.forEach((name) => window.removeEventListener(name, startOnInteraction));
    };

    function startOnInteraction() {
      audio.play()
        .then(() => {
          if (cancelled) return;
          setIsPlaying(true);
          setPlaybackError('');
          removeListeners();
        })
        .catch(() => {});
    }

    audio.play()
      .then(() => {
        if (!cancelled) setIsPlaying(true);
      })
      .catch((error) => {
        if (cancelled) return;
        if (error.name === 'NotAllowedError') {
          events.forEach((name) => window.addEventListener(name, startOnInteraction, { passive: true }));
          return;
        }

        console.error('Unable to autoplay background music:', error);
        setPlaybackError('Music could not be played. Please use the music button to try again.');
      });

    return () => {
      cancelled = true;
      removeListeners();
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setPlaybackError('');
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setPlaybackError('');
    } catch (error) {
      console.error('Unable to start background music:', error);
      setPlaybackError(error.name === 'NotAllowedError'
        ? 'Tap Play Music to allow playback.'
        : 'Music could not be played. Please try again.');
    }
  };

  return (
    <div className="music-control-container">
      {playbackError && (
        <p className="absolute bottom-full right-0 mb-3 w-max max-w-[min(20rem,calc(100vw-2.5rem))] rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-xs text-error shadow-lg" role="alert">
          {playbackError}
        </p>
      )}
      <audio ref={audioRef} src="/music/blind-memories.mp3" loop preload="auto" />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        aria-pressed={isPlaying}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
        className={`music-control ${isPlaying ? 'is-playing' : ''}`}
      >
        <span className="material-symbols-outlined music-control-icon" aria-hidden="true">
          music_note
        </span>
        <span className="music-control-waves" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  );
}
