export default function EnterScreen({ onEnter }) {
  return (
    <div className="enter-screen">
      <div className="overlay"></div>

      <div className="enter-content">
        <h1>Tap to Enter Invitation</h1>

        <button onClick={onEnter} className="enter-btn">
          Enter 💍
        </button>
      </div>
    </div>
  );
}
