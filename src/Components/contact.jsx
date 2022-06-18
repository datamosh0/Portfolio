import React from "react";
import { FaEnvelope, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import SectionTitle from "./section_title";
import "../index.css";

export default function Contact() {
  return (
    <div className="contact-area section-ptb" id="contact">
      <div className="container">
        <SectionTitle title="CONTACT US" subTitle="How to Contact Me" />
      </div>
      <div className="container mt-45">
        <div className="row md-justify-content-center w-fit">
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="contact-item">
              <div className="ct-item-icon float-left ml-30 mr-20 font-sm">
                <i>
                  <FaEnvelope />
                </i>
              </div>
              <a
                className="btn-animation "
                href="https://themeforest.net/user/tortoiz"
              >
                dawsoncontreras@gmail.com
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
            <div className="contact-item">
              <div className="ct-item-icon float-left ml-30 mr-20">
                <i>
                  <FaLinkedinIn />
                </i>
              </div>
              <a
                className="btn-animation"
                href="https://www.linkedin.com/in/dawson-contreras-230635204/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
            <div className="contact-item">
              <div className="ct-item-icon float-left ml-30 mr-20">
                <i>
                  <FaTwitter />
                </i>
              </div>
              <a
                className="btn-animation"
                href="https://twitter.com/dawsonCodes_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
