import React from "react";
import { Wrapper, NavbarWrapper, StateButtons } from "./Styled";
import logo from "../../Assets/images/logo.svg";
import List from "./List";
import closeBtn from "../../Assets/images/icon-close.svg";
import openBtn from "../../Assets/images/icon-hamburger.svg";

function index() {
  return (
    <NavbarWrapper>
      <Wrapper>
        <img id="logo" src={logo} alt="media" />
        <img className=" StateButtons" src={closeBtn} alt="closebutton" />
        <img className=" StateButtons open" src={openBtn} alt="openbutton" />
      </Wrapper>
      <List />
    </NavbarWrapper>
  );
}

export default index;
