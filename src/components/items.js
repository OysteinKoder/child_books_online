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

function Items() {
    return(
        <div>
            <div className="Text-box">
            <h2>Items</h2>
            <p>What are these items called? Tap on the picture to find out!</p>
            </div>
            <BoxNumber text="Box One"></BoxNumber>
            <div className="Grid">
                <div><img className="Grid-cell" src={Hammer}></img></div>
                <div><img className="Grid-cell" src={Bus}></img></div>
                <div><img className="Grid-cell" src={Car}></img></div>
                <div><img className="Grid-cell" src={Chair}></img></div>
                <div><img className="Grid-cell" src={Helicopter}></img></div>
                <div><img className="Grid-cell" src={Pants}></img></div>
                <div><img className="Grid-cell" src={Plane}></img></div>
                <div><img className="Grid-cell" src={Shoes}></img></div>
                <div><img className="Grid-cell" src={tShirt}></img></div>
            </div>
        </div>
    )
}
export default Items