import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      dish: "Kaju Katli",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 2,
      dish: "Dark Chocolate less than 50%",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 3,
      dish: "Cheese Cake",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 4,
      dish: "Black Forest Cake",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 5,
      dish: "Banana Walnut Cake",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 6,
      dish: "Biscuit & cream flavoured Ice Cream ",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 7,
      dish: "Oreo Ice Cream",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 8,
      dish: "Coconut Icecream",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 9,
      dish: "Bournville rum and raisin",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 10,
      dish: "Oreo Flavour",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 11,
      dish: "Pani Puri (Sweet)",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 12,
      dish: "Rasmalai",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 13,
      dish: "Khatta Meetha Achar",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 14,
      dish: "Bhedki Maach",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 15,
      dish: "Rui Maach",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 16,
      dish: "Katla Maach",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 17,
      dish: "Chingri",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 18,
      dish: "Crabs",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 19,
      dish: "Pomogranade Peeled Eaten by my hands",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 20,
      dish: "Gandho Raj Lebu",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 21,
      dish: "Laal Saag",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 22,
      dish: "Cheese Carbonara Buldak",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 23,
      dish: "Bournville Dark Chocolate Fruits and Nuts",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 24,
      dish: "Elaichi Saunf Tic Tac",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 25,
      dish: "Crossiant Orange Flavoured",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 26,
      dish: "Licchi Hand Peeled",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 27,
      dish: "Allergy from Baingan",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 28,
      dish: "Doesnt Like Besan",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 29,
      dish: "Doesnt Like Mutton",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 30,
      dish: "Doesnt Like Eggs",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 31,
      dish: "Doesnt Like All-Fish",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 32,
      dish: "Mint ki diwani",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 33,
      dish: "Orbit mint sugar free",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
  ];

  const Flowers = [
    {
      id: 1,
      flower: "Cherry Parfait",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
    {
      id: 2,
      flower: "Sun Flowers",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/10/Kaju-Katli-Recipe.jpg",
    },
  ];

  const whatToGiveGetsAngry = [
    { id: 1, gift: "Dairy Milk" },
    { id: 2, gift: "Ice-cream (coconut)" },
    { id: 3, gift: "cheesecake" },
    { id: 4, gift: "momos" },
    { id: 5, gift: "pani puri" },
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
