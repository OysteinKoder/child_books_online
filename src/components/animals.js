import React from "react";
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
    transition: "transform 0.5s ease-in-out",
    animation: "rotateAnimation 1s infinite alternate",
  },
  gridCellActive: {
    transform: "scale(1.2) rotate(15deg)",
    transition: "transform 0.5s ease-in-out",
  },
};

// Functions for playing audio files
function PlayCat() {
  StopPlay();
  animateAnimal("cat");
  audioElements.cat.play();
  playstate = !playstate;
}

function PlayCow() {
  StopPlay();
  animateAnimal("cow");
  audioElements.cow.play();
  playstate = !playstate;
}

function PlayDog() {
  StopPlay();
  animateAnimal("dog");
  audioElements.dog.play();
  playstate = !playstate;
}

function PlayHippo() {
  StopPlay();
  animateAnimal("hippo");
  audioElements.hippo.play();
  playstate = !playstate;
}

function PlayHorse() {
  StopPlay();
  animateAnimal("horse");
  audioElements.horse.play();
  playstate = !playstate;
}

function PlayLion() {
  StopPlay();
  animateAnimal("lion");
  audioElements.lion.play();
  playstate = !playstate;
}

function PlayRooster() {
  StopPlay();
  animateAnimal("chicken");
  audioElements.chicken.play();
  playstate = !playstate;
}

function PlaySheep() {
  StopPlay();
  animateAnimal("sheep");
  audioElements.sheep.play();
  playstate = !playstate;
}

function PlayZeebra() {
  StopPlay();
  animateAnimal("zebra");
  audioElements.zebra.play();
  playstate = !playstate;
}

function animateAnimal(animal) {
  const img = document.querySelector(`img[alt="${animal}"]`);
  img.style.transform = "scale(1.2) rotate(15deg)";
  setTimeout(() => {
    img.style.transform = "scale(1) rotate(0deg)";
  }, audioElements[animal].duration * 1000 + 500); // Adjust duration based on audio length
}

function Animals() {
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
        <img
          className="Grid-cell"
          src={animalData.cat.image}
          alt="cat"
          onClick={PlayCat}
          style={styles.gridCell}
        ></img>
        <img
          className="Grid-cell"
          src={animalData.chicken.image}
          alt="chicken"
          onClick={PlayRooster}
          style={styles.gridCell}
        ></img>
        <img
          className="Grid-cell"
          src={animalData.cow.image}
          alt="cow"
          onClick={PlayCow}
          style={styles.gridCell}
        ></img>
        <img
          className="Grid-cell"
          src={animalData.dog.image}
          alt="dog"
          onClick={PlayDog}
          style={styles.gridCell}
        ></img>
        <img
          className="Grid-cell"
          src={animalData.hippo.image}
          alt="hippo"
          onClick={PlayHippo}
          style={styles.gridCell}
        ></img>
        <img
          className="Grid-cell"
          src={animalData.horse.image}
          alt="horse"
          onClick={PlayHorse}
          style={styles.gridCell}
        ></img>
        <img
          className="Grid-cell"
          src={animalData.lion.image}
          alt="lion"
          onClick={PlayLion}
          style={styles.gridCell}
        ></img>
        <img
          className="Grid-cell"
          src={animalData.sheep.image}
          alt="sheep"
          onClick={PlaySheep}
          style={styles.gridCell}
        ></img>
        <img
          className="Grid-cell"
          src={animalData.zebra.image}
          alt="zebra"
          onClick={PlayZeebra}
          style={styles.gridCell}
        ></img>
      </div>
    </div>
  );
}

export default Animals;
