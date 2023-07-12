import React from "react"
import face from '../images/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={face}
                className="header--image"
                alt="meme"
            />
            <h2 className="header--title">Image Generator </h2>
            
        </header>
    )
}