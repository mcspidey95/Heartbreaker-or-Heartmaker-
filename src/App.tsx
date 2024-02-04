import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pinkie please",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart 🥹",
  "I'll do anything! Just say yes.",
  "I'll carry you on my back through the park, even if you're perfectly capable of walking.",
  "I'll give you the last bite of my dessert... every time.",
  "I'll watch every single rom-com with you, even the cheesy ones.",
  "I'll give you endless foot rubs, even if you have ticklish feet.",
  "Is there no love left?",
  "Think about it one more time",
  "I thought we had something special",
  "But what about our memories?",
  "You're like the cupid who forgot the arrows",
  "This hurts more than a thousand heartbreak songs",
  "Is there a 'Maybe' option?",
  "I'll make you a sandwich, even if you're not hungry.",
  "Did someone replace your heart with a stone?",
  "🥲"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/ew2EOjUm5N0AAAAi/milk-and-mocha-cute.gif"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media.tenor.com/VIChDQ6ejRQAAAAi/jumping-bear-hearts-no-png.gif"
          />
          <div className="text">Will you be my Valentine?</div> <br />
          <div>
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="no-button">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
