import React, { useEffect, useState } from "react";
import "../index.css";
import Masonry from "react-responsive-masonry";
import SinglePortfolio from "./SingleProject";
import SectionTitle from "./SectionTitle";
import projectsData from "../data/projects_data";

export default function Projects() {
  const [portfolioColumns, setPortfolioColumns] = useState(2);

  const controlColumns = () => {
    if (window.innerWidth >= 767) {
      setPortfolioColumns(2);
    }
    if (window.innerWidth < 767) {
      setPortfolioColumns(1);
    }
  };

  useEffect(() => {
    window.onresize = controlColumns();

    // You can also use:
    // window.addEventListener('resize', myHandlerFunction);
  }, []);

  return (
    <div className="asdfContainer">
      <div id="projects" className="asdf">
        <SectionTitle title="PROJECTS" />
        <Masonry columnsCount={portfolioColumns} className="masonry">
          {projectsData.map((project) => {
            const { title, link, capture, github, tech } = project;
            return (
              <SinglePortfolio
                title={title}
                link={link}
                capture={capture}
                github={github}
                tech={tech}
                key={link}
              />
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}
