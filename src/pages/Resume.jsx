import React, { useState } from "react";
import "../styles/Resume.css";

function Resume() {
  const [embedURL] = useState(
    "https://docs.google.com/document/d/e/2PACX-1vQHhJfH47TLQsUB3aodTqtbCqylSBUR3lSDIRpE63JUbtcBatR76vGGagGle0B58npSSMD3QSi9ZaoU/pub?embedded=true"
  );

  return (
    <div className="resume">
      <iframe className="iframe"
        title="Marina Resume"
        width="402"
        height="480"
        frameborder="0"
        scrolling="yes"
        src={embedURL}
      ></iframe>
    </div>
  );
}

export default Resume;