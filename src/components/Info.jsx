import React from "react";
import profilepix from '../assets/profilepix.png'



export default function Info () {
    return (
        <div className="infoDiv">
            <img src={profilepix}/>
            <h1>Lydia Eluro</h1>
            <p>Frontend Developer</p>
            <small>My website</small>
            <div>
                <button>Email</button>
                <button></button>
            </div>
        </div>
    )
}