import React from "react"
import Cat from "../img/cat.jpg"
import Chicken from "../img/chicken.jpg"
import Cow from "../img/cow.jpg"
import Dog from "../img/dog.jpg"
import Hippo from "../img/hippo.jpg"
import Horse from "../img/horse.jpg"
import Lion from "../img/lion.jpg"
import Sheep from "../img/sheep.jpg"
import Zebra from "../img/zebra.jpg"
import BoxNumber from "./boxNumber"

// audio import 
import CatVoice from "../audio/animals/cat.mp3"
import CowVoice from "../audio/animals/cow.mp3"
import DogVoice from "../audio/animals/dog.mp3"
import HippoVoice from "../audio/animals/hippo.mp3"
import HorseVoice from "../audio/animals/horse.mp3"
import LionVoice from "../audio/animals/lion.mp3"
import RoosterVoice from "../audio/animals/rooster.mp3"
import SheepVoice from "../audio/animals/sheep.mp3"
import ZeebraVoice from "../audio/animals/zeebra.mp3"

let playstate = false

const myAudioCat = new Audio(CatVoice);
const myAudioCow = new Audio(CowVoice);
const myAudioDog = new Audio(DogVoice);
const myAudioHippo = new Audio(HippoVoice);
const myAudioHorse = new Audio(HorseVoice);
const myAudioLion = new Audio(LionVoice);
const myAudioRooster = new Audio(RoosterVoice);
const myAudioSheep = new Audio(SheepVoice);
const myAudioZeebra = new Audio(ZeebraVoice);

// functions to trigger/stop audio events
function StopPlay() {
    if (playstate) {
        myAudioCat.pause();
        myAudioCat.currentTime = 0;
        myAudioCow.pause();
        myAudioCow.currentTime = 0;
        myAudioDog.pause();
        myAudioDog.currentTime = 0;
        myAudioHippo.pause();
        myAudioHippo.currentTime = 0;
        myAudioHorse.pause();
        myAudioHorse.currentTime = 0;
        myAudioLion.pause();
        myAudioLion.currentTime = 0;
        myAudioRooster.pause();
        myAudioRooster.currentTime = 0;
        myAudioSheep.pause();
        myAudioSheep.currentTime = 0;
        myAudioZeebra.pause();
        myAudioZeebra.currentTime = 0;
    }
}

// Functions for playing audio files
function PlayCat () {
    StopPlay()
    myAudioCat.play()
    playstate = !playstate
}

function PlayCow () {
    StopPlay()
    myAudioCow.play()
    playstate = !playstate
}

function PlayDog () {
    StopPlay()
    myAudioDog.play()
    playstate = !playstate
}

function PlayHippo () {
    StopPlay()
    myAudioHippo.play()
    playstate = !playstate
}

function PlayHorse () {
    StopPlay()
    myAudioHorse.play()
    playstate = !playstate
}

function PlayLion () {
    StopPlay()
    myAudioLion.play()
    playstate = !playstate
}

function PlayRooster () {
    StopPlay()
    myAudioRooster.play()
    playstate = !playstate
}

function PlaySheep () {
    StopPlay()
    myAudioSheep.play()
    playstate = !playstate
}

function PlayZeebra () {
    StopPlay()
    myAudioZeebra.play()
    playstate = !playstate
}


function Animals () {
    return(
        <div className="Center"> 
            <div className="Text-box">
            <h2>Animals</h2>
            <p className="Box-text">What animals can you see in the pictures below? Click to find out!</p>
            </div>
            <BoxNumber text="Box One"></BoxNumber>
            <div className="Grid">
                 <img className="Grid-cell" src={Cat} alt="cat" onClick={PlayCat}></img>
                 <img className="Grid-cell" src={Chicken} alt="chicken" onClick={PlayRooster}></img>
                 <img className="Grid-cell" src={Cow} alt="cow" onClick={PlayCow}></img>
                 <img className="Grid-cell" src={Dog} alt="dog" onClick={PlayDog}></img>
                 <img className="Grid-cell" src={Hippo} alt="hippo" onClick={PlayHippo}></img>
                 <img className="Grid-cell" src={Horse} alt="horse" onClick={PlayHorse}></img>
                 <img className="Grid-cell" src={Lion} alt="lion" onClick={PlayLion}></img>
                 <img className="Grid-cell" src={Sheep} alt="sheep" onClick={PlaySheep}></img>
                 <img className="Grid-cell" src={Zebra} alt="zebra" onClick={PlayZeebra}></img>
            </div>
        </div>
    )
}

export default Animals