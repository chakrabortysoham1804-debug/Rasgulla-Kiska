import { useState } from "react";
import EnterScreen from "./Components/EnterScreen";
import EventCards from "./Components/EventCards";
import MusicToggle from "./Components/MusicToggle";
import Petals from "./Components/Petals";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="app-container">
      <Petals />

      {!entered ? (
        <EnterScreen onEnter={() => setEntered(true)} />
      ) : (
        <div className="content">
          <h1>Sister’s Wedding 💍</h1>
          <p>We are delighted to invite you</p>

          <EventCards />
          <MusicToggle />
        </div>
      )}
    </div>
  );
}
