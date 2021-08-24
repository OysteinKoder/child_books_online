import React from "react"
import BoxNumber from "./boxNumber"
import Apple from "../img/foods/apple.jpg"
import Banana from "../img/foods/banana.jpg"
import Burger from "../img/foods/burger.jpg"
import Hotdog from "../img/foods/hotdog.jpg"
import Kiwi from "../img/foods/kiwi.jpg"
import Pasta from "../img/foods/pasta.jpg"
import Pizza from "../img/foods/pizza.jpg"
import Salad from "../img/foods/salad.jpg"
import Taco from "../img/foods/taco.jpg"
import AppleVoice from "../audio/foods/apple.mp3"
import BananaVoice from "../audio/foods/banana.mp3"
import BurgerVoice from "../audio/foods/burger.mp3"
import HotdogVoice from "../audio/foods/hotdog.mp3"
import KiwiVoice from "../audio/foods/kiwi.mp3"
import PastaVoice from "../audio/foods/pasta.mp3"
import PizzaVoice from "../audio/foods/pizza.mp3"
import SaladVoice from "../audio/foods/salad.mp3"
import TacoVoice from "../audio/foods/taco.mp3"

let playstate = false

const myAudioApple = new Audio(AppleVoice);
const myAudioBanana = new Audio(BananaVoice);
const myAudioBurger = new Audio(BurgerVoice);
const myAudioHotdog = new Audio(HotdogVoice);
const myAudioKiwi = new Audio(KiwiVoice);
const myAudioPasta = new Audio(PastaVoice);
const myAudioPizza = new Audio(PizzaVoice);
const myAudioSalad = new Audio(SaladVoice);
const myAudioTaco = new Audio(TacoVoice);

// functions to stop audio events
function StopPlay() {
        myAudioApple.pause();
        myAudioApple.currentTime = 0;
        myAudioBanana.pause();
        myAudioBanana.currentTime = 0;
        myAudioBurger.pause();
        myAudioBurger.currentTime = 0;
        myAudioHotdog.pause();
        myAudioHotdog.currentTime = 0;
        myAudioKiwi.pause();
        myAudioKiwi.currentTime = 0;
        myAudioPasta.pause();
        myAudioPasta.currentTime = 0;
        myAudioPizza.pause();
        myAudioPizza.currentTime = 0;
        myAudioSalad.pause();
        myAudioSalad.currentTime = 0;
        myAudioTaco.pause();
        myAudioTaco.currentTime = 0;
}


function PlayApple () {
    StopPlay()
    myAudioApple.play();
    playstate = !playstate;
}
function PlayBanana () {
    StopPlay()
    myAudioBanana.play();
    playstate = !playstate;
}
function PlayBurger () {
    StopPlay()
    myAudioBurger.play();
    playstate = !playstate;
}
function PlayHotdog () {
    StopPlay()
    myAudioHotdog.play();
    playstate = !playstate;
}
function PlayKiwi () {
    StopPlay()
    myAudioKiwi.play();
    playstate = !playstate;
}
function PlayPasta () {
    StopPlay()
    myAudioPasta.play();
    playstate = !playstate;
}
function PlayPizza () {
    StopPlay()
    myAudioPizza.play();
    playstate = !playstate;
}
function PlaySalad () {
    StopPlay()
    myAudioSalad.play();
    playstate = !playstate;
}
function PlayTaco () {
    StopPlay()
    myAudioTaco.play();
    playstate = !playstate;
}


function Foods () {
    return(
        <div>
            <div className="Text-box">
            <h2>Foods</h2>
            <p className="Box-text">What foods can you see in the boxes below? Tap to find out</p>
            </div>
            <BoxNumber text="Box One"></BoxNumber>
            <div className="Grid">
                <img src={Apple} className="Grid-cell" alt="" onClick={PlayApple}></img>
                <img src={Banana} className="Grid-cell" alt="" onClick={PlayBanana}></img>
                <img src={Burger} className="Grid-cell" alt="" onClick={PlayBurger}></img>
                <img src={Hotdog} className="Grid-cell" alt="" onClick={PlayHotdog}></img>
                <img src={Kiwi} className="Grid-cell" alt="" onClick={PlayKiwi}></img>
                <img src={Pasta} className="Grid-cell" alt="" onClick={PlayPasta}></img>
                <img src={Pizza} className="Grid-cell" alt="" onClick={PlayPizza}></img>
                <img src={Salad} className="Grid-cell" alt="" onClick={PlaySalad}></img>
                <img src={Taco} className="Grid-cell" alt="" onClick={PlayTaco}></img>
            </div>
        </div>
    )
}

export default Foods