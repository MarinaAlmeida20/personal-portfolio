import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon className="instagramIcon" onClick={(event) =>
                    (window.location.href = "https://www.instagram.com/marina_mero_almeida/")
                } />
                <FacebookIcon className="facebookIcon" onClick={(event) =>
                    (window.location.href = "https://www.facebook.com/marina.almeida.5264382")
                } />
                <LinkedInIcon className="linkedInIcon" onClick={(event) =>
                    (window.location.href = "https://www.linkedin.com/in/marinaalmeida20/")
                } />
            </div>
            <p>&copy; 2022 Marina Almeida</p>
        </div>
    );
}

export default Footer;
