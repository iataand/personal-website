import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-scroll";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="content">
          <div className="nav-bar">
            <div>
              <p style={{ fontWeight: "bold", fontSize: "50px", margin: 0 }}>
                Andrei Iatan
              </p>
              <p style={{ fontSize: "21px" }}>Frontend Engineer at Luxoft</p>
              <p>
                Crafting Empowering and Inclusive
                <br /> Digital Solutions for the Web.
              </p>
            </div>
            <div className="nav-options">
              <Link
                activeClass="selected"
                spy
                to="about"
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
              <Link
                activeClass="selected"
                spy
                to="experience"
                style={{ cursor: "pointer" }}
              >
                Work Experience
              </Link>
              <Link
                activeClass="selected"
                spy
                to="projects"
                style={{ cursor: "pointer" }}
              >
                Projects
              </Link>
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "260px" }}>
              <a href="https://www.github.com/iataand">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/andrei-sebastian-iatan-8a026919b/">
                <LinkedInIcon />
              </a>
              <a href="https://www.instagram.com/_iatan/">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="scrollable">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              <img
                src={require("./images/pro_2.png")}
                alt="programmer"
                style={{ width: "50%" }}
              />
            </div>
            <div id="about">
              <p>
                Hi 👋. My name is Andrei-Sebastian Iatan and I am Software
                Developer from Romania mainly focused on frontend development.
              </p>
              <p>
                My main focus these days is building products for Luxoft and
                starting my own freelancing business. In My free time I try to
                stay up to date with the local underground post-punk scene from
                Bucharest.💀
              </p>
              <p>
                When I’m not at the computer, I’m usually practicing guitar or
                planning my next travel trip.
              </p>
            </div>

            <div style={{ paddingTop: "60px" }} id="experience">
              <div className="experience-row">
                <div className="experience-date">Aug 2021 -- PRESENT</div>
                <div>
                  <div
                    className="experience-header"
                    style={{ fontWeight: "bold" }}
                  >
                    Software Developer - Luxoft
                  </div>
                  <p>
                    Assisting in the design, development, and maintenance of
                    software for automated and manual banking transfers,
                    utilizing technologies such as JavaScript, TypeScript,
                    React, SASS/SCSS, and HTML5. Collaborating with Business
                    Analysts to efficiently deliver new features and played a
                    role in the transition to a new transaction format.
                  </p>
                  <div>
                    <div className="chips-wrapper">
                      <span className="chip">React</span>
                      <span className="chip">Redux</span>
                      <span className="chip">HTML</span>
                      <span className="chip">CSS</span>
                      <span className="chip">Git</span>
                      <span className="chip">MaterialUi</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience-row">
                <div className="experience-date">Oct 2021 -- Aug 2022</div>
                <div>
                  <div
                    className="experience-header"
                    style={{ fontWeight: "bold" }}
                  >
                    Software Developer - Softbinator Technologies
                  </div>
                  <p>
                    Developed and maintained software using JavaScript,
                    TypeScript, Angular, React, Redux, and SCSS in an Agile
                    environment, delivering new features and resolving bugs on a
                    regular basis. Emphasized writing modular, easily
                    maintainable code while collaborating with QA engineers and
                    senior team members
                  </p>
                  <div>
                    <div className="chips-wrapper">
                      <span className="chip">ReduxJs</span>
                      <span className="chip">React</span>
                      <span className="chip">Angular</span>
                      <span className="chip">HTML</span>
                      <span className="chip">CSS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience-row">
                <div className="experience-date">Jul 2021 -- Oct 2021</div>
                <div>
                  <div
                    className="experience-header"
                    style={{ fontWeight: "bold" }}
                  >
                    Software Engineer Intern - Sonovative Group
                  </div>
                  <p>
                    Utilized JavaScript, React, SASS/SCSS, and HTML5 to
                    introduce new functionalities and resolve bugs, while also
                    contributing to UI/UX decision-making for a music
                    transcription software. Collaborated closely with team
                    members in a German-based company, improving my English
                    communication skills through presentations and discussions
                    with international colleagues.
                  </p>
                  <div>
                    <div className="chips-wrapper">
                      <span className="chip">React</span>
                      <span className="chip">HTML</span>
                      <span className="chip">CSS</span>
                      <span className="chip">Mobx</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience-row">
                <div className="experience-date">Jul 2021 -- Oct 2021</div>
                <div>
                  <div
                    className="experience-header"
                    style={{ fontWeight: "bold" }}
                  >
                    Internship Trainee - Softbinator Technologies
                  </div>
                  <p>
                    Took part in a technical training program that provided me
                    with the foundation needed in order to develop a
                    production-ready React or Angular user interface
                    application.
                  </p>
                  <div>
                    <div className="chips-wrapper">
                      <span className="chip">React</span>
                      <span className="chip">Angular</span>
                      <span className="chip">HTML</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ margin: "20px 0 120px 0" }}>View full resume</div>
            <div id="projects">
              <a href="https://github.com/iataand/Gymder">
                <div className="experience-row highlight-row">
                  <img
                    src={require("./images/gymder.jpg")}
                    style={{
                      width: "23%",
                      height: "23%",
                      marginTop: "23px",
                    }}
                    alt="project-img"
                  />
                  <div>
                    <div style={{ display: "flex" }}>
                      <h3 className="experience-header">Gymder</h3>
                      <p className="arrow">&#10132;</p>
                    </div>
                    This project is an application developed as part of the
                    frontend curriculum at University of Bucharest. The goal of
                    this project is to showcase the advanced frontend
                    development skills acquired during the third year of study.
                    Gymder is a mathching system website destined to people that
                    are looking for gym partners.
                    <div className="chips-wrapper">
                      <span className="chip">HTML</span>
                      <span className="chip">CSS</span>
                      <span className="chip">React</span>
                      <span className="chip">TypeScript</span>
                      <span className="chip">MaterialUi</span>
                      <span className="chip">Axios</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://github.com/iataand/Twitter-clone">
                <div className="experience-row">
                  <img
                    src={require("./images/twitter_clone.jpg")}
                    style={{
                      width: "23%",
                      height: "23%",
                      marginTop: "23px",
                    }}
                    alt="project-img"
                  />
                  <div>
                    <div style={{ display: "flex" }}>
                      <h3 className="experience-header">Twitter Clone</h3>
                      <p className="arrow">&#10132;</p>
                    </div>
                    The "Twitter-clone" is a project that aims to replicate some
                    of the functionalities and design aspects of the popular
                    social media platform Twitter. The project is a web
                    application built using ReactJs and the Firebase API.
                    <div className="chips-wrapper">
                      <span className="chip">React</span>
                      <span className="chip">HTML</span>
                      <span className="chip">CSS</span>
                      <span className="chip">MaterialUi</span>
                      <span className="chip">FireBase</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://www.askrevere.com">
                <div className="experience-row">
                  <img
                    src={require("./images/revere.PNG")}
                    style={{
                      width: "23%",
                      height: "23%",
                      marginTop: "23px",
                    }}
                    alt="project-img"
                  />
                  <div>
                    <div style={{ display: "flex" }}>
                      <h3 className="experience-header">Revere</h3>
                      <p className="arrow">&#10132;</p>
                    </div>
                    Contributed to the maintanance and development of the
                    frontend of an AI-powered chat service, meticulously
                    designed to provide comprehensive answers to inquiries
                    arising from U.S. county board meetings.
                    <div className="chips-wrapper">
                      <span className="chip">React</span>
                      <span className="chip">HTML</span>
                      <span className="chip">CSS</span>
                      <span className="chip">TailWind</span>
                      <span className="chip">Axios</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
