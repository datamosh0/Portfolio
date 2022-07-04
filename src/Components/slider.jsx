import React from "react";
import "../assets/css/slick.min.css";
import { Link } from "react-scroll";
export default function Slider() {
  const str = "Hello, I'm ";
  return (
    <div className="pb-30 pt-30">
      <div className=" m-0 header  ">
        <div className="">
          <div className="slider-left">
            <div className="name">
              <h1>
                Dawson <br /> Contreras<span className="pc">.</span>
              </h1>
            </div>
            <div className="dash"></div>
            <h2>
              Frontend Web <br /> Developer,
              <br />
              React
            </h2>
            <div className="dash"></div>
            <div
              className="social-links mb-40"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ fontSize: "1.3rem" }}>
                |
                <a
                  href="https://www.linkedin.com/in/dawson-contreras-230635204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.3rem" }}
                >
                  LinkedIn
                </a>
              </div>
              <div style={{ fontSize: "1.3rem" }}>
                |
                <a
                  href="https://github.com/datamosh0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.3rem" }}
                >
                  Github
                </a>
              </div>

              <div style={{ fontSize: "1.3rem" }}>
                |
                <a
                  href="https://twitter.com/dawsonCodes_"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.3rem" }}
                >
                  Twitter
                </a>
              </div>
            </div>
            <Link
              to="contact"
              className="ct-btn"
              smooth={true}
              duration={2000}
              activeClass="active"
              spy={false}
              offset={5}
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="">
          <div className="into-area">
            <div className="section-title">
              <p className="pr-20 about">
                {str}
                <strong className="firstName">
                  <u>Dawson</u>
                </strong>
                , a DFW based developer building exceptional digital
                experiences. I mainly work within the
                <strong className="react"> React </strong>
                ecosystem, but I'm always learning new tools & technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
