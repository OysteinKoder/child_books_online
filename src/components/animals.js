import React, { useEffect } from "react";
import BoxNumber from "./boxNumber";
import { animalData } from "../data/animalData";

let playstate = false;

const audioElements = Object.keys(animalData).reduce((acc, key) => {
  acc[key] = new Audio(animalData[key].audio);
  return acc;
}, {});

// functions to trigger/stop audio events
function StopPlay() {
  Object.values(audioElements).forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

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

// Functions for playing audio files
const playFunctions = {
  cat: () => {
    StopPlay();
    animateAnimal("cat");
    audioElements.cat.play();
    playstate = !playstate;
  },
  cow: () => {
    StopPlay();
    animateAnimal("cow");
    audioElements.cow.play();
    playstate = !playstate;
  },
  dog: () => {
    StopPlay();
    animateAnimal("dog");
    audioElements.dog.play();
    playstate = !playstate;
  },
  hippo: () => {
    StopPlay();
    animateAnimal("hippo");
    audioElements.hippo.play();
    playstate = !playstate;
  },
  horse: () => {
    StopPlay();
    animateAnimal("horse");
    audioElements.horse.play();
    playstate = !playstate;
  },
  lion: () => {
    StopPlay();
    animateAnimal("lion");
    audioElements.lion.play();
    playstate = !playstate;
  },
  chicken: () => {
    StopPlay();
    animateAnimal("chicken");
    audioElements.chicken.play();
    playstate = !playstate;
  },
  sheep: () => {
    StopPlay();
    animateAnimal("sheep");
    audioElements.sheep.play();
    playstate = !playstate;
  },
  zebra: () => {
    StopPlay();
    animateAnimal("zebra");
    audioElements.zebra.play();
    playstate = !playstate;
  },
};

function animateAnimal(animal) {
  const img = document.querySelector(`img[alt="${animal}"]`);
  img.style.animation = "jiggle 0.5s infinite";
  setTimeout(() => {
    img.style.animation = "";
  }, audioElements[animal].duration * 1000); // Adjust duration based on audio length
}

function Animals() {
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
      <BoxNumber text="Box One"></BoxNumber>
      <div className="Grid">
        {Object.keys(animalData).map((animal) => (
          <img
            key={animal}
            className="Grid-cell"
            src={animalData[animal].image}
            alt={animal}
            onClick={playFunctions[animal]}
            style={styles.gridCell}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Animals;
