import React from "react"
import BoxNumber from "./boxNumber"

function Colors () {
    return(
        <div>
            <div className="Text-box">
            <h2>Colors</h2>
            <p>What colors can you see in the boxes below? Tap to find out</p>
            </div>
            <BoxNumber text="Box One"></BoxNumber>
            <div className="Grid">
                <div className="Grid-cell Yellow"></div>
                <div className="Grid-cell Lime"></div>
                <div className="Grid-cell Green"></div>
                <div className="Grid-cell Blue"></div>
                <div className="Grid-cell Violet"></div>
                <div className="Grid-cell Red"></div>
                <div className="Grid-cell Red-orange"></div>
                <div className="Grid-cell Green"></div>
                <div className="Grid-cell Blue"></div>
            </div>
        </div>
    )
}

export default Colors