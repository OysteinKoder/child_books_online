import React, { useEffect } from "react";
import BoxNumber from "../components/boxNumber";
import { itemData } from "../data/itemData";

// audio imports
const audioElements = Object.keys(itemData).reduce((acc, key) => {
  acc[key] = new Audio(itemData[key].audio);
  return acc;
}, {});

// functions to trigger/stop audio events
const StopPlay = () => {
  Object.values(audioElements).forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
};

// Add CSS for animations
const styles = {
  gridCell: {
    transition: "transform 0.3s ease-in-out",
  },
  gridCellActive: {
    animation: "jiggle 0.3s infinite",
    transform: "scale(1.2)",
  },
};

// Add keyframes for jiggle animation
const addJiggleKeyframes = () => {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes jiggle {
      0%, 100% { transform: translateX(0) scale(1.3); }
      25% { transform: translateX(-5px) scale(1.3); }
      75% { transform: translateX(5px) scale(1.3); }
    }
  `;
  document.head.appendChild(styleSheet);
};

// Function for playing audio files
const playItem = (item) => {
  StopPlay();
  animateItem(item);
  audioElements[item].play();
};

const animateItem = (item) => {
  const img = document.querySelector(`img[alt="${itemData[item].alt}"]`);
  if (img) {
    img.style.animation = "jiggle 0.5s infinite";
    setTimeout(() => {
      img.style.animation = "";
    }, audioElements[item].duration * 1000); // Adjust duration based on audio length
  }
};

const Items = () => {
  useEffect(() => {
    addJiggleKeyframes();
  }, []);

  return (
    <div>
      <div className="Text-box">
        <h2>Items</h2>
        <p className="Box-text">
          What are these items called? Tap on the picture to find out!
        </p>
      </div>
      <BoxNumber text="Box One" />
      <div className="Grid">
        {Object.keys(itemData).map((item) => (
          <img
            key={item}
            className="Grid-cell"
            src={itemData[item].image}
            alt={itemData[item].alt}
            onClick={() => playItem(item)}
            style={styles.gridCell}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
