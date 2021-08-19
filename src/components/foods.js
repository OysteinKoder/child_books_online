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
import useSound from "use-sound"
import AppleVoice from "../audio/foods/apple.mp3"
import BananaVoice from "../audio/foods/banana.mp3"
import BurgerVoice from "../audio/foods/burger.mp3"
import HotdogVoice from "../audio/foods/hotdog.mp3"
import KiwiVoice from "../audio/foods/kiwi.mp3"
import PastaVoice from "../audio/foods/pasta.mp3"
import PizzaVoice from "../audio/foods/pizza.mp3"
import SaladVoice from "../audio/foods/salad.mp3"
import TacoVoice from "../audio/foods/taco.mp3"




function PlayApple () {
        console.log("hello")
    new Audio(AppleVoice).play()
}
function PlayBanana () {
    console.log("hello")
new Audio(BananaVoice).play()
}
function PlayBurger () {
    console.log("hello")
new Audio(BurgerVoice).play()
}
function PlayHotdog () {
    console.log("hello")
new Audio(HotdogVoice).play()
}
function PlayKiwi () {
    console.log("hello")
new Audio(KiwiVoice).play()
}
function PlayPasta () {
    console.log("hello")
new Audio(PastaVoice).play()
}
function PlayPizza () {
    console.log("hello")
new Audio(PizzaVoice).play()
}
function PlaySalad () {
    console.log("hello")
new Audio(SaladVoice).play()
}
function PlayTaco () {
    console.log("hello")
new Audio(TacoVoice).play()
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