import React from "react"
import { Link } from "react-router-dom"

function BuyBtn (props) {
    return(
        <div>
<div className="White-box">
    <div className="Buy-box-grid">
        <div className="Pricetag-hole"></div>
    <span className="Price-tag"> {props.text} </span>
    <Link className="Buy-btn Nav-item" to="/notesRoadmap"> {props.buyText} </Link>
</div>
</div>
</div>
    )
}

export default BuyBtn