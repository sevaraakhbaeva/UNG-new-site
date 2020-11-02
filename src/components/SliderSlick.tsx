import React, { FC } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { default as Button } from "./Button";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  sliderTitle: {
    color: "black",
    fontSize: "30px",
    fontWeight: "bold",
  },
  sliderDescription: {
    color: "white",
    fontSize: "22px",
    marginTop: "50px",
  },

  //   sliderContainer: {
  //     position: "relative",
  //   },
  //   sliderCaption: {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     textAlign: "center",
  //     width: "60%",
  //     transform: "translate(-50%, -50%)",
  //   },
}));

const SliderSlick = () => {
  var items = [
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2>Custom Slides</h2>
      <Slider {...settings}>
        <CarouselItem index={1} item={items[0]} />
        <CarouselItem index={2} item={items[1]} />
      </Slider>
    </div>
  );
};

function CarouselItem(props: any) {
  const classes = useStyles();

  return (
    <Box className="sliderContainer">
      <Box>
        <img style={{ width: "100%" }} src={props.item.imageUrl} />
      </Box>
      <Box>
        <Typography className={classes.sliderTitle}>
          {props.item.name}
        </Typography>
        <Typography className={classes.sliderDescription}>
          {props.item.description}
        </Typography>
        <Button color="secondary" style={{ marginTop: "75px" }}>
          {"Batafsil"}
        </Button>
      </Box>
    </Box>
  );
}

export default SliderSlick;
