import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div>
      <h2>EXPERIENCE</h2>
      <div className="correction">
        <h3 className="blue">SUE"Tashkent Metropoliteni" (July 2022 - Present)</h3><br />
        <p><strong>Software Engineer</strong></p><br />
        <p><strong>Slogan: </strong><i>Being a software engineer mainly as a JS/Python developer.</i></p><br />
        <p><strong>Projects:</strong></p>
        <ul>
          <li className="tab"><a href="https://tashmetro.uz/">tashmetro.uz</a></li>
          <li className="tab"><a href="https://sander.uz/">sander.uz</a></li>
          <li className="tab"><a href="https://10-maktab.uz/">10-maktab.uz</a></li>
        </ul>
        
        
      </div>
      <hr /><br />
    </div>
  );
};

export default Experience;
