import React, { useEffect, useState } from "react";

import "./App.css";
import CakeCutting from "./CakeCutting";
import CountdownApp from "./CountDown";
import {
  data,
  whatToGiveGetsAngry,
  sheWants,
  Flowers,
  facts,
  MusicEntertainment,
  dislikes,
  Hobbies,
} from "./data";
import styles from "./pass.module.css";

const STATIC_PASSWORD = "ANUJ";

function App() {
  const [close, setClose] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input === STATIC_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };
  if (!isAuthenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Enter Password</h2>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Submit</button>
        </div>
      </div>
    );
  }
  return (
    <div className="main">
      <div className="profile">
        <h1>My Lovely Girlfriend : Anwi</h1>
      </div>

      {/* {close ? (
        <CakeCutting />
      ) : (
        <CountdownApp
          title="Birthday Countdown"
          date="2025-06-08T00:00:00"
          setClose={setClose}
        />
      )} */}
      <CountdownApp title="Until we meet" date="2025-06-10T00:00:00" />

      <div className="section">
        <h2> Favourite Dishes and Food </h2>
        <div className="list">
          {data.map((item) => (
            <div key={item.id} className="item">
              <span>{item.dish}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2> Favourite Flowers </h2>
        <div className="list">
          {Flowers.map((item) => (
            <div key={item.id} className="item">
              <span>{item.flower}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2> What to give when she gets angry </h2>
        <div className="list">
          {whatToGiveGetsAngry.map((item) => (
            <div key={item.id} className="item">
              <span>{item.gift}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2> Facts about her </h2>
        <div className="list">
          {facts.map((item) => (
            <div key={item.id} className="item">
              <span>{item.fact}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2> Music and Entertainment </h2>
        <div className="list">
          {MusicEntertainment.map((item) => (
            <div key={item.id} className="item">
              <span>{item.song}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2> What she wants </h2>
        <div className="list">
          {sheWants.map((item) => (
            <div key={item.id} className="item">
              <span>{item.want}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2> Hobbies </h2>
        <div className="list">
          {Hobbies.map((item) => (
            <div key={item.id} className="item">
              <span>{item.hobby}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2> Dislikes </h2>
        <div className="list">
          {dislikes.map((item) => (
            <div key={item.id} className="item">
              <span>{item.dislike}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <h2> Made with ❤️ by Bihariji </h2>
      </div>
    </div>
  );
}

export default App;
