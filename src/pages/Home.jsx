import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import FilePresentIcon from '@mui/icons-material/FilePresent';
import GithubIcon from "@material-ui/icons/GitHub";
import { ContactMe } from "./ContactMe";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Marina</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon
            className="linkedInIcon"
            onClick={(event) =>
              (window.location.href =
                "https://www.linkedin.com/in/marinaalmeida20/")
            }
          />
          {/* <EmailIcon className="emailIcon" onClick={event =>  window.location.href='https://www.linkedin.com/in/marinaalmeida20/'} /> */}
          <GithubIcon
            className="githubIcon"
            onClick={(event) =>
              (window.location.href = "https://github.com/MarinaAlmeida20")
            }
          />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Soft Skills</h2>
            <span>
              Problem Solving, Teamwork, Time Management, Adaptability,
              Communication
            </span>
          </li>
          <li className="item">
            <h2>Hard Skills</h2>
            <span>
              HTML & CSS, ReactJS, NPM, BootStrap, MaterialUI, Yarn,
              TailwindCSS, StyledComponents, NodeJS, ExpressJS, PostgresSQL
            </span>
          </li>
        </ol>
      </div>
      <div className="form">
        <h1 className="form-title">Send Me a message</h1>
        <ContactMe />
      </div>
    </div>
  );
}

export default Home;
