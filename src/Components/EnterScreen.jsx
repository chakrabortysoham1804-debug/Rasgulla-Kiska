export default function EnterScreen({ onEnter }) {
  return (
    <div className="enter-screen">
      <div className="overlay"></div>

      <div className="enter-content">
        <h1>Tap to Enter Invitation</h1>
        <p>Experience the celebration 🎉</p>

        <button className="enter-btn pulse" onClick={onEnter}>
          Enter 💍
        </button>
      </div>
    </div>
  );
}
