import React, { useContext } from "react";
import { Context } from "../../Context/blogPosts";
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
      <h2>our creations</h2>
      <a href="/">See All</a>
    </BlogHeadWrapper>
  );
}

function BlogBody() {
  const posts = useContext(Context);
  return (
    <BlogBodyWrapper>
      {posts.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </BlogBodyWrapper>
  );
}
