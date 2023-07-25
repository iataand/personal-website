import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-scroll";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="nav-bar">
          <div>
            <p style={{ fontWeight: "bold", fontSize: "50px", margin: 0 }}>
              Andrei Iatan
            </p>
            <p style={{ fontSize: "21px" }}>Frontend Engineer at Luxoft :(</p>
            <p>
              I build accessible, inclusive products and <br />
              digital experiences for the web.
            </p>
          </div>
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
          <div style={{ display: "flex", gap: "20px", marginTop: "260px" }}>
            <a href="https://www.github.com/obi4">
              <GitHubIcon />
            </a>
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className="scrollable">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
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
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising agency, a start-up, a
              student-led design studio, and a huge corporation.
            </p>
            <p>
              My main focus these days is building products and leading projects
              for our clients at Upstatement. In my free time I've also released
              an online video course that covers everything you need to know to
              build a web app with the Spotify API.
            </p>
            <p>
              When I’m not at the computer, I’m usually rock climbing, hanging
              out with my wife and two cats, or running around Hyrule searching
              for Korok seeds K o r o k s e e d s .
            </p>
          </div>

          <div style={{ paddingTop: "60px" }} id="experience">
            <div className="experience-row">
              <div
                style={{ width: "100%", fontSize: "13px", paddingTop: "2px" }}
              >
                1/08/2021 -- PRESENT
              </div>
              <div>
                <div
                  className="experience-header"
                  style={{ fontWeight: "bold" }}
                >
                  Frontend Developer - Luxoft
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <span className="chip">React</span>
                    <span className="chip">Angular</span>
                    <span className="chip">Redux</span>
                    <span className="chip">HTML</span>
                    <span className="chip">CSS</span>
                  </div>
                </p>
              </div>
            </div>
            <div className="experience-row">
              <div
                style={{ width: "100%", fontSize: "13px", paddingTop: "2px" }}
              >
                1/08/2021 -- PRESENT
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>
                  Frontend Developer - Luxoft
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <span className="chip">React</span>
                  <span className="chip">Angular</span>
                  <span className="chip">Redux</span>
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                </div>
              </div>
            </div>
            <div className="experience-row">
              <div
                style={{ width: "100%", fontSize: "13px", paddingTop: "2px" }}
              >
                1/08/2021 -- PRESENT
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>
                  Frontend Developer - Luxoft
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <span className="chip">React</span>
                  <span className="chip">Angular</span>
                  <span className="chip">Redux</span>
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "20px 0 120px 0" }}>View full resume</div>
          <div id="projects">
            <div className="experience-row">
              <img
                src={require("./images/programmer.jpg")}
                style={{
                  width: "23%",
                  height: "23%",
                  border: "1px solid red",
                  marginTop: "23px",
                }}
              />
              <div>
                <h3>Project title</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <div style={{ display: "flex", gap: "5px", marginTop: "30px" }}>
                  <span className="chip">React</span>
                  <span className="chip">Angular</span>
                  <span className="chip">Redux</span>
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                </div>
              </div>
            </div>
            <div className="experience-row highlight-row">
              <img
                src={require("./images/programmer.jpg")}
                style={{
                  width: "23%",
                  height: "23%",
                  border: "1px solid red",
                  marginTop: "23px",
                }}
              />
              <div>
                <h3>Project title</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <div style={{ display: "flex", gap: "5px", marginTop: "30px" }}>
                  <span className="chip">React</span>
                  <span className="chip">Angular</span>
                  <span className="chip">Redux</span>
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                </div>
              </div>
            </div>

            <div className="experience-row">
              <img
                src={require("./images/programmer.jpg")}
                style={{
                  width: "23%",
                  height: "23%",
                  border: "1px solid red",
                  marginTop: "23px",
                }}
              />
              <div>
                <h3>Project title</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <div style={{ display: "flex", gap: "5px", marginTop: "30px" }}>
                  <span className="chip">React</span>
                  <span className="chip">Angular</span>
                  <span className="chip">Redux</span>
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                </div>
              </div>
            </div>
            <div className="experience-row">
              <img
                src={require("./images/programmer.jpg")}
                style={{
                  width: "23%",
                  height: "23%",
                  border: "1px solid red",
                  marginTop: "23px",
                }}
              />
              <div>
                <h3>Project title</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <div style={{ display: "flex", gap: "5px", marginTop: "30px" }}>
                  <span className="chip">React</span>
                  <span className="chip">Angular</span>
                  <span className="chip">Redux</span>
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
