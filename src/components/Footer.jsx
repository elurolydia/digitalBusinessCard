import React from "react";
import Facebook from '../assets/Facebook Icon.png'
import LinkedIn from '../assets/Linkedin Icon.png'
import GitHub from '../assets/GitHub Icon.png'


export default function Footer () {
    return (
        <footer>
            <a href="https://web.facebook.com/elogorchukwu/" target="blank"><img src={Facebook} /> </a>
            <a href="https://www.linkedin.com/in/lydia-eluro/" target="blank"><img src={LinkedIn} /> </a>
            <a href="https://github.com/elurolydia" target="blank"><img src={GitHub} /></a>
        </footer>
    )
}