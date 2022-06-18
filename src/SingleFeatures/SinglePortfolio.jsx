import React from "react";
import { useEffect, useState } from "react";
import "../index.css";

export default function SinglePortfolio(props) {
  const { portfolioImg, capture, link, title } = props;
  const [varWidth, setVarWidth] = useState();
  useEffect(() => {
    let window = document.querySelector(".portfolio-thumb");
    console.log(window.clientWidth);
    setVarWidth(window.clientWidth);
  }, []);
  return (
    <div className="grid observer">
      <div className="col px-sm-2 mb-3 ">
        <div className="portfolio-wrapper">
          <div className="portfolio-thumb">
            <a href={link} alt="" target="_blank" rel="noopener noreferrer">
              {/* <img src={portfolioImg} alt={title} /> */}
              <div style={{ width: `${varWidth}`, height: "auto" }}>
                <img
                  src={capture}
                  alt={title}
                  style={{ width: "inherit", height: "inherit" }}
                ></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
