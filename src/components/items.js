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

// Functions for playing audio files
function PlayBus () {
    console.log("hello")
new Audio(BusVoice).play()
}

function PlayCar () {
    console.log("hello")
new Audio(CarVoice).play()
}

function PlayChair () {
    console.log("hello")
new Audio(ChairVoice).play()
}

function PlayHammer () {
    console.log("hello")
new Audio(HammerVoice).play()
}

function PlayHelicopter () {
    console.log("hello")
new Audio(HelicopterVoice).play()
}

function PlayPants () {
    console.log("hello")
new Audio(PantsVoice).play()
}

function PlayPlane () {
    console.log("hello")
new Audio(PlaneVoice).play()
}

function PlayShoes () {
    console.log("hello")
new Audio(ShoesVoice).play()
}

function PlayTshirt () {
    console.log("hello")
new Audio(TshirtVoice).play()
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