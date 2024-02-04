import { useState } from "react";
import "./App.css";
import idleGif from "/videos/please-cute.gif";
import videoUrl from "/videos/bubududu-panda.gif";

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
        <h2>Will you be my Valentine ?</h2>
        <img src={gif} />
        {!yes && (
          <div className="button">
            <button
              style={{
                backgroundColor: "#50C878",
                width: `${size}rem`,
                height: `${size}rem`,
              }}
              onClick={() => {
                setGif(videoUrl);
                setYes(true);
              }}
            >
              <p style={{ width: `${size}rem`, height: `${size}rem` }}>Yes</p>
            </button>
            <button onClick={handleNo}>{No_list[index]}</button>
          </div>
        )}
        {yes && (
          <>
            <img src={idleGif} />
            <h2>Please Give Me Your Address</h2>
          </>
        )}
      </div>
    </>
  );
}

export default App;
