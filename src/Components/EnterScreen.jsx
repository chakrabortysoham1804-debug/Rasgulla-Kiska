export default function EnterScreen({ onEnter }) {
  return (
    <div className="enter-screen">
      <div className="overlay"></div>

      <div className="enter-content">
        <p><h1>Tap to officially join the celebrations 💃🕺</h1></p>

        <button className="enter-btn pulse" onClick={onEnter}>
          Enter 💍
        </button>
      </div>
    </div>
  );
}
