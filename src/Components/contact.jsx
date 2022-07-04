import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiCopyAlt } from "react-icons/bi";
import SectionTitle from "./SectionTitle";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";

export default function Contact() {
  function myFunction() {
    /* Get the text field */
    let copyText = "dawsoncontreras@gmail.com";

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to Copy
    </Tooltip>
  );
  return (
    <div className="contact-area section-ptb" id="contact">
      <div className="">
        <SectionTitle title="CONTACT" />
      </div>
      <div className="container mt-45">
        <div className="row md-justify-content-center w-fit">
          <div className="col-lg-4 col-md-6 mb-30">
            <OverlayTrigger placement="bottom" overlay={renderTooltip}>
              <div className="contact-item " style={{ cursor: "pointer" }}>
                <div className="ct-item-icon float-left ml-30 mr-20">
                  <i>
                    <BiCopyAlt />
                  </i>
                </div>
                <div>
                  <a onClick={myFunction} className="btn-animation" href="/#">
                    dawsoncontreras@gmail.com
                  </a>
                </div>
              </div>
            </OverlayTrigger>
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
