import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";

import "../styles/NavBar.css";

function NavBar() {
    const [expandNavBar, setExpandNavBar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false);
    }, [location]);

    const handleClick = () => setExpandNavBar((prev) => !prev)

    return (
        <div className="navbar" id={expandNavBar ? "open" : "close"}>
            <div className="toggleButton">
                {expandNavBar ? (
                    <button onClick={handleClick}>
                        <CloseIcon />
                    </button>
                ) : (
                    <button onClick={handleClick}>
                        <ReorderIcon />
                    </button>
                )}
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </div>
    );
}

export default NavBar;
