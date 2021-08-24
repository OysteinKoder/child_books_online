import React from "react"
import Hammer from "../img/items/hammer.jpg"
import Bus from "../img/items/bus.jpg"
import Car from "../img/items/car.jpg"
import Chair from "../img/items/chair.jpg"
import Helicopter from "../img/items/helicopter.jpg"
import Pants from "../img/items/pants.jpg"
import Plane from "../img/items/plane.jpg"
import Shoes from "../img/items/shoes.jpg"
import tShirt from "../img/items/tShirt.jpg"
import BoxNumber from "./boxNumber"

// audio imports

import BusVoice from "../audio/items/bus.mp3"
import CarVoice from "../audio/items/car.mp3"
import ChairVoice from "../audio/items/chair.mp3"
import HammerVoice from "../audio/items/hammer.mp3"
import HelicopterVoice from "../audio/items/helicopter.mp3"
import PantsVoice from "../audio/items/pants.mp3"
import PlaneVoice from "../audio/items/plane.mp3"
import ShoesVoice from "../audio/items/shoes.mp3"
import TshirtVoice from "../audio/items/tshirt.mp3"

let playstate = false

const myAudioBus = new Audio(BusVoice);
const myAudioCar = new Audio(CarVoice);
const myAudioChair = new Audio(ChairVoice);
const myAudioHammer = new Audio(HammerVoice);
const myAudioHelicopter = new Audio(HelicopterVoice);
const myAudioPants = new Audio(PantsVoice);
const myAudioPlane = new Audio(PlaneVoice);
const myAudioShoes = new Audio(ShoesVoice);
const myAudioTshirt = new Audio(TshirtVoice);

// functions to stop audio events
function StopPlay() {
    if (playstate) {
        myAudioBus.pause();
        myAudioBus.currentTime = 0;
        myAudioCar.pause();
        myAudioCar.currentTime = 0;
        myAudioChair.pause();
        myAudioChair.currentTime = 0;
        myAudioHammer.pause();
        myAudioHammer.currentTime = 0;
        myAudioHelicopter.pause();
        myAudioHelicopter.currentTime = 0;
        myAudioPants.pause();
        myAudioPants.currentTime = 0;
        myAudioPlane.pause();
        myAudioPlane.currentTime = 0;
        myAudioShoes.pause();
        myAudioShoes.currentTime = 0;
        myAudioTshirt.pause();
        myAudioTshirt.currentTime = 0;
    }
}

// Functions for playing audio files
function PlayBus () {
    StopPlay()
    myAudioBus.play();
    playstate = !playstate;
}

function PlayCar () {
    StopPlay()
    myAudioCar.play();
    playstate = !playstate;
}

function PlayChair () {
    StopPlay()
    myAudioChair.play();
    playstate = !playstate;
}

function PlayHammer () {
    StopPlay()
    myAudioHammer.play();
    playstate = !playstate;
}

function PlayHelicopter () {
    StopPlay()
    myAudioHelicopter.play();
    playstate = !playstate;
}

function PlayPants () {
    StopPlay()
    myAudioPants.play();
    playstate = !playstate;
}

function PlayPlane () {
    StopPlay()
    myAudioPlane.play();
    playstate = !playstate;
}

function PlayShoes () {
    StopPlay()
    myAudioShoes.play();
    playstate = !playstate;
}

function PlayTshirt () {
    StopPlay()
    myAudioTshirt.play();
    playstate = !playstate;
}






function Items() {
    return(
        <div>
            <div className="Text-box">
            <h2>Items</h2>
            <p className="Box-text">What are these items called? Tap on the picture to find out!</p>
            </div>
            <BoxNumber text="Box One"></BoxNumber>
            <div className="Grid">
                <img className="Grid-cell" src={Hammer} onClick={PlayHammer}></img>
                <img className="Grid-cell" src={Bus} onClick={PlayBus}></img>
                <img className="Grid-cell" src={Car} onClick={PlayCar}></img>
                <img className="Grid-cell" src={Chair} onClick={PlayChair}></img>
                <img className="Grid-cell" src={Helicopter} onClick={PlayHelicopter}></img>
                <img className="Grid-cell" src={Pants} onClick={PlayPants}></img>
                <img className="Grid-cell" src={Plane} onClick={PlayPlane}></img>
                <img className="Grid-cell" src={Shoes} onClick={PlayShoes}></img>
                <img className="Grid-cell" src={tShirt} onClick={PlayTshirt}></img>
            </div>
        </div>
    )
}
export default Items