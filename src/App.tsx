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
  "I'll even let you have the last slice of pizza.",
  "I'll write you 100 love poems... or 200, if that's what it takes.",
  "I'll serenade you with my best karaoke rendition of 'Total Eclipse of the Heart.",
  "I'll learn to make heart-shaped pancakes for you every morning.",
  "I'll name a star after you. Well, maybe not an actual star, but a really cool glow-in-the-dark sticker.",
  "I'll dedicate my next victory dance to you—even if it's just after successfully making a grilled cheese.",
  "I'll let you pick the movie every time... even if it's a rom-com.",
  "I'll write your name in the sand... or at least in my notebook, with lots of hearts around it.",
  "I'll learn all the words to your favorite song, even if it's in a language I don't understand.",
  "I'll wear a matching outfit with you on Valentine's Day, no matter how ridiculous it looks.",
  "I'll carry you on my back through the park, even if you're perfectly capable of walking.",
  "I'll pretend to like your favorite sports team, even if they're my arch-rivals.",
  "I'll give you the last bite of my dessert... every time.",
  "I'll never play another prank on you, even if it's April Fools' Day.",
  "I'll learn to love cats, even if I'm secretly a dog person.",
  "I'll watch every single rom-com with you, even the cheesy ones.",
  "I'll give you endless foot rubs, even if you have ticklish feet.",
  "I'll make you a sandwich and eat you.",
  "🥲",
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
