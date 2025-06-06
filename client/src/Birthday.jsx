import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./birthday.css";

const notes = [
  {
    image: "/images/1.jpg",
    text: "তোমার মুখে থাকুক হাসি, প্রাণভরে থাকুক হাসাহাসি, আর পৃথিবীর সব ভালোবাসা তোমার জন্য।",
  },
  {
    image: "/images/2.jpg",
    text: "তোমার দিনটা হোক ঠিক তোমার মতই মিষ্টি আর অসাধারণ!",
  },
  {
    image: "/images/3.jpg",
    text: "আজ তোমার ঝলমল করার দিন — শুভ জন্মদিন, আমার ভালোবাসা!",
    
  },
  {
    image: "/images/4.jpg",
    text: "একটা নোটে তোমার জন্য আমার সব অনুভূতি ধরা সম্ভব নয়... 💖",
  },
  {
    image: "",
    text: "ভালোবাসি তোমায় বেবি (অন্বি) ❤️, শুভ জন্মদিন তোমায় বেবি!",
    isFinal: true,
  },
];

const getRandomRotation = () => Math.floor(Math.random() * 20 - 10); // -10 to 10 degrees

const Birthday = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index < notes.length - 1) setIndex(index + 1);
  };

  const currentNote = notes[index];

  return (
    <div className="birthday-container">
      <div className="card-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, rotate: getRandomRotation() }}
            animate={{ opacity: 1, y: 0, rotate: getRandomRotation() }}
            exit={{ opacity: 0, y: -30, rotate: getRandomRotation() }}
            transition={{ duration: 0.6 }}
            onClick={handleNext}
            className="card"
          >
            <div className="paper">
              {currentNote.image && (
                <img
                  src={currentNote.image}
                  alt="Birthday"
                  className="card-image"
                />
              )}
              <p className={`card-text ${currentNote.isFinal ? "final-text" : ""}`}>
                {currentNote.text}
              </p>
              {!currentNote.isFinal && (
                <p className="note-hint">Click to see the next note 💌</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Birthday;
