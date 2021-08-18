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

function Animals () {
    return(
        <div> 
            <div className="Text-box">
            <h2>Animals</h2>
            <p>What animals can you see in the pictures below? Click to find out!</p>
            </div>
            <BoxNumber text="Box One"></BoxNumber>
            <div className="Grid">
                <div> <img className="Grid-cell" src={Cat} alt="cat"></img></div>
                <div> <img className="Grid-cell" src={Chicken} alt="chicken"></img></div>
                <div> <img className="Grid-cell" src={Cow} alt="cow"></img></div>
                <div> <img className="Grid-cell" src={Dog} alt="dog"></img></div>
                <div> <img className="Grid-cell" src={Hippo} alt="hippo"></img></div>
                <div> <img className="Grid-cell" src={Horse} alt="horse"></img></div>
                <div> <img className="Grid-cell" src={Lion} alt="lion"></img></div>
                <div> <img className="Grid-cell" src={Sheep} alt="sheep"></img></div>
                <div> <img className="Grid-cell" src={Zebra} alt="zebra"></img></div>
            </div>
        </div>
    )
}

export default Animals