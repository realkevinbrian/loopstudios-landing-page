import React from "react";
import { Logo } from "../Navbar/Styled";
import {
  FooterAbout,
  FooterList,
  FooterMedia,
  FooterPrivacy,
  FooterWrapper,
} from "./Styled";
import fb from "../../Assets/images/icon-facebook.svg";
import tw from "../../Assets/images/icon-twitter.svg";
import pint from "../../Assets/images/icon-pinterest.svg";
import insta from "../../Assets/images/icon-instagram.svg";

function index() {
  //list link
  const list = ["About", "careers", "event", "products", "support"].map(
    (item) => (
      <a href="/" key={item}>
        {item}
      </a>
    )
  );

  //social media
  const media = [fb, tw, pint, insta].map((item) => (
    <img src={item} alt={item} key={item} />
  ));

  return (
    <FooterWrapper>
      <FooterAbout>
        <Logo />
        <FooterList>{list}</FooterList>
      </FooterAbout>

      <FooterPrivacy>
        <FooterMedia>{media}</FooterMedia>
        <p>
          &copy; 2022 Loopstudios, developed by &heart;
          <a href="realkevinbrian.netlify.app">Kevin Brian</a>All rights
          reserved
        </p>
      </FooterPrivacy>
    </FooterWrapper>
  );
}

export default index;
