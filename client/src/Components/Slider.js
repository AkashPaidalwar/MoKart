import React from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import "./Slider.css";
import { sliderItems } from "../HomeData";
import { Link } from "react-router-dom";

export default function Slider() {
  const [slideIndex, setSlideIndex] = React.useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? 2 : slideIndex - 1);
    } else {
      setSlideIndex(slideIndex === 2 ? 0 : slideIndex + 1);
    }
  };

  return (
    <div className="sliderContainer">
      <div
        className="sliderArrowContainer leftArrow"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        className="slideWrapper"
        style={{
          transform: `translateX(${-slideIndex * 100}vw)`,
          animation: `translate 2s infinite`,
        }}
      >
        {sliderItems.map((item) => {
          return (
            <div className="slideContainer" key={item.id}>
              <div className="slideImageContainer">
                <img className="slideImage" src={item.img} alt="##" />
              </div>
              <div className="slideInfoContainer">
                <h1 className="slideInfoTitle">{item.title}</h1>
                <p className="slideInfoDescp">{item.desc}</p>
                <button className="slideInfoButton">
                  {" "}
                  <Link to={"/products"} className="link">
                    Shop Now
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="sliderArrowContainer rightArrow"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
}
