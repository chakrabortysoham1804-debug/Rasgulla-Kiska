export default function EnterScreen({ onEnter }) {
  return (
    <div className="enter-screen">
      <div className="enter-content">
        <h1>Tap to Enter Invitation</h1>
        <button className="enter-btn" onClick={onEnter}>
          Enter
        </button>
      </div>
    </div>
  );
}
