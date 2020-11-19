import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import Slider from "react-slick";
import Arrow from "./Arrow";
import Title from "./Title";
import Block from "./Block";

const Partners = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ position: "relative" }}
    >
      <Box style={{ height: "100px", display: "flex", alignItems: "flex-end" }}>
        <img alt={props.item.name} src={props.item.imageUrl} />
      </Box>
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
    </Grid>
  );
}

export default Partners;
