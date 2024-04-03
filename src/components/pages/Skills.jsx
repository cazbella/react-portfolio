import React from "react";
import Header from "../layout/Header";
import certificate from "../../assets/images/edx-cert.jpg"; 
import "./../pages/Skills.css"

function Skills() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
    "Bootstrap",
    "DOM manipulation",
    "API's",
    "JQuery",
    "JSON",
    "SQL",
    "Python",
    "Node.js",
    "ES6",
    "React",
    "OOP",
    "Stacks and Queues",
    "Building API"
  ];

  const otherSkills = [
    "Completed module on Data Analytics at Staffordshire University",
    "Team collaboration",
    "Agile development",
    "Presenting",
    "Planning and Problem Solving"
  ];

  return (
    <div>
      <Header title="Skills" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card skills">
              <img
                className="certificate"
                src={certificate}
                alt="HTML, Java Script and CSS Shield badges"
              />
              <div className="card-body skill-bullets">
                <h5 className="card-title">Skills in Web and Software Development</h5>
                <div className="card-text">
                  <ul>
                    {frontendSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                  <strong>Other Skills:</strong>
                  <ul>
                    {otherSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Explore EdX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
