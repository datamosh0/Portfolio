import React, { useState, useEffect } from "react";
import "../index.css";
import Masonry from "react-responsive-masonry";
import SinglePortfolio from "../SingleFeatures/SinglePortfolio";
import portfolioImg_01 from "../assets/images/portfolio/ss2.png";
import portfolioImg_02 from "../assets/images/portfolio/ss4.png";
import portfolioImg_03 from "../assets/images/portfolio/screenshot (3).png";
import portfolioImg_04 from "../assets/images/portfolio/ss1.png";
import portfolioImg_06 from "../assets/images/portfolio/ss3.png";
import tezosCapture from "../assets/images/portfolio/screen-capture-_4_.gif";
import NBACapture from "../assets/images/portfolio/screen-capture-_2_.gif";
import etsyCapture from "../assets/images/portfolio/screen-capture-_3_.gif";
import wordleCapture from "../assets/images/portfolio/screen-capture-_6_.gif";
import { useGlobalEvent } from "beautiful-react-hooks";
import SectionTitle from "./section_title";

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [portfolioColumns, setPortfolioColumns] = useState(3);
  const onWindowResize = useGlobalEvent("resize");

  const controlColumns = () => {
    setWindowWidth(window.innerWidth);

    if (windowWidth >= 992) {
      setPortfolioColumns(2);
    } else if (windowWidth <= 991 && windowWidth > 767) {
      setPortfolioColumns(2);
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
    <div id="projects" style={{ width: "94%", marginLeft: "1%" }}>
      <SectionTitle title="PROJECTS" />
      <Masonry
        columnsCount={portfolioColumns}
        style={{
          paddingRight: "0 !important",
          paddingLeft: "0 !important",
        }}
        className="masonry"
      >
        <div
          className="text-center mb-3"
          style={{
            boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
          }}
        >
          <h3 className="py-2">Tezos Landing Page</h3>
          <SinglePortfolio
            portfolioImg={portfolioImg_01}
            link="https://tezos.onrender.com/"
            capture={tezosCapture}
          />
          <h6 className="mt-3">
            <code style={{ fontSize: "1.3rem" }}>HTML CSS Javascript</code>
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
          className="text-center mb-3"
          style={{
            boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
          }}
        >
          <h3 className="py-2">Etsy Landing Page</h3>

          <SinglePortfolio
            portfolioImg={portfolioImg_06}
            link="https://etsy.onrender.com/"
            capture={etsyCapture}
          />
          <h6>
            <code className="pt-2" style={{ fontSize: "1.3rem" }}>
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
          className="text-center mb-3"
          style={{
            boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
          }}
        >
          <h3 className="py-2">NBA Stats Website</h3>

          <SinglePortfolio
            portfolioImg={portfolioImg_03}
            link="https://nba-statistics.netlify.app/"
            capture={NBACapture}
          />
          <h6>
            <code className="pt-2" style={{ fontSize: "1.3rem" }}>
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
        {/* <div
                className="text-center"
                style={{
                  boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
                  
                  marginBottom: '1rem',
                  
                }}
              >
                <h3 className="py-2">Blog Website</h3>

                <SinglePortfolio
                  portfolioImg={portfolioImg_02}
                  title="Blog Website"
                  technologies="React, Firebase, Bootstrap"
                  GHlink="https://github.com/datamosh0/Updated-React-Firebase-Auth/tree/hosting-branch"
                  desc=""
                />
                <h6>
                  <code className="pt-2" style={{ fontSize: "1.3rem" }}>
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
              </div> */}
        <div
          className="text-center mb-3"
          style={{
            boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
          }}
        >
          <h3 className="py-2">Wordle Clone</h3>

          <SinglePortfolio
            portfolioImg={portfolioImg_04}
            link="https://wordle-5kba.onrender.com/"
            capture={wordleCapture}
          />
          <h6>
            <code className="pt-2" style={{ fontSize: "1.3rem" }}>
              HTML CSS Javascript
            </code>
          </h6>

          <p className="flex-col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wordle-5kba.onrender.com/"
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
    </div>
  );
}
