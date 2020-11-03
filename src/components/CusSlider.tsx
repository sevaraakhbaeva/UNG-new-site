import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import Slider from "react-slick";
import Arrow from "./Arrow";

const useStyles = makeStyles((theme) => ({
  sliderTitle: {
    color: "white",
  },
  sliderDescription: {
    color: "white",
  },
  imageContainer: {
    height: "100vh",
    minHeight: 500,
    overflow: "hidden",
  },
  sliderContainer: {
    position: "relative",
  },
  sliderCaption: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
}));

const CusSlider = () => {
  let items = [
    {
      name: "“O‘zbekneftgaz” AJ yoshlariga bayram tabrigi",
      description:
        "“O‘zbekneftgaz” AJ Boshqaruvi raisi Mehriddin Abdullaevning yurtimiz mustaqilligining 29 yilligi munosabati bilan tizimdagi xodimlarga bayram tabrigi",
      imageUrl: "/images/slider/img1.png",
    },
    {
      name: "“O‘zbekneftgaz” AJ yoshlariga bayram tabrigi",
      description:
        "“O‘zbekneftgaz” AJ Boshqaruvi raisi Mehriddin Abdullaevning yurtimiz mustaqilligining 29 yilligi munosabati bilan tizimdagi xodimlarga bayram tabrigi",
      imageUrl: "/images/slider/img2.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <Arrow direction="right" style={{ right: 25 }} />,
    prevArrow: <Arrow direction="left" style={{ left: 25 }} />,
  };

  return (
    <>
      <Slider {...settings}>
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Slider>
    </>
  );
};

function CarouselItem(props: any) {
  const classes = useStyles();

  return (
    <Box className={classes.sliderContainer}>
      <Box className={classes.imageContainer}>
        <img alt="Slider" style={{ width: "100%" }} src={props.item.imageUrl} />
      </Box>
      <Box className={classes.sliderCaption}>
        <Typography variant="h3" className={classes.sliderTitle}>
          {props.item.name}
        </Typography>
        <Typography variant="h4" className={classes.sliderDescription}>
          {props.item.description}
        </Typography>
        <Button color="white" style={{ marginTop: "75px" }}>
          {"Batafsil"}
        </Button>
      </Box>
    </Box>
  );
}

export default CusSlider;
