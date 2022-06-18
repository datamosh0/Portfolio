import React from "react";
import "../assets/css/slick.min.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Link } from "react-scroll";
export default function slider() {
  return (
    <div className="container pt-130 pb-130 pl-xl-0 px-0">
      <div className="row m-0 ">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
          <div className="slider-left">
            <div className="name">
              <h1>
                Dawson <br /> Contreras<span className="pc">.</span>
              </h1>
            </div>
            <div className="dash"></div>
            <div className="social-links mb-40">
              <a
                href="https://www.linkedin.com/in/dawson-contreras-230635204/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/datamosh0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
              <br />
              <a
                href="https://twitter.com/dawsonCodes_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              {/* |{" "}
                        <a href="https://dribbble.com/TortoizTeam">Dribbble</a> */}
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
        {/* <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-7 pl-0">
                                        <div className="profile-pic">
                                            <img className="img-fluid" src={sliderImg01} alt="jack harper"/>
                                        </div>
                                    </div> */}
        <div
          className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro "
          style={{ marginLeft: "4rem" }}
        >
          <div className="into-area">
            <div className="section-title">
              <h3 className="section-name pc">ABOUT ME</h3>
              <h2>
                Frontend Web <br /> Developer,
                <br />
                React
              </h2>
              <p className="pr-20">
                I am a self taught developer with a passion for building
                expceptional digial experiences. Based in DFW, TX.
              </p>
            </div>
            <div className="intro-button">
              <Link
                to="services"
                className="btn-animation mr-btn"
                smooth={true}
                duration={2000}
                activeClass="active"
                spy={false}
                offset={5}
              >
                {" "}
                Learn more &nbsp;{" "}
                <i>
                  <FaLongArrowAltDown />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
