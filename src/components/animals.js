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

// Functions for playing audio files
function PlayCat () {
    console.log("hello")
new Audio(CatVoice).play()
}

function PlayCow () {
    console.log("hello")
new Audio(CowVoice).play()
}

function PlayDog () {
    console.log("hello")
new Audio(DogVoice).play()
}

function PlayHippo () {
    console.log("hello")
new Audio(HippoVoice).play()
}

function PlayHorse () {
    console.log("hello")
new Audio(HorseVoice).play()
}

function PlayLion () {
    console.log("hello")
new Audio(LionVoice).play()
}

function PlayRooster () {
    console.log("hello")
new Audio(RoosterVoice).play()
}

function PlaySheep () {
    console.log("hello")
new Audio(SheepVoice).play()
}

function PlayZeebra () {
    console.log("hello")
new Audio(ZeebraVoice).play()
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