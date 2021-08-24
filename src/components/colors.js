import React, { useState } from "react";
import BoxNumber from "./boxNumber";
import GreenVoice from "../audio/colors/green.mp3";
// audio imports 
import LimeVoice from "../audio/colors/lime.mp3";
import RedVoice from "../audio/colors/red.mp3";
import RedOrangeVoice from "../audio/colors/redorange.mp3";
import VioletVoice from "../audio/colors/violet.mp3";
import YellowVoice from "../audio/colors/yellow.mp3";
import BlueVoice from "../audio/colors/blue.mp3";
const myAudioBlue = new Audio(BlueVoice);
const myAudioGreen = new Audio(GreenVoice);
const myAudioLime = new Audio(LimeVoice);
const myAudioRed = new Audio(RedVoice);
const myAudioRedOrange = new Audio(RedOrangeVoice);
const myAudioViolet = new Audio(VioletVoice);
const myAudioYellow = new Audio(YellowVoice);
// Function to determen if something is playing or not 
let playstate = false;

// functions to trigger/stop audio events
function StopPlay() {
        myAudioBlue.pause();
        myAudioBlue.currentTime = 0;
        myAudioGreen.pause();
        myAudioGreen.currentTime = 0;
        myAudioLime.pause();
        myAudioLime.currentTime = 0;
        myAudioRed.pause();
        myAudioRed.currentTime = 0;
        myAudioRedOrange.pause();
        myAudioRedOrange.currentTime = 0;
        myAudioViolet.pause();
        myAudioViolet.currentTime = 0;
        myAudioYellow.pause();
        myAudioYellow.currentTime = 0;
}

function PlayBlue() {
    StopPlay()
    myAudioBlue.play();
    playstate = !playstate;
}

function PlayGreen() {
    StopPlay()
    myAudioGreen.play();
    playstate = !playstate;
}

function PlayLime() {
    StopPlay()
    myAudioLime.play();
    playstate = !playstate;
}

function PlayRed() {
    StopPlay()
    myAudioRed.play();
    playstate = !playstate;
}

function PlayRedOrange() {
    StopPlay()
    myAudioRedOrange.play();
    playstate = !playstate;
}

function PlayViolet() {
    StopPlay()
    myAudioViolet.play();
    playstate = !playstate;
}

function PlayYellow() {
    StopPlay()
    myAudioYellow.play();
    playstate = !playstate;
}

// The component
function Colors() {
    return (
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