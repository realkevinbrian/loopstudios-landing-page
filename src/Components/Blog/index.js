import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { BlogBodyWrapper, BlogHeadWrapper, BlogWrapper } from "./Styled";

function index() {
  return (
    <BlogWrapper>
      <BlogHead />
      <BlogBody />
    </BlogWrapper>
  );
}

export default index;

function BlogHead() {
  return (
    <BlogHeadWrapper>
      <h4>our creations</h4>
      <a href="/">See All</a>
    </BlogHeadWrapper>
  );
}

function BlogBody() {
  return (
    <BlogBodyWrapper>
      {[1, 2, 3, 4, 5].map((item) => (
        <Card key={item} data={item} />
      ))}
    </BlogBodyWrapper>
  );
}
