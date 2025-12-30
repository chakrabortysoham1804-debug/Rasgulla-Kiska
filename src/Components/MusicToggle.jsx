import { useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setPlaying(!playing);
    } catch (err) {
      console.error("Audio play failed:", err);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          src={`${import.meta.env.BASE_URL}bg-music.mp3`}
          type="audio/mpeg"
        />
      </audio>

      <button className="music-btn" onClick={toggleMusic}>
        {playing ? "🔊 Music On" : "🔇 Music Off"}
      </button>
    </>
  );
}
