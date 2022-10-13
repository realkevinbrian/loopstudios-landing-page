import React from "react";
import { HeroContentText, HeroContentWrapper, HeroWrapper } from "./Styled";
import Navbar from "../Navbar";

function index() {
  return (
    <HeroWrapper>
      <Navbar />
      <HeroContentWrapper>
        <HeroContentText>
          <h2>Immersive experiences that deliver</h2>
        </HeroContentText>
      </HeroContentWrapper>
    </HeroWrapper>
  );
}

export default index;
