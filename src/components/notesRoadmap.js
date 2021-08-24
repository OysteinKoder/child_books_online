import React from "react"
import WhiteTextBox from "./whiteTextBox.js"

function NotesRoadmap () {
    return(
        <div>
        <div className="Notes-container">
            <h2>Patch Notes</h2>
            <WhiteTextBox 
            patch="
            Patch 0.201 - 24.08.2021 
            "
            text="
            - Fixed audio bug where it was possible to make multiple audio events play at the same time
            "
            text2="
            -Added Notes/Roadmap paige"
            ></WhiteTextBox>
            <div>

            </div>
            <h2>Roadmap</h2>
        <WhiteTextBox text="
        - Build the app in React Native (Currently only in ReactJs)
        " text2="
        - Release the app in google play and apple store
        "
        text3="
        - Build free version and a paid version, this is the free version
        "
        text4="
        - Record and impliment norwegian text/audio
        "
        text5="
        - Updated roadmap with new future content
        ">
        
        </WhiteTextBox>
        </div>
        </div>
    )
}

export default NotesRoadmap