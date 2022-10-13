import React from "react";
import {
  AboutContentText,
  AboutContentWrapper,
  AboutMediaWrapper,
  AboutWrapper,
} from "./Styled";
import media from "../../Assets/images/desktop/image-interactive.jpg";

function index() {
  return (
    <AboutWrapper>
      
      <AboutMediaWrapper>
        <img src={media} alt="media" />
      </AboutMediaWrapper>

      <AboutContentWrapper>
        <AboutContentText>
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </AboutContentText>
      </AboutContentWrapper>

    </AboutWrapper>
  );
}

export default index;
