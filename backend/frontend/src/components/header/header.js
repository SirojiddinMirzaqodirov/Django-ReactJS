import React from "react";
import './header.css'
import selfi from './registan.jpg'

const Header = () => {
  return (
    <div className="header">
        <img className="selfi" src={selfi} alt="" />
        <h2>Sirojiddin Mirzakodirov</h2><br />
        <p>
            <strong>Linkedin:</strong>
            <a href="https://www.linkedin.com/in/sirojiddin-mirzakodirov">https://www.linkedin.com/in/sirojiddin-mirzakodirov</a>
        </p><br />
        <p>
            <strong>Email:</strong>
            <a href="perfectworldfrom2021@gmail.com">perfectworldfrom2021@gmail.com</a>
        </p>
        <br /><hr /><br />
    </div>
)
};

export default Header;
