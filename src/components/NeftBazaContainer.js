import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import BlockLayout from "./BlockLayout";
import FuelBlock from "./FuelBlock";
import { neftBazaData } from "../constants/neftBazaData";
import Arrow from "./Arrow";
import Slider from "react-slick";
import ManCard from "./ManCard";

const useStyles = makeStyles({
  itemPos: {
    margin: "0 10px 10px 0",
  },
  imageContainer: {
    height: 300,
    overflow: "hidden",
  },
  titleStyle: {
    marginBottom: 30,
  },
});

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow: <Arrow smallButton direction="right" withoutMargin />,
  prevArrow: <Arrow smallButton direction="left" withoutMargin />,
};

const tableRows = {
  name: "Имя",
  position: "Позиция",
  phoneNumber: "Номер телефона",
  freeHours: "Дни приема",
  address: "Юридический адрес общества",
  email: "Адрес электронной почты",
  trustNumber: "Номер «горячей линии»",
};

const NeftBazaContainer = () => {
  const classes = useStyles();
  const neftBazaItemInfo = neftBazaData["Taxiatosh neft baza"];
  return (
    <BlockLayout
      title="Taxiatosh neft baza"
      breadcrumbNames={[
        "Bosh sahifa",
        "Kompaniya haqida",
        "Tizim tarkibiga kiruvchi jamiyatlar",
        "Taxiatosh neft baza",
      ]}
    >
      <Typography className={classes.titleStyle} variant="h4">
        Jamiyat tomonidan realizasiya qilinadigan mahsulot turlari:
      </Typography>
      <Grid style={{ marginBottom: 75 }} container spacing={6}>
        <Grid item xs={12} md={6} alignItems="center" container spacing={3}>
          {neftBazaItemInfo["products"].map((item) => (
            <Grid item xs={6} md={4}>
              <FuelBlock />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Slider {...settings}>
            {neftBazaItemInfo["locationImages"].map((imageUrl) => (
              <Box className={classes.imageContainer}>
                <img
                  alt="Slider"
                  style={{ width: "100%" }}
                  src={`/images/neftBaza/${imageUrl}`}
                />
              </Box>
            ))}
          </Slider>
        </Grid>
      </Grid>
      <Typography className={classes.titleStyle} align="center" variant="h4">
        Taxiatosh neft baza xodimlari
      </Typography>
      <Grid container spacing={3}>
        {neftBazaItemInfo.workerInfo.map((itemInfo) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ManCard
              tableRows={tableRows}
              workerData={itemInfo}
              picFolderUrl="/neftBaza"
            />
          </Grid>
        ))}
      </Grid>
    </BlockLayout>
  );
};

export default NeftBazaContainer;
