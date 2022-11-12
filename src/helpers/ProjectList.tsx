import Proj1 from "../assets/proj1.gif";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.png";
import Proj4 from "../assets/proj4.png";
import Proj5 from "../assets/proj5.png";
import Proj6 from "../assets/proj6.png";


export const ProjectList: { id?: string, name: string; image: string, skills: string, link: string }[] = [
    {
        name: "Customer Form",
        image: "",
        skills: "GraphQL, ApolloServer, MongoDB and TypeGraphQL",
        link: "https://github.com/MarinaAlmeida20/customer-form-app",
    }
    , {
        name: "Login Page",
        image: "https://raw.githubusercontent.com/MarinaAlmeida20/login/main/src/assets/Screenshot%20from%202022-10-16%2017-43-52.png",
        skills: "Vite, React, TypeScript,Tailwind,Storybook,Radix UI,phosphor-react,Axios,MSW",
        link: "https://github.com/MarinaAlmeida20/login",
    }
    , {
        name: "Github Finder Language",
        image: Proj1,
        skills: "JavaScript,HTML,CSS,ReactJS,Axios,Github API",
        link: "https://github.com/MarinaAlmeida20/github-best-guess",
    },
    {
        name: "Job Application",
        image: Proj3,
        skills: "ReactJS,Node.js,ExpressJS,PostgresSQL,Docker,Heroku",
        link: "https://github.com/MatildaAko/ldn8-migrantsity-final-project",
    },
    {
        name: "Countries App",
        image: Proj2,
        skills: "JavaScript,HTML,CSS,ReactJS",
        link: "https://github.com/MarinaAlmeida20/challenge-countries",
    },
    {
        name: "Hotel App",
        image: Proj4,
        skills: "HTML,CSS,ReactJS",
        link: "https://github.com/MarinaAlmeida20/cyf-hotel-react/tree/LondonClass8-MarinaAlmeida-CYF-Hotel-React-Module-Week-3"
    },
    {
        name: "TV Show Dom",
        image: Proj5,
        skills: "JavaScript,HTML,CSS",
        link: "https://github.com/MarinaAlmeida20/tv-show-dom-project/tree/level-999"
    },
    {
        name: "Baby Name Picker",
        image: Proj6,
        skills: "ReactJS,JavaScript,HTML,CSS",
        link: "https://github.com/MarinaAlmeida20/challenge-baby-name-picker"
    },
];
