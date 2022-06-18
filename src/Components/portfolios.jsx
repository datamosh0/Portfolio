import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "../index.css";
import Masonry from "react-responsive-masonry";
import SinglePortfolio from "../SingleFeatures/SinglePortfolio";
import portfolioImg_01 from "../assets/images/portfolio/ss2.png";
import portfolioImg_02 from "../assets/images/portfolio/ss4.png";
import portfolioImg_03 from "../assets/images/portfolio/screenshot (3).png";
import portfolioImg_04 from "../assets/images/portfolio/ss1.png";
import portfolioImg_06 from "../assets/images/portfolio/ss3.png";
import { useGlobalEvent } from "beautiful-react-hooks";
import SectionTitle from "./section_title";

export default function Portfolios() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [portfolioColumns, setPortfolioColumns] = useState(3);
  const onWindowResize = useGlobalEvent("resize");

  const controlColumns = () => {
    setWindowWidth(window.innerWidth);

    if (windowWidth >= 992) {
      setPortfolioColumns(3);
    } else if (windowWidth <= 991 && windowWidth > 767) {
      setPortfolioColumns(3);
    }
    if (windowWidth <= 767) {
      setPortfolioColumns(1);
    }
  };
  onWindowResize((event) => {
    controlColumns();
  });

  useEffect(() => {
    controlColumns();
  }, [windowWidth]);

  return (
    <>
      <div className="portfolio-area section-ptb-2" id="portfolio">
        <div className="container">
          <SectionTitle title="PORTFOLIO" subTitle="My Projects" />
          <Row>
            <Col sm={12}>
              <Masonry columnsCount={portfolioColumns}>
                <div
                  className="text-center "
                  style={{
                    boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
                    margin: "1rem",
                    padding: ".5rem",
                  }}
                >
                  <h3>Tezos Landing Page</h3>
                  <SinglePortfolio
                    portfolioImg={portfolioImg_01}
                    title="Tezos Landing Page"
                    technologies="HTML, CSS, Javascript"
                    link="https://tezos.onrender.com/"
                    desc=""
                  />
                  <h6>
                    <code style={{ fontSize: "1.3rem" }}>
                      HTML CSS Javascript
                    </code>
                  </h6>
                  <p className="flex-col">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tezos.onrender.com/"
                      style={{ color: "#c48f43" }}
                    >
                      Live Demo
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/datamosh0/LandingPage/tree/hosting-branch"
                      style={{ color: "#c48f43", marginTop: "5px" }}
                    >
                      Source Code
                    </a>
                  </p>
                </div>
                <div
                  className="text-center"
                  style={{
                    boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
                    margin: "1rem",
                    padding: ".5rem",
                  }}
                >
                  <h3>Etsy Landing Page</h3>

                  <SinglePortfolio
                    portfolioImg={portfolioImg_06}
                    title="Etsy Landing Page"
                    technologies="HTML, SCSS, Javascript"
                    link="https://etsy.onrender.com/"
                    desc=""
                  />
                  <h6>
                    <code style={{ fontSize: "1.3rem" }}>
                      HTML SCSS Javascript
                    </code>
                  </h6>

                  <p className="flex-col">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://etsy.onrender.com/"
                      style={{ color: "#c48f43" }}
                    >
                      Live Demo
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/datamosh0/Etsy/tree/hosting-branch"
                      style={{ color: "#c48f43", marginTop: "5px" }}
                    >
                      Source Code
                    </a>
                  </p>
                </div>
                <div
                  className="text-center"
                  style={{
                    boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
                    margin: "1rem",
                    padding: ".5rem",
                  }}
                >
                  <h3>NBA Stats Website</h3>

                  <SinglePortfolio
                    portfolioImg={portfolioImg_03}
                    title="NBA Stats Website"
                    technologies="React, Apis, Tailwind, Bootstrap"
                    link="https://nba-statistics.netlify.app/"
                    desc=""
                  />
                  <h6>
                    <code style={{ fontSize: "1.3rem" }}>
                      React Apis Tailwind Bootstrap
                    </code>
                  </h6>

                  <p className="flex-col">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://nba-statistics.netlify.app/"
                      style={{ color: "#c48f43" }}
                    >
                      Live Demo
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/datamosh0/NBA"
                      style={{ color: "#c48f43", marginTop: "5px" }}
                    >
                      Source Code
                    </a>
                  </p>
                </div>
                <div
                  className="text-center"
                  style={{
                    boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
                    margin: "1rem",
                    padding: ".5rem",
                  }}
                >
                  <h3>Blog Website</h3>

                  <SinglePortfolio
                    portfolioImg={portfolioImg_02}
                    title="Blog Website"
                    technologies="React, Firebase, Bootstrap"
                    GHlink="https://github.com/datamosh0/Updated-React-Firebase-Auth/tree/hosting-branch"
                    desc=""
                  />
                  <h6>
                    <code style={{ fontSize: "1.3rem" }}>
                      React Firebase Bootstrap
                    </code>
                  </h6>

                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/datamosh0/Updated-React-Firebase-Auth/tree/hosting-branch"
                      desc=""
                      style={{ color: "#c48f43" }}
                    >
                      Source Code
                    </a>
                  </p>
                </div>
                <div
                  className="text-center"
                  style={{
                    boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
                    margin: "1rem",
                    padding: ".5rem",
                  }}
                >
                  <h3>Wordle Clone</h3>

                  <SinglePortfolio
                    portfolioImg={portfolioImg_04}
                    title="Wordle Clone"
                    technologies="HTML, CSS, Javascript"
                    link="https://wordle-l7wj.onrender.com/"
                    desc=""
                  />
                  <h6>
                    <code style={{ fontSize: "1.3rem" }}>
                      HTML CSS Javascript
                    </code>
                  </h6>

                  <p className="flex-col">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wordle-l7wj.onrender.com/"
                      style={{ color: "#c48f43" }}
                    >
                      Live Demo
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/datamosh0/wordle-clone/tree/hosting-branch"
                      style={{ color: "#c48f43", marginTop: "5px" }}
                    >
                      Source Code
                    </a>
                  </p>
                </div>
              </Masonry>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
