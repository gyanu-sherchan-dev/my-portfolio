import React, { useEffect } from "react";
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  // mobilePortfolio,
  // designPortfolio,
  // contentPortfolio,
} from "../../data";

const Portfolio = ({ menuOpen }) => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    // {
    //   id: "mobile",
    //   title: "Mobile App",
    // },
    // {
    //   id: "designed",
    //   title: "Designed",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;

      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className={"portfolio " + (menuOpen && "active")} id="portfolio">
      <h1 className="mb-5">Projects</h1>
      <ul>
        {list.map((item, id) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((item, id) => {
          console.log(item.link);
          return (
            <div className="itemAndLink">
              <div className="item">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>

                <div className="link">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-link"></i>
                  </a>
                  <a
                    href={item.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-square-github"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
