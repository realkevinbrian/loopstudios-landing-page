import React from "react";
import { Logo, NavbarWrapper } from "./Styled";
import logo from "../../Assets/images/logo.svg";
import List from "./List";

function index() {
  return (
    <NavbarWrapper>
      <Logo>
        <img src={logo} alt="media" />
      </Logo>
      <List />
    </NavbarWrapper>
  );
}

export default index;
