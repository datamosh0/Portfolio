import React from "react";
import servicIcon_02 from "../assets/images/icons/code.png";
import servicIcon_05 from "../assets/images/icons/code-white.png";
import servicNode from "../assets/images/icons/servicNpm.png";
import servicJest from "../assets/images/icons/servicJest.png";
import servicJavascript from "../assets/images/icons/servicJavascript.png";
import servicGit from "../assets/images/icons/servicGit.png";
import servicFirebase from "../assets/images/icons/servicFirebase.png";
import servicCss from "../assets/images/icons/servicCss.png";
import servicApi from "../assets/images/icons/servicApi.png";
import servicReact from "../assets/images/icons/React-icon.svg.png";
import SectionTitle from "./section_title";

export default function Services() {
  return (
    <div className="services-area section-ptb bgs" id="services">
      <div className="container">
        <SectionTitle title="TECHNOLOGIES" subTitle="What I Am Great At" />
      </div>
      <div className="container">
        <div className="row service-row mt-40">
          <div className="col-md-4 col-sm-6 mb-3 mb-md-0">
            <div
              className="project-card text-center bgp"
              style={{ height: "200px" }}
            >
              <div className="icon mb-20">
                <img
                  src={servicReact}
                  alt="design"
                  style={{ height: "60px" }}
                />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">REACT</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 mb-md-0">
            <div
              className="project-card text-center bgp"
              style={{ height: "200px" }}
            >
              <div className="icon mb-20">
                <img
                  src={servicJavascript}
                  alt="design"
                  style={{ height: "60px" }}
                />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">JAVASCRIPT</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4 mb-md-0">
            <div
              className="project-card text-center bgp"
              style={{ height: "200px" }}
            >
              <div className="icon mb-20">
                <img src={servicCss} alt="design" style={{ height: "60px" }} />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">CSS3 & HTML</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row service-row mt-45">
          <div
            className="col-md-2 col-sm mb-4 mb-md-0"
            style={{ maxHeight: "10px" }}
          >
            <div
              className="project-card text-center bgp"
              style={{ height: "200px" }}
            >
              <div className="icon mb-20">
                <img
                  src={servicIcon_05}
                  alt="design"
                  style={{ height: "60px" }}
                />
                <img
                  className="d-none"
                  src={servicIcon_02}
                  alt="design"
                  style={{ height: "60px" }}
                />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">SCSS, BOOTSTRAP, TAILWIND</h4>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm mb-4 mb-md-0">
            <div
              className="project-card text-center bgp "
              style={{ height: "200px" }}
            >
              <div className="icon mb-20">
                <img src={servicNode} alt="design" style={{ height: "60px" }} />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">NODE PACKAGE MANAGER</h4>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm mb-4 mb-md-0 ">
            <div
              className="project-card text-center bgp"
              style={{ height: "200px" }}
            >
              <div className="icon mb-20">
                <img src={servicJest} alt="design" style={{ height: "60px" }} />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">JEST</h4>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 mb-4 mb-md-0">
            <div
              className="project-card text-center bgp"
              style={{ height: "200px" }}
            >
              <div className="icon mb-20">
                <img src={servicGit} alt="design" style={{ height: "60px" }} />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">GIT & GITHUB</h4>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm mb-4 mb-md-0 ">
            <div
              className="project-card text-center bgp"
              style={{ height: "200px" }}
            >
              <div className="icon mb-20">
                <img src={servicApi} alt="design" style={{ height: "60px" }} />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">REST APIS</h4>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 mb-4 mb-md-0">
            <div
              className="project-card text-center bgp"
              style={{ height: "200px" }}
            >
              <div className="icon mb-20">
                <img
                  src={servicFirebase}
                  alt="design"
                  style={{ height: "60px" }}
                />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">FIREBASE</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="counter-area mt-45">
                <div className="container">
                    <div className="row">
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Years of Experience" start={0} end={9} duration={5}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Satisfied Customers" start={0} end={200} duration={100}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Design Items" start={0} end={769} duration={100}/>
                        <SingleCountdown title="Clients Served" start={0} end={124} duration={100}/>
                    </div>
                </div>
            </div> */}
    </div>
  );
}
