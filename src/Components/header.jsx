import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBars, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="header-area ">
      <div className=" pt-30 " style={{ paddingLeft: "3rem" }}>
        <div className="row justify-content-lg-between ">
          <div className="col-lg-12 px-0 ">
            <div className="menu-area" style={{ marginRight: "18%" }}>
              <Navbar collapseOnSelect expand="lg" className="p-0">
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                  <i className="text-white">
                    <FaBars />
                  </i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto align-items-center">
                    <ReactLink to="/" className="nav-link">
                      Home
                    </ReactLink>
                    <Link
                      className="nav-link"
                      to="projects"
                      smooth={true}
                      duration={2000}
                      activeClass="active"
                      spy={false}
                      offset={5}
                    >
                      Projects
                    </Link>

                    <Link
                      className="nav-link"
                      to="blog"
                      smooth={true}
                      duration={2000}
                      activeClass="active"
                      spy={false}
                      offset={5}
                    >
                      Blog
                    </Link>

                    <Link
                      className="nav-link"
                      to="contact"
                      smooth={true}
                      duration={2000}
                      activeClass="active"
                      spy={false}
                      offset={5}
                    >
                      Contact
                    </Link>
                    <ul className="mb-0 menu-social pl-15">
                      <li className="list-inline-item menu-border">
                        <a
                          href="https://www.linkedin.com/in/dawson-contreras-230635204/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i>
                            <FaLinkedinIn />
                          </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://github.com/datamosh0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i>
                            <FaGithub />
                          </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://twitter.com/dawsonCodes_"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i>
                            <FaTwitter />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
