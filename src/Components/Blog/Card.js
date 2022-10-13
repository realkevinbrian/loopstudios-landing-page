import React from "react";
import { CardOverlay, CardWrapper } from "./Styled";
import sample from "../../Assets/images/desktop/image-soccer-team.jpg";

function Card() {
  return (
    <CardWrapper>
      <img src={sample} alt="blogpost" />
      <CardOverlay>
        <h3>Deep earth</h3>
      </CardOverlay>
    </CardWrapper>
  );
}

export default Card;
