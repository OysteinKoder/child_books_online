import React from "react"

function WhiteTextBox (props) {
    return(
        <div className="White-box-notes">
            <h3> {props.patch} </h3>
            <p className="Left-text"> 
            {props.text} <br></br> 
            {props.text2} <br></br> 
            {props.text3} <br></br> 
            {props.text4} <br></br>
            {props.text5} <br></br>
            </p>
        </div>
    )
}

export default WhiteTextBox