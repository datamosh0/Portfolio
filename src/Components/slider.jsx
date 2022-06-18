import React from "react";
import "../assets/css/slick.min.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Link } from "react-scroll";
export default function slider() {
  const str = "Hello, I'm ";
  return (
    <div className="container pt-90 pb-90 pl-100">
      <div className="row m-0 ">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
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
            <div className="slider-cta">
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
        </div>

        <div
          className="col-xl-8 col-lg-8 col-md-7 col-sm-8 col-8 slider-area-intro "
          style={{ marginLeft: "4rem" }}
        >
          <div className="into-area">
            <div className="section-title">
              <p className="pr-20 about">
                {str}
                <strong className="firstName">
                  <u>Dawson</u>
                </strong>
                . A self taught developer with a passion for building
                exceptional digital experiences. I mainly work within the
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
