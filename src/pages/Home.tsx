import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import { Interests } from './Interests'
import "../styles/Home.css";
import MyImg from "../assets/28.jpg";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <div className="img">
                    <img
                        className="my_img"
                        src={MyImg}
                        alt="Marina"
                        width="500"
                        height="600"
                    />
                </div>
                <div className="introduction">
                    <h2>Hi, My name is Marina</h2>
                    <div className="prompt">
                        <p>
                            A software developer with a passion for learning and creating.
                        </p>
                        <LinkedInIcon
                            className="linkedInIcon"
                            onClick={(event) =>
                            (window.location.href =
                                "https://www.linkedin.com/in/marinaalmeida20/")
                            }
                        />
                        <GithubIcon
                            className="githubIcon"
                            onClick={(event) =>
                                (window.location.href = "https://github.com/MarinaAlmeida20")
                            }
                        />
                    </div>
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
                        <h2>Technologies</h2>
                        <span>
                            HTML & CSS, ReactJS, NPM, Typescript, Jest, MongoDB, GRaphQL, BootStrap, MaterialUI, Yarn,
                            TailwindCSS, StyledComponents, NodeJS, ExpressJS, PostgresSQL
                        </span>
                    </li>
                </ol>
            </div>
            <Interests />
        </div>
    );
}

export default Home;
