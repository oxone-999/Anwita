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
        <h2>Deepali, will you be my girlfriend ?</h2>
        <p>
          Listen I know you are elder than me but really does age difference
          matter that much?. I mean it's just 2 years. You are giving me the
          reason that your parent will marry you somewhere else, but will you be
          happy if your future husband doesn't understand your passion or your
          dreams. Will it be ok if he will say you to become house wife . these
          are all assumptions I know but the assumption you are making that long
          distance won't work or you are elder that's why it wont gonna work,
          this also not fair na. We have similar goals , after I met you I was
          so motivated towards my passion because now a days no one supports
          this , and you supported me, you understood my dreams and motivated me
          to follow them. See what ever you say i cant stop missing or talking
          to you. Please don't do this to me. if you have a little bit interest
          in me please please don't reject me. I will help in every possible way
          to follow yours dreams. All your dreams , you want to be independent
          you can, you want to buy house for your parent you can, you want to
          follow your passion you can. You can do everything and anything I
          won't restrict you in anyway. This was just inside and I wanted to
          throw it out. It's your decision. Finally what you will say I will
          accept it.because in my mind there won't be any
          regrets that after so long I got a person who understands me, who
          understands my passion and I also understands her's.
        </p>
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
