import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
export default function Footer() {
  const goHome = (e) => {
    e.preventDefault();
    scroll.scrollToTop(50);
  };
  return (
    <div className="footer-area">
      <div className="copyright-text text-center">
        <p className="pt-20">
          <i className="fas fa-copyright mr-10"></i>
        </p>
      </div>
      <div className="back-to-top">
        <a onClick={goHome} href="/#">
          <i>
            <FaAngleUp />
          </i>
        </a>
      </div>
    </div>
  );
}
