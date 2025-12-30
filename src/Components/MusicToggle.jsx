import { useEffect, useRef, useState } from "react";

export default function MusicToggle({ startMusic }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (startMusic && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [startMusic]);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>

      <button onClick={toggleMusic} className="music-btn">
        {isPlaying ? "🔊 Music On" : "🔇 Music Off"}
      </button>
    </>
  );
}
