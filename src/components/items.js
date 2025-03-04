import React, { useEffect } from "react";
import Hammer from "../img/items/hammer.jpg";
import Bus from "../img/items/bus.jpg";
import Car from "../img/items/car.jpg";
import Chair from "../img/items/chair.jpg";
import Helicopter from "../img/items/helicopter.jpg";
import Pants from "../img/items/pants.jpg";
import Plane from "../img/items/plane.jpg";
import Shoes from "../img/items/shoes.jpg";
import tShirt from "../img/items/tShirt.jpg";
import BoxNumber from "./boxNumber";
import { itemData } from "../data/itemData";

// audio imports

import BusVoice from "../audio/items/bus.mp3";
import CarVoice from "../audio/items/car.mp3";
import ChairVoice from "../audio/items/chair.mp3";
import HammerVoice from "../audio/items/hammer.mp3";
import HelicopterVoice from "../audio/items/helicopter.mp3";
import PantsVoice from "../audio/items/pants.mp3";
import PlaneVoice from "../audio/items/plane.mp3";
import ShoesVoice from "../audio/items/shoes.mp3";
import TshirtVoice from "../audio/items/tshirt.mp3";

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
