import { useState } from "react";
import "./App.css";
import idleGif from "/videos/please-cute.gif";
import videoUrl from "/videos/bubududu-panda.gif";
import CountDown from "./CountDown.jsx"

function App() {
  const [index, setIndex] = useState(0);
  const [gif, setGif] = useState(idleGif);
  const [size, setSize] = useState(4);
  const [yes, setYes] = useState(false);
  const No_list = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again",
    "Last chance",
    "Surely not?",
    "You might regret this!",
    "Give it another chance",
    "Yes",
  ];

  const handleNo = () => {
    if (index < No_list.length - 1) {
      setIndex(index + 1);
      setSize(size + 2);
    } else {
      setGif(videoUrl);
      setYes(true);
    }
  };

  return (
    <>
      <div className="main">
        {/* {!yes ? (<h2>Anwita !! Will you be my Girlfriend ?</h2>) : (
          <h2>Yayyyyyyy! I LOVE YOU BABYYYYY!!</h2>
        )}
        <img src={gif} />
        {!yes && (
          <div className="button">
            <button
              style={{
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setGif(videoUrl);
                setYes(true);
              }}
            >
              <p style={{ fontSize: `${size * 7}px`, color: "green" }}>Yes</p>
            </button>
            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={handleNo}
            >
              {No_list[index]}JM+
            </button>
          </div>
        )} */}

        {/* <CountDown /> */}
        
        <h1>I LOVE YOU <strong>ANWITA VERMA</strong>!!!</h1>
        <h1>I want to grow old with you!!</h1>
        <h1>I can't live without you, not even a single second</h1>
      </div>
    </>
  );
}

export default App;

