import React, { useState } from "react";
import { Wrapper, NavbarWrapper, StateButtons } from "./Styled";
import logo from "../../Assets/images/logo.svg";
import List from "./List";
import closeBtn from "../../Assets/images/icon-close.svg";
import openBtn from "../../Assets/images/icon-hamburger.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarWrapper>
      <Wrapper>
        <img id="logo" src={logo} alt="media" />
        <img
          className={`StateButtons ${open && "openMenu"}`}
          onClick={() => setOpen(false)}
          src={closeBtn}
          alt="closebutton"
        />
        <img
          className={`StateButtons ${!open && "openMenu"}`}
          onClick={() => setOpen(true)}
          src={openBtn}
          alt="openbutton"
        />
      </Wrapper>
      <List open={open}/>
    </NavbarWrapper>
  );
}

export default Navbar;
