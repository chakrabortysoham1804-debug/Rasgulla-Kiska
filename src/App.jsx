import { useState } from "react";
import EnterScreen from "./Components/EnterScreen";
import MusicToggle from "./Components/MusicToggle";
import Petals from "./Components/Petals";
import EventCards from "./Components/EventCards";

import "./App.css";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <Petals />

      {!entered ? (
        <EnterScreen onEnter={() => setEntered(true)} />
      ) : (
        <div className="app-container">
          <div className="overlay"></div>

          <div className="content">
            <h1>Sister’s Wedding 💍</h1>
            <p>We are delighted to invite you</p>
          </div>

          <MusicToggle startMusic={entered} />
        </div>
      )}
    </>
  );
}

export default App;
