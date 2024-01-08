import React from "react";
import Header from "../layout/Header";
import badgesImage from "../../assets/images/IMG_1879.png"; 

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
    "Node.js",
    "ES6",
    "React",
  ];

  const otherSkills = [
    "Python",
    "Completed module on Data Analytics at Staffordshire University",
    "Team collaboration",
    "Agile development",
    "Presenting",
  ];

  return (
    <div>
      <Header title="Skills" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card skills" >
              <img
                src={badgesImage} style={{ height: '400px', objectFit: 'cover', objectPosition: 'top'   }} 
                className="card-img-top skills"
                alt="HTML, Java Script and CSS Shield badges"
              />
              <div className="card-body">
                <h5 className="card-title">Skills in Frontend Web Development</h5>
                <div className="card-text">
                  <strong>Frontend Skills:</strong>
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
