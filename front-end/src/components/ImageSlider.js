import * as React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
import { SlideData } from "./SlideData";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function ImageSlider({artist}) {
  const [current, setCurrent] = React.useState(0);
  const length = SlideData.length;

  const useStyle = makeStyles(() => ({
    card: {
      // backgroundColor,
      marginTop: 60,
      height: "550px",
      width: "100%",
      boxShadow: "20px 20px 20px skyBlue",
      display: "flex",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "auto",
    },
    rightArrow: {
      position: "absolute",
      top: "50%",
      right: "32px",
      zIndex: 10,
      cursor: "pointer",
      userSelect: "none",
      fontSize: "3rem",
      color: "darkBlue",
    },
    leftArrow: {
      position: "absolute",
      top: "50%",
      left: "32px",
      zIndex: 10,
      cursor: "pointer",
      userSelect: "none",
      fontSize: "3rem",
      color: "darkBlue",
    },
    slide: {
      opacity: 0,
      transitionDuration: "1s ease",
    },
    slideActive: {
      opacity: 1,
      transitionDuration: "1s",
      transform: "scale(2)",
    },
  }));

  //Calling useStyle that contains classes
  const classes = useStyle();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (SlideData.length < 1) {
    return null;
  }
  console.log(current);
  const result = artist.service_images.map((each, index) => {
    return (
      <div className={index === current ? "slideActive" : "slide"} key={index}>
        {index === current && (
          <img src={each.image} alt={each.title} className={classes.image} />
        )}
      </div>
    );
  });

  return (
    <div>
      <ArrowLeftIcon className={classes.leftArrow} onClick={prevSlide} />
      <ArrowRightIcon className={classes.rightArrow} onClick={nextSlide} />
      <Card className={classes.card}>{result}</Card>
    </div>
  );
}
