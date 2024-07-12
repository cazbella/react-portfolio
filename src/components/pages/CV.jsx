import React from "react";
import Header from "../layout/Header";
import "./CV.css";
import cv from "../../assets/pdf/CarolineLaneCVJuly24PDF.pdf";
import cvImage from "../../assets/pdf/cv.png";

function CV() {
  return (
    <div>
      <Header title="CV" />
      <div className="container-fluid mb-4" id="cv-container">
        <p>Please find my CV below. Click anywhere on the image to open a PDF version.</p>
        <div className="cv-wrapper">
          <a href={cv} target="_blank" rel="noopener noreferrer" className="cv-link">
            <img src={cvImage} alt="CV Image 1" className="cv-image" />
          </a>
        </div>
      </div>
    </div>
  );
}

//     <div>
//       <Header title="CV" />
//       <div className="container-fluid mb-4" id="cv-container">
//         <p style={{ textAlign: "center" }}>Please find a link below to my CV in PDF format, or view my CV details in the box below.</p>
//         <a href={cdwebdev} target="_blank" rel="noopener noreferrer" className="cv-link" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//           Open CV (PDF)
//         </a>


//         <div className="cv-images mx-auto">
//           <div className="container-fluid mb-4 border">
//             <div className="cv-content-box">
//               <h2 style={{ textAlign: "center", marginTop: "20px" }} >Caroline Lane</h2>
//               <p style={{ textAlign: "center" }}>35 St. Lawrence Drive, Cannock, WS11 7YG UK</p>
//               <p style={{ textAlign: "center" }}>Email: <a href="mailto:carolinelane@live.co.uk">carolinelane@live.co.uk</a></p>
//               <p style={{ textAlign: "center", marginBottom: "40px" }}>LinkedIn: <a href="https://www.linkedin.com/in/caroline-lane7" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/caroline-lane7</a></p>

//               <h3>SKILLS</h3>
//               <p style={{ textAlign: "justify", marginLeft: "10px", marginRight: "10px" }}>Front End Web and Software Development: Javascript, Python, SQL, HTML, CSS, Bootstrap, APIs, React, Node.js, GitHub, Data Handling.</p>
//               <p style={{ textAlign: "justify", marginLeft: "10px", marginRight: "10px" }}>Teaching, Human Biology, British Sign Language, Planning, Presentation and Performance.</p>

//               <h3>SUMMARY</h3>
//               <p style={{ textAlign: "justify", marginLeft: "10px", marginRight: "10px" }}>With recent experience in the field of web and software development, I am dedicated to furthering my expertise and delivering impactful solutions. With a background in teaching and human biology, I bring a unique perspective to problem-solving and possess a strong work ethic. Passionate about learning and innovating, I strive to excel in every project I undertake.</p>

//               <h3>EXPERIENCE</h3>
//               <p style={{ marginLeft: "10px", marginRight: "10px" }}><strong>CB Web Design, Cannock - Front End Web Development</strong></p>
// <p style={{ marginLeft: "10px", marginRight: "10px" }}>October 2023 - PRESENT</p>
// <ul>
//   <li>Caroline Bella Music: <a href="http://carolinebellamusic.co.uk">carolinebellamusic.co.uk</a> | GitHub: <a href="https://github.com/cazbella/caroline-bella-music">github.com/cazbella/caroline-bella-music</a></li>
//   <li>Bridgtown Concert Showband: <a href="https://bridgtown-concert-band.netlify.app">bridgtown-concert-band.netlify.app</a> | GitHub: <a href="https://github.com/cazbella/bridgtown-concert-band">github.com/cazbella/bridgtown-concert-band</a></li>
//   <li>Cocktail Nights: <a href="https://cazbella.github.io/mums-night">cazbella.github.io/mums-night</a> | GitHub: <a href="https://github.com/cazbella/mums-night">github.com/cazbella/mums-night</a></li>
// </ul>
// <p style={{ marginLeft: "10px", marginRight: "10px" }}><strong>ABC Teachers, Lichfield - Teacher</strong></p>
// <p style={{ marginLeft: "10px", marginRight: "10px" }}>September 2021 - PRESENT</p>
// <ul>
//   <li>Undertaking long and short-term placements in various primary and secondary schools, as well as additional needs schools.</li>
//   <li>Skills include; independence, adaptability, teaching, mentoring, liaising with others. Problem solving, planning, time management, organisation.</li>
// </ul>


//               <h3>EDUCATION</h3>
//               <p style={{ marginLeft: "10px", marginRight: "10px" }}><strong>Code First Girls - CFG Degree in Software Development</strong></p>
//               <p style={{ marginLeft: "10px", marginRight: "10px" }}>February 2024 - June 2024</p>
//               <ul>
//                 <li>SQL, Python, HTML, JavaScript, JSX, CSS, OOP, Git & GitHub, React, API, Agile Development.</li>
//               </ul>
//               <p style={{ marginLeft: "10px", marginRight: "10px" }}><strong>EdX, Online - Certificate in Front-End Web Development</strong></p>
//               <p style={{ marginLeft: "10px", marginRight: "10px" }}>September 2023 - January 2024</p>
//               <ul>
//                 <li>HTML, JavaScript, JSX, CSS, OOP, Git & GitHub, React, API, Agile Development.</li>
//               </ul>

//               <h3>AWARDS</h3>
//               <p style={{ marginLeft: "10px", marginRight: "10px" }}>Patients Aid Association Prize - Best Overall Year 2 Performance.</p>
//               <p style={{ marginLeft: "10px", marginRight: "10px" }}>Undergraduate Prize for Physiology - Best Final Year Project.</p>

//               <h3>OTHER EXPERIENCE</h3>
//               <ul>
//                 <li>Singer/Songwriter and Performer - Caroline Bella Music</li>
//                 <li>Sales and I.T. - The Link and Homeserve and I.T. Helpdesk assistant - Extra Personnel</li>
//                 <li>Student Nurse - Wolverhampton University (1 year)</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default CV;
