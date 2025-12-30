import { useState, useRef } from "react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>
      <button className="music-btn" onClick={toggleMusic}>
        {isPlaying ? "Music Off" : "Music On"}
      </button>
    </>
  );
}
