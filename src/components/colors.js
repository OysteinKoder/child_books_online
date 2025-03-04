import React, { useEffect } from "react";
import BoxNumber from "./boxNumber";
import { colorData } from "../data/colorData";

const audioElements = Object.keys(colorData).reduce((acc, key) => {
  acc[key] = new Audio(colorData[key].audio);
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
const playColor = (color) => {
  StopPlay();
  animateColor(color);
  audioElements[color].play();
};

const animateColor = (color) => {
  const div = document.querySelector(
    `.Grid-cell.${colorData[color].className}`
  );
  if (div) {
    div.style.animation = "jiggle 0.5s infinite";
    setTimeout(() => {
      div.style.animation = "";
    }, audioElements[color].duration * 1000); // Adjust duration based on audio length
  }
};

// The component
const Colors = () => {
  useEffect(() => {
    addJiggleKeyframes();
  }, []);

  return (
    <div>
      <div className="Text-box">
        <h2>Colors</h2>
        <p className="Box-text">
          What colors can you see in the boxes below? Tap to find out
        </p>
      </div>
      <BoxNumber text="Box One" />
      <div className="Grid">
        {Object.keys(colorData).map((color) => (
          <div
            key={color}
            className={`Grid-cell ${colorData[color].className}`}
            onClick={() => playColor(color)}
            style={styles.gridCell}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
