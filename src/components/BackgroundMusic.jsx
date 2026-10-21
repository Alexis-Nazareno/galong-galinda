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
