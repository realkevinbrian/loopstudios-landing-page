import React from "react";
import { CardOverlay, CardWrapper } from "./Styled";

function Card({ data }) {
  return (
    <CardWrapper>
      <img src={data.image} alt="blogpost" />
      <CardOverlay>
        <h2>{data.title}</h2>
      </CardOverlay>
    </CardWrapper>
  );
}

export default Card;
