import React from "react";

const Skills = () => {
  return (
    <div>
      <h2>SKILLS</h2>
      <div className="skillsCorrection">
        <div className="tab">
        <p className="blue"><strong>Technical skills</strong></p><br />
        <ul>
          <li>HTML, CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>PostgreSQL</li>
          <li>Django Framework</li>
        </ul>
        </div>
        <div className="tab">
        <p className="blue"><strong>Personal skills</strong></p><br />
        <ul>
          <li>Accurate</li>
          <li>Adaptable</li>
          <li>Patient</li>
          <li>Responsible</li>
        </ul>
        </div>
        <div className="tab">
        <p className="blue"><strong>Language skills</strong></p><br />
        <ul>
          <li>English (IELTS 7.0)</li>
          <li>Russian (conversational)</li>
          <li>Uzbek (native)</li>
        </ul>
        </div>
      </div>
      <hr /><br />
    </div>
  );
};

export default Skills;
