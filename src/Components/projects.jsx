import React, { useState, useEffect } from "react";
import "../index.css";
import Masonry from "react-responsive-masonry";
import SinglePortfolio from "../SingleFeatures/SinglePortfolio";
import tezosCapture from "../assets/images/portfolio/screen-capture (4) (1).gif";
import NBACapture from "../assets/images/portfolio/screen-capture (2) (1).gif";
import etsyCapture from "../assets/images/portfolio/screen-capture (3) (1).gif";
import wordleCapture from "../assets/images/portfolio/screen-capture (6) (1).gif";
import chatterCapture from "../assets/images/portfolio/screen-capture (5).gif";
import forecastCapture from "../assets/images/portfolio/screen-capture (1) (1).gif";
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
    <div className="asdfContainer">
      <div id="projects" className="asdf">
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
            <h3 className="py-2">Chat App</h3>

            <SinglePortfolio
              link="https://onlinechatter.netlify.app"
              capture={chatterCapture}
            />
            <h6 className="mt-3">
              <code className="pt-2" style={{ fontSize: "1.3rem" }}>
                REACT REDUX TYPESCRIPT FIREBASE
              </code>
            </h6>

            <p className="flex-col">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://onlinechatter.netlify.app"
                style={{ color: "#c48f43" }}
              >
                Live Demo
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/datamosh0/chat-app"
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
            <h3 className="py-2">NBA Stats App</h3>

            <SinglePortfolio
              link="https://nba-statistics.netlify.app/"
              capture={NBACapture}
            />
            <h6 className="mt-3">
              <code className="pt-2" style={{ fontSize: "1.3rem" }}>
                REACT APIS TAILWIND BOOTSTRAP
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
            className="text-center mb-3"
            style={{
              boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
            }}
          >
            <h3 className="py-2">Wordle Clone</h3>

            <SinglePortfolio
              link="https://wordle-jepv.onrender.com"
              capture={wordleCapture}
            />
            <h6 className="mt-3">
              <code className="pt-2" style={{ fontSize: "1.3rem" }}>
                TYPESCRIPT CSS HTML
              </code>
            </h6>

            <p className="flex-col">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wordle-jepv.onrender.com"
                style={{ color: "#c48f43" }}
              >
                Live Demo
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/datamosh0/wordle-clone/tree/typescript"
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
            <h3 className="py-2">Tezos Landing Page</h3>
            <SinglePortfolio
              link="https://tezos.onrender.com/"
              capture={tezosCapture}
            />
            <h6 className="mt-3">
              <code style={{ fontSize: "1.3rem" }}>JAVASCRIPT CSS HTML</code>
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
              link="https://etsy.onrender.com/"
              capture={etsyCapture}
            />
            <h6 className="mt-3">
              <code className="pt-2" style={{ fontSize: "1.3rem" }}>
                JAVASCRIPT SASS HTML
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
            <h3 className="py-2">Forecast App</h3>

            <SinglePortfolio
              link="https://liveforecast.netlify.app/"
              capture={forecastCapture}
            />
            <h6 className="mt-3">
              <code className="pt-2" style={{ fontSize: "1.3rem" }}>
                APIS JAVASCRIPT SASS
              </code>
            </h6>

            <p className="flex-col">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://liveforecast.netlify.app/"
                style={{ color: "#c48f43" }}
              >
                Live Demo
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/datamosh0/WeatherApp"
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
                  title="Blog Website"
                  technologies="React, Firebase, Bootstrap"
                  GHlink="https://github.com/datamosh0/Updated-React-Firebase-Auth/tree/hosting-branch"
                  desc=""
                />
                <h6 className="mt-3">
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
        </Masonry>
      </div>
    </div>
  );
}
