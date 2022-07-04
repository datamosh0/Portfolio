import React from "react";
import Header from "../Components/header";
import Slider from "../Components/slider";
import Projects from "../Components/Projects";
import Blogs from "../Components/blogs";
import Contact from "../Components/contact";
import Footer from "../Components/footer";
import "../index.css";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}
