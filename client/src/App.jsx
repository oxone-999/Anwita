import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      dish: "Kaju Katli",
    },
    {
      id: 2,
      dish: "Dark Chocolate less than 50%",
    },
    {
      id: 3,
      dish: "Cheese Cake",
    },
    {
      id: 4,
      dish: "Black Forest Cake",
    },
    {
      id: 5,
      dish: "Banana Walnut Cake",
    },
    {
      id: 6,
      dish: "Biscuit & cream flavoured Ice Cream ",
    },
    {
      id: 7,
      dish: "Oreo Ice Cream",
    },
    {
      id: 8,
      dish: "Coconut Icecream",
    },
    {
      id: 9,
      dish: "Bournville rum and raisin",
    },
    {
      id: 10,
      dish: "Oreo Flavour",
    },
    {
      id: 11,
      dish: "Pani Puri (Sweet)",
    },
    {
      id: 12,
      dish: "Rasmalai",
    },
    {
      id: 13,
      dish: "Khatta Meetha Achar",
    },
    {
      id: 14,
      dish: "Bhedki Maach",
    },
    {
      id: 15,
      dish: "Rui Maach",
    },
    {
      id: 16,
      dish: "Katla Maach",
    },
    {
      id: 17,
      dish: "Chingri",
    },
    {
      id: 18,
      dish: "Crabs",
    },
    {
      id: 19,
      dish: "Pomogranade Peeled Eaten by my hands",
    },
    {
      id: 20,
      dish: "Gandho Raj Lebu",
    },
    {
      id: 21,
      dish: "Laal Saag",
    },
    {
      id: 22,
      dish: "Cheese Carbonara Buldak",
    },
    {
      id: 23,
      dish: "Bournville Dark Chocolate Fruits and Nuts",
    },
    {
      id: 24,
      dish: "Elaichi Saunf Tic Tac",
    },
    {
      id: 25,
      dish: "Crossiant Orange Flavoured",
    },
    {
      id: 26,
      dish: "Licchi Hand Peeled",
    },
    {
      id: 27,
      dish: "Allergy from Baingan",
    },
    {
      id: 28,
      dish: "Doesnt Like Besan",
    },
    {
      id: 29,
      dish: "Doesnt Like Mutton",
    },
    {
      id: 30,
      dish: "Doesnt Like Eggs",
    },
    {
      id: 31,
      dish: "Doesnt Like All-Fish",
    },
    {
      id: 32,
      dish: "Mint ki diwani",
    },
    {
      id: 33,
      dish: "Orbit mint sugar free",
    },
    {
      id: 34,
      dish: "Orbit mint sugar free",
    },
    {
      id: 35,
      dish: "Papri Chaat",
    },
  ];

  const Flowers = [
    {
      id: 1,
      flower: "Cherry Parfait",
    },
    {
      id: 2,
      flower: "Sun Flowers",
    },
  ];

  const whatToGiveGetsAngry = [
    { id: 1, gift: "Dairy Milk" },
    { id: 2, gift: "Ice-cream (coconut)" },
    { id: 3, gift: "cheesecake" },
    { id: 4, gift: "momos" },
    { id: 5, gift: "pani puri" },
    { id: 6, gift: "papri chaat" },
  ];

  const facts = [
    { id: 1, fact: "Wear glasses because has allergy and eyes get wet" },
    { id: 2, fact: "She has sinus, pre diabatic , PCOD" },
    { id: 3, fact: "Blood Group AB+" },
    { id: 4, fact: "Likes Just Herb tint, brick red" },
    { id: 5, fact: "Likes colour black and white" },
    { id: 6, fact: "Loves wine red lipstick" },
    { id: 7, fact: "Watch belt colour code #844b2d" },
    { id: 8, fact: "Anniversary 21st March 2025" },
  ];

  const MusicEntertainment = [
    { id: 1, song: "Perfect by Ed Sheeran" },
    { id: 2, song: "Bhojpuri Songs when sad" },
  ];

  const sheWants = [
    { id: 1, want: "Crocodile stuffed Toy" },
    { id: 2, want: "Elephant stuffed Toy" },
    { id: 3, want: "Oxidised jhumka" },
    { id: 4, want: "Sling Bag" },
  ];

  const Hobbies = [
    { id: 1, hobby: "Loves Sitar" },
    { id: 2, hobby: "Know Harmonium" },
    { id: 3, hobby: "Loves Pottery" },
    { id: 4, hobby: "Want to start sculpting" },
    { id: 5, hobby: "WBook reading & writing her own book" },
    { id: 6, hobby: "Dnacing (Kathhak)" },
    { id: 7, hobby: "Excellent Painter, over 14 years of experience" },
    { id: 8, hobby: "Loves baking" },
  ];

  const dislikes = [
    { id: 1, dislike: "Butterflies and moths" },
    { id: 2, dislike: "Karela" },
    { id: 3, dislike: "Lauki" },
    { id: 4, dislike: "Fish smell of fish market" },
    { id: 5, dislike: "Chicken cutting in front of her" },
  ];

  return (
    <div className="main">
      <div className="profile">
        <h1>My Lovely Girlfriend : Anwi</h1>
      </div>
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
