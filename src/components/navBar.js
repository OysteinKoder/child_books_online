import React from "react"
import { Link } from "react-router-dom"

function navBar() {
    return (
        <div>
            <header>
                <h1> Child Books Online</h1>
                    <div className="Ul-nav">
                        <Link className="Nav-item" to="/Colors">Colors</Link>
                        <Link className="Nav-item" to="/Animals">Animals</Link>
                        <Link className="Nav-item" to="/Items">Items</Link>
                        <Link className="Nav-item" to="/Foods">Foods</Link>
                    </div>
            </header>
        </div>
    )
}

export default navBar