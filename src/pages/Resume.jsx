import React from "react";
import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-glass-card">
        <div className="resume-header">
          <h1 className="resume-name">Alde Stephen D. Seares</h1>
          <p className="resume-address">Blk 9 Lot 17 Deca Homes Mandaue Prime, Jagobiao, Mandaue City 6014 Phils, Cebu</p>
        </div>
        <div className="resume-section resume-objective">
          <h2>Career Objective</h2>
          <p>Motivated to grow and use my academic knowledge and technical skills in real-world projects. Open to learning new tools, adapting to different environments, and improving through experience. Excited to work with a team, contribute to software development, and help create useful solutions.</p>
        </div>
        <div className="resume-section resume-personal">
          <h2>Personal Information</h2>
          <ul>
            <li><b>Birthday:</b> February 25, 2003</li>
            <li><b>Age:</b> 22</li>
            <li><b>Religion:</b> Roman Catholic</li>
            <li><b>Gender:</b> Male</li>
            <li><b>Civil Status:</b> Single</li>
            <li><b>Telephone number:</b> 0921 209 9677</li>
            <li><b>Email address:</b> searesstephen@gmail.com</li>
          </ul>
        </div>
        <div className="resume-section resume-skills">
          <h2>Skills</h2>
          <ul>
            <li><b>Programming Languages:</b> C, Java, PHP, SQL, React, Node</li>
            <li><b>Frameworks & Libraries:</b> Bootstrap, TailwindCSS</li>
            <li><b>Databases:</b> MySQL</li>
            <li><b>Design & Testing Tools:</b> Figma, Postman, Insomnia</li>
            <li><b>Productivity Tools:</b> Microsoft Word, Excel, PowerPoint, Google Docs, Google Sheets, Google Slides</li>
          </ul>
        </div>
        <div className="resume-section resume-projects">
          <h2>Projects</h2>
          <div className="resume-project">
            <div className="resume-project-title">June 2025 - Present<br/><i>CAMPERS: CLG/CES Accessible Management Portal and Event Reporting System</i></div>
            <ul>
              <li>Currently developing a web-based system designed to streamline event management and participation tracking for the University of San Carlos’ Community Extension Services (CES) and Carolinian Lifestyle Guide(CLG). The platform is intended for coordinators to efficiently manage events, while allowing students to monitor their CES points, participation, and qualifications for honors or graduation.</li>
            </ul>
          </div>
          <div className="resume-project">
            <div className="resume-project-title">June 2025 - July 2025<br/><i>Online Shopping Web Application</i></div>
            <ul>
              <li>Built an e-commerce web application that allows users to browse products, add items to a cart and complete checkout, developed using React, Node.js, and MySQL, with a focus on a smooth navigation, user-friendly design, and collaborative team development.</li>
            </ul>
          </div>
          <div className="resume-project">
            <div className="resume-project-title">November 2024 - December 2024<br/><i>Carolink</i></div>
            <ul>
              <li>Built a forum-style web platform where students can post opinions, share notes, and upload academic resources such as PDFs. The system features filters by year level, department, and course, enabling easier access to relevant materials and fostering collaboration within the student community.</li>
            </ul>
          </div>
        </div>
        <div className="resume-section resume-education">
          <h2>Educational Background</h2>
          <div className="resume-education-detail">
            <b>Bachelor of Science in Information Systems</b><br/>
            University of San Carlos, Talamban Campus<br/>
            August 2023 - Present
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
