import React from "react";
import Slider from "../Components/Slider";
import Projects from "../Components/Projects";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
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
