import React from "react"

function BuyBtn (props) {
    return(
        <div>
<div className="White-box">
    <div className="Buy-box-grid">
        <div className="Pricetag-hole"></div>
    <span className="Price-tag"> {props.text} </span>
    <p className="Buy-btn"> {props.buyText}</p>
</div>
</div>
</div>
    )
}

export default BuyBtn