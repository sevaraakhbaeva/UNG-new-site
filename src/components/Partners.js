import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import Slider from "react-slick";
import Arrow from "./Arrow";
import Title from "./Title";
import Block from "./Block";
import { breakpoints } from "constants/breakpoints";
import { makeStyles } from "@material-ui/styles";

var items = [
  {
    name: '"Gazprom" PJSC kompaniyasi',
    imageUrl: "/images/partners/img1.png",
  },
  {
    name: '"LUKOYL" YoAJ kompaniyasi',
    imageUrl: "/images/partners/img2.png",
  },
  {
    name: "O‘zbekiston Respublikasi Energetika vazirligi",
    imageUrl: "/images/partners/img3.png",
  },
  {
    name: '"Sasol" energiya kompaniyasi',
    imageUrl: "/images/partners/img4.png",
  },
  {
    name: "O‘zbekiston Respublikasi Energetika vazirligi",
    imageUrl: "/images/partners/img5.png",
  },
  {
    name: "O‘zbekiston Respublikasi Energetika vazirligi",
    imageUrl: "/images/partners/img6.png",
  },
];

const useStyle = makeStyles({
  imageContainer: {
    height: 180,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    minWidth: 280,
    alignItems: "center",
  },
});

const Partners = () => {
  const [numberOfSlides, setNumberOfSlides] = React.useState(null);

  const handleWindowChange = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= breakpoints.sm) setNumberOfSlides(1);
    else if (windowWidth <= breakpoints.md) setNumberOfSlides(2);
    else if (windowWidth <= breakpoints.lg) setNumberOfSlides(3);
    else if (windowWidth <= breakpoints.xl) setNumberOfSlides(4);
    else setNumberOfSlides(5);
  };

  React.useEffect(() => {
    handleWindowChange();
    window.addEventListener("resize", handleWindowChange);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: numberOfSlides,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <Arrow direction="right" withoutMargin />,
    prevArrow: <Arrow direction="left" withoutMargin />,
  };

  return (
    <Block withBackground>
      <Title>Bizning hamkorlar</Title>
      <Slider {...settings}>
        {items.map((item, i) => (
          <PartnerItem key={i} item={item} />
        ))}
      </Slider>
    </Block>
  );
};

function PartnerItem(props) {
  const classes = useStyle();
  return (
    <Box className={classes.imageContainer} mr={2}>
      <img alt={props.item.name} src={props.item.imageUrl} />

      <Typography
        style={{
          margin: "20px",
          fontSize: "16px",
          fontWeight: "bolder",
          textAlign: "center",
        }}
        variant="caption"
      >
        {props.item.name}
      </Typography>
    </Box>
  );
}

export default Partners;
