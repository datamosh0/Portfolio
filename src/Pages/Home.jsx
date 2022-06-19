import React from "react";
import Slider from "../Components/slider";
import SimpleReactLightbox from "simple-react-lightbox";
import Services from "../Components/services";
import Projects from "../Components/projects";
import Blogs from "../Components/blogs";
import Contact from "../Components/contact";
import Header from "../Components/header";
import Footer from "../Components/footer";
import NewProjects from "../Components/newProjects";
import "../index.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      {/* <Services /> */}
      <SimpleReactLightbox>
        {/* <NewProjects /> */}
        <Projects />
      </SimpleReactLightbox>
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
