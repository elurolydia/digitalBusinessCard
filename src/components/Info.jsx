import React from "react";
import Lydia from '../assets/Lydia.jpeg';
import icon from '../assets/icon.svg'




export default function Info () {
    return (
        <div className="infoDiv">
            <div className="profilePictureDiv">
                <img src={Lydia}/>
            </div>
            <h1>Lydia Eluro</h1>
            <p>Frontend Developer</p>
            <small>My website</small>
            <div className="divbox">    
                <a href="mailto:elurolydia@gmail.com"><button className="btn1"><img src={icon}/>Email</button></a>
            </div>
        </div>
    )
}