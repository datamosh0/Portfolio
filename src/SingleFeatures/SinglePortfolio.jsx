import React from "react";
import { useEffect, useState } from "react";
import "../index.css";

export default function SinglePortfolio(props) {
  const { portfolioImg, capture, link, title } = props;
  const [varWidth, setVarWidth] = useState();
  useEffect(() => {
    let window = document.querySelector(".portfolio-thumb");
    setVarWidth(window.clientWidth);
  }, []);
  return (
    <div className="grid observer">
      <div className=" ">
        <div className="portfolio-wrapper">
          <div className="portfolio-thumb ">
            <a href={link} alt="" target="_blank" rel="noopener noreferrer">
              <img
                src={capture}
                alt={title}
                style={{ width: "100%", height: "100$" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
