import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBars, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Header() {
  const linkData = ["Projects", "Blog", "Contact"];
  const listData = [
    {
      link: "https://www.linkedin.com/in/dawson-contreras-230635204/",
      icon: <FaLinkedinIn />,
    },
    {
      link: "https://github.com/datamosh0",
      icon: <FaGithub />,
    },
    {
      link: "https://twitter.com/dawsonCodes_",
      icon: <FaTwitter />,
    },
  ];
  return (
    <div className="header-area pt-30">
      <div className="col-lg-12 px-0 ">
        <div className="menu-area">
          <Navbar collapseOnSelect expand="md" className="p-0">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ marginLeft: "2rem" }}
            >
              <i style={{ color: "#dadada" }}>
                <FaBars />
              </i>
            </Navbar.Toggle>
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ justifyContent: "end" }}
            >
              <Nav className="ml-auto align-items-center ">
                {linkData.map((link) => {
                  return (
                    <Link
                      className="nav-link"
                      to={`${link.toLowerCase()}`}
                      smooth={true}
                      duration={300}
                    >
                      {link}
                    </Link>
                  );
                })}
                <ul className="mb-0 menu-social pl-15">
                  {listData.map((list) => {
                    const { link, icon } = list;
                    return (
                      <li className="list-inline-item ">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i>{icon}</i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}
