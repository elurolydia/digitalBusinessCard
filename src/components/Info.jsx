import React from "react";
import profilepix from '../assets/profilepix.png';
import icon from '../assets/icon.svg'
import linkedin from '../assets/linkedin.svg'



export default function Info () {
    return (
        <div className="infoDiv">
            <img src={profilepix}/>
            <h1>Lydia Eluro</h1>
            <p>Frontend Developer</p>
            <small>My website</small>
            <div className="divbox">
                <a href="mailto:elurolydia@gmail.com"> <button className="btn1"> <img src={icon}/>Email</button> </a>
                <a href="https://www.linkedin.com/in/lydia-eluro/" target='blank'><button className="btn2"><img src={linkedin}/>LinkedIn</button></a>
            </div>
        </div>
    )
}