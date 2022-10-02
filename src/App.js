import "./styles.css";
import React, { useState } from "react";

const musicLibrary = {
  pop: [
    {
      name: "Ghost",
      artist: "Justin Bieber"
    },
    {
      name: "Kid Laroi",
      artist: "Stay"
    },
    {
      name: "Light Switch",
      artist: "Charlie Puth"
    }
  ],
  rock: [
    {
      name: "Eye of the Tiger",
      artist: "Survivor"
    },
    {
      name: "Bohemian Rhapsody",
      artist: "Queen"
    },
    {
      name: "Smells Like Teen Spirit",
      artist: "Nirvana"
    }
  ],
  rap: [
    {
      name: "The Monster",
      artist: "Eminem"
    },
    {
      name: "Changes",
      artist: "2Pac"
    },
    {
      name: "Homicide",
      artist: "Logic"
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("pop");

  function genreClickHandler(inputGenre) {
    setGenre(inputGenre);
  }

  const buttons = Object.keys(musicLibrary).map((item) => {
    return (
      <button className="button" onClick={() => genreClickHandler(item)}>
        {item}
      </button>
    );
  });
  return (
    <div className="App">
      <h2>🎵 goodmusic</h2>
      <p>Checkout my favourite music. Select a genre to get started</p>
      {buttons}
      <hr />
      {musicLibrary[genre].map((item) => {
        return (
          <div className="books">
            <li>
              <h5>{item.name}</h5>
              <div>{item.artist}</div>
            </li>
          </div>
        );
      })}
    </div>
  );
}
