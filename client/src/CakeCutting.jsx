import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./cake.css";
import cakeImg from "/images/cake.png"; // Replace with your cake image
import knifeImg from "/images/knife.png"; // Replace with knife image
import sound from "/birthday.mp3"; // Replace with birthday sound
import Birthday from "./Birthday";

const CakeCutting = () => {
  const [knifeActive, setKnifeActive] = useState(false);
  const [cutting, setCutting] = useState(false);
  const [cutDone, setCutDone] = useState(false);
  const audioRef = useRef(null);

  const [showBirthday, setShowBirthday] = useState(false);

  useEffect(() => {
    if (cutDone) {
      const timer = setTimeout(() => {
        setShowBirthday(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cutDone]);

  const handleActivateKnife = () => {
    setKnifeActive(true);
  };

  const handleMouseDown = () => {
    if (knifeActive && !cutDone) {
      setCutting(true);
      audioRef.current.play();
    }
  };

  const handleMouseUp = () => {
    if (cutting) {
      setCutting(false);
      setCutDone(true);
    }
  };

  // Knife follows mouse
  useEffect(() => {
    const knife = document.getElementById("knife");
    const moveKnife = (e) => {
      if (!knifeActive) return;
      const angle =
        (Math.atan2(e.clientY - knife.offsetTop, e.clientX - knife.offsetLeft) *
          180) /
        Math.PI;
      knife.style.left = `${e.clientX - 40}px`;
      knife.style.top = `${e.clientY - 20}px`;
      knife.style.transform = `rotate(${angle}deg)`;
    };
    window.addEventListener("mousemove", moveKnife);
    return () => window.removeEventListener("mousemove", moveKnife);
  }, [knifeActive]);

  return (
    <div
      className="cake-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <audio src={sound} ref={audioRef} />
      {showBirthday ? (
        <Birthday />
      ) : (
        <>
          {!knifeActive && (
            <img
              src={knifeImg}
              alt="knife"
              className="knife-button"
              onClick={handleActivateKnife}
            />
          )}

          {!knifeActive && <h1>Pick the knife</h1>}

          {knifeActive && (
            <img src={knifeImg} id="knife" className="knife" alt="knife" />
          )}

          <div className={`cake-area ${cutting ? "cutting" : ""}`}>
            <div className={`cake-slice-container ${cutDone ? "sliced" : ""}`}>
              <img src={cakeImg} alt="Cake Left" className="cake-half left" />
              <img src={cakeImg} alt="Cake Right" className="cake-half right" />
            </div>
          </div>

          <AnimatePresence>
            {cutDone && (
              <motion.div
                className="happy-message"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                exit={{ scale: 0 }}
              >
                🎉 Happy Birthday Anwi! 🎉
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default CakeCutting;
