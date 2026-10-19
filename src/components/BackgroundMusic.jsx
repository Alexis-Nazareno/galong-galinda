import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState('');

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        if (error.name === 'NotAllowedError') {
          setPlaybackError('Autoplay was blocked. Tap Play Music to start the song.');
          return;
        }

        console.error('Unable to autoplay background music:', error);
        setPlaybackError('Music could not be played. Please use the music button to try again.');
      });
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
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {playbackError && (
        <p className="rounded-lg bg-surface-container-lowest px-3 py-2 text-xs text-error shadow-lg" role="alert">
          {playbackError}
        </p>
      )}
      <audio ref={audioRef} src="/music/blind-memories.mp3" loop preload="auto" />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        aria-pressed={isPlaying}
        className={`inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-label text-sm font-bold text-on-primary shadow-lg transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isPlaying ? 'ring-2 ring-primary/30 ring-offset-2' : ''}`}
      >
        {isPlaying ? (
          <span className="flex h-5 items-center gap-0.5" aria-hidden="true">
            <span className="h-2 w-1 animate-bounce rounded-full bg-current" />
            <span className="h-4 w-1 animate-bounce rounded-full bg-current [animation-delay:120ms]" />
            <span className="h-3 w-1 animate-bounce rounded-full bg-current [animation-delay:240ms]" />
          </span>
        ) : (
          <span className="material-symbols-outlined" aria-hidden="true">music_note</span>
        )}
        <span>{isPlaying ? 'Pause Music' : 'Play Music'}</span>
      </button>
    </div>
  );
}
