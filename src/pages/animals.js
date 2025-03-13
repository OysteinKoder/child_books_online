import React, { useEffect } from "react";
import BoxNumber from "../components/boxNumber";
import { animalData } from "../data/animalData";

const audioElements = Object.keys(animalData).reduce((acc, key) => {
  acc[key] = new Audio(animalData[key].audio);
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
const playAnimal = (animal) => {
  StopPlay();
  animateAnimal(animal);
  audioElements[animal].play();
};

const animateAnimal = (animal) => {
  const img = document.querySelector(`img[alt="${animalData[animal].alt}"]`);
  if (img) {
    img.style.animation = "jiggle 0.5s infinite";
    setTimeout(() => {
      img.style.animation = "";
    }, audioElements[animal].duration * 1000); // Adjust duration based on audio length
  }
};

const Animals = () => {
  useEffect(() => {
    addJiggleKeyframes();
  }, []);

  return (
    <div className="Center">
      <div className="Text-box">
        <h2>Animals</h2>
        <p className="Box-text">
          What animals can you see in the pictures below? Click to find out!
        </p>
      </div>
      <BoxNumber text="Box One" />
      <div className="Grid">
        {Object.keys(animalData).map((animal, idx) => (
          <img
            key={animal}
            className="Grid-cell"
            src={animalData[animal].image}
            alt={animalData[animal].alt}
            onClick={() => playAnimal(animal)}
            style={styles.gridCell}
          />
        ))}
      </div>
    </div>
  );
};

export default Animals;
