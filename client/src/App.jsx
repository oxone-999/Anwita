import React, { useState } from "react";
import "./App.css";
import idleGif from "/videos/please-cute.gif";
import videoUrl from "/videos/bubududu-panda.gif";
import videoUrl2 from "/videos/bubududu-panda2.gif";

function App() {
  const [hovered, setHovered] = useState(null);

  React.useEffect(() => {
    console.log("Hovered: ", hovered);
  }, [hovered]);

  return (
    <>
      <div className="main">
      <h1>Deepali ! Will you go out with me ?</h1>
        {hovered === "yes" ? (
          <>
            <img src={videoUrl} alt="Idle GIF" />
          </>
        ) : hovered === "no" ? (
          <>
            <img src={videoUrl2} alt="Idle GIF" />
          </>
        ) : (
          <>
            <img src={idleGif} alt="Idle GIF" />
          </>
        )}
        <div className="button">
          <button
            onMouseEnter={() => setHovered("yes")}
            onMouseLeave={() => setHovered(null)}
          >
            Yes
          </button>
          <button
            onMouseEnter={() => setHovered("no")}
            onMouseLeave={() => setHovered(null)}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
