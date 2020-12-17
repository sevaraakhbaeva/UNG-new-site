import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import Slider from "react-slick";
import Arrow from "components/Arrow";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  sliderTitle: {
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  sliderDescription: {
    color: "white",
  },
  imageContainer: {
    height: "100vh",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
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
  imageWidth: {
    width: "100%",
  },
  buttonMargin: {
    marginTop: "75px",
    [theme.breakpoints.down("md")]: {
      marginTop: 50,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 25,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 15,
    },
  },
}));

const CusSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
  };

  return (
    <>
      <Slider {...settings}>
        {data.results.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Slider>
    </>
  );
};

function CarouselItem(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <Box className={classes.sliderContainer}>
      <Box className={classes.imageContainer}>
        <img
          alt="Slider"
          className={classes.imageWidth}
          src={props.item.image}
        />
      </Box>
      <Box className={classes.sliderCaption}>
        <Typography variant="h3" className={classes.sliderTitle}>
          {props.item[`news_title_${i18n.language}`]}
        </Typography>
        {/* <Typography variant="h4" className={classes.sliderDescription}>
          {props.item.description}
        </Typography> */}
        <Button
          component="a"
          href={`/press/page/${props.item.slug}`}
          color="white"
          className={classes.buttonMargin}
        >
          {t("More")}
        </Button>
      </Box>
    </Box>
  );
}

export default CusSlider;
