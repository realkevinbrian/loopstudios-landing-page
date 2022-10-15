import React from "react";
import { Wrapper} from "../Navbar/Styled";
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
import logo from "../../Assets/images/logo.svg";

function index() {
  //list link
  const list = ["About", "careers", "event", "products", "support"].map(
    (item) => (
      <div>
        <a href="/" key={item}>
          {item}
        </a>
        <span></span>
      </div>
    )
  );

  //social media
  const media = [fb, tw, pint, insta].map((item) => (
    <div>
      <img src={item} alt={item} key={item} />
      <span></span>
    </div>
  ));

  return (
    <FooterWrapper>
      <FooterAbout>
        <Wrapper>
          <img id = "logo" src={logo} alt="logo" />
        </Wrapper>
        <FooterList className="hoverEffect">{list}</FooterList>
      </FooterAbout>

      <FooterPrivacy>
        <FooterMedia className="hoverEffect">{media}</FooterMedia>
        <p>
          <span>&copy; 2022 Loopstudios, All rights reserved</span>
          <span>
            Powered by
            <a href="realkevinbrian.netlify.app"> &hearts;Kevin Brian</a>
          </span>
        </p>
      </FooterPrivacy>
    </FooterWrapper>
  );
}

export default index;
