import React from "react"
import BoxNumber from "./boxNumber"

// audio imports 
import BlueVoice from "../audio/colors/blue.mp3"
import GreenVoice from "../audio/colors/green.mp3"
import LimeVoice from "../audio/colors/lime.mp3"
import RedVoice from "../audio/colors/red.mp3"
import RedOrangeVoice from "../audio/colors/redorange.mp3"
import VioletVoice from "../audio/colors/violet.mp3"
import YellowVoice from "../audio/colors/yellow.mp3"

// functions for playing audio 
function PlayBlue () {
    console.log("hello")
new Audio(BlueVoice).play()
}

function PlayGreen () {
    console.log("hello")
new Audio(GreenVoice).play()
}

function PlayLime () {
    console.log("hello")
new Audio(LimeVoice).play()
}

function PlayRed () {
    console.log("hello")
new Audio(RedVoice).play()
}

function PlayRedOrange () {
    console.log("hello")
new Audio(RedOrangeVoice).play()
}

function PlayViolet () {
    console.log("hello")
new Audio(VioletVoice).play()
}

function PlayYellow () {
    console.log("hello")
new Audio(YellowVoice).play()
}

function Colors () {
    return(
        <div>
            <div className="Text-box">
            <h2>Colors</h2>
            <p className="Box-text">What colors can you see in the boxes below? Tap to find out</p>
            </div>
            <BoxNumber text="Box One"></BoxNumber>
            <div className="Grid">
                <div className="Grid-cell Yellow" onClick={PlayYellow}></div>
                <div className="Grid-cell Lime" onClick={PlayLime}></div>
                <div className="Grid-cell Green" onClick={PlayGreen}></div>
                <div className="Grid-cell Blue" onClick={PlayBlue}></div>
                <div className="Grid-cell Violet" onClick={PlayViolet}></div>
                <div className="Grid-cell Red" onClick={PlayRed}></div>
                <div className="Grid-cell Red-orange" onClick={PlayRedOrange}></div>
                <div className="Grid-cell Green" onClick={PlayGreen}></div>
                <div className="Grid-cell Blue" onClick={PlayBlue}></div>
            </div>
        </div>
    )
}

export default Colors