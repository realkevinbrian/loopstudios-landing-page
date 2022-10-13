import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import { blogPosts, Context } from "./Context/blogPosts";

function App() {
  return (
    <Context.Provider value={blogPosts}>
      <Hero />
      <About />
      <Blog />
      {/* <Footer /> */}
    </Context.Provider>
  );
}

export default App;
