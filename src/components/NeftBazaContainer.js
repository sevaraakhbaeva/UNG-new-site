import React from "react";
import { Grid, Typography, Box, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import BlockLayout from "components/BlockLayout";
import FuelBlock from "components/FuelBlock";
import { oilBaseData, products } from "constants/neftBazaData";
import Arrow from "components/Arrow";
import Slider from "react-slick";
import ManCard from "components/ManCard";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CusCard from "./CusCard";

const useStyles = makeStyles((theme) => ({
  itemPos: {
    margin: "0 10px 10px 0",
  },
  imageContainer: {
    height: 300,
    overflow: "hidden",
  },
  titleStyle: {
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
      marginBottom: 25,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
    },
  },
  fuelBlockMargin: {
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
      marginBottom: 40,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 30,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
}));

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

const oilBaseNames = {
  uz: {
    1: '"Тахиатош нефть базаси" МЧЖ',
    2: '"Андижон нефть базаси" МЧЖ',
    3: '"Бухоро нефть базаси" МЧЖ',
    4: '"Жиззах нефть базаси" МЧЖ',
    5: '"Қарши нефть базаси" МЧЖ',
    6: '"Навоий нефть базаси" МЧЖ',
    7: '"Тўрақўрғон нефть базаси" МЧЖ',
    8: '"Мароқанд нефть базаси" МЧЖ',
    9: '"Термиз нефть базаси" МЧЖ',
    10: '"Гулистон нефть базаси" МЧЖ',
    11: '"Пахта нефть базаси" МЧЖ',
    12: '"Чинобод нефть базаси" МЧЖ',
    13: '"Кучлик нефть базаси" МЧЖ',
    14: '"Фарғона нефть базаси" МЧЖ',
    15: '"Урганч нефть базаси" МЧЖ',
  },
  ru: {
    1: 'ООО "Тахиаташская нефтебаза"',
    2: 'ООО "Андижанская нефтебаза"',
    3: 'ООО "Бухарская нефтебаза"',
    4: 'ООО "Жизакская нефтебаза"',
    5: 'ООО "Каршинская нефтебаза"',
    6: 'ООО "Навоийская нефтебаза"',
    7: 'ООО "Туракурганская нефтебаза"',
    8: 'ООО "Маркандская нефтебаза"',
    9: 'ООО "Термезская нефтебаза"',
    10: 'ООО "Гулистанская нефтебаза"',
    11: 'ООО "Пахтинская нефтебаза"',
    12: 'ООО "Чинабадская нефтебаза"',
    13: 'ООО "Кучлукская нефтебаза"',
    14: 'ООО "Ферганская нефтебаза"',
    15: 'ООО "Ургенчская нефтебаза"',
  },
  en: {
    1: '"Taxiatash oil base" LLC',
    2: '"Andijan oil base" LLC',
    3: '"Bukhara oil base" LLC',
    4: '"Jizzakh oil base" LLC',
    5: '"Karshi oil base" LLC',
    6: '"Navoi oil base" LLC',
    7: '"Turakurgan oil base" LLC',
    8: '"Marokand oil base" LLC',
    9: '"Termez oil base" LLC',
    10: '"Gulistan oil base" LLC',
    11: '"Paxta oil base" LLC',
    12: '"Chinobod oil base" LLC',
    13: '"Kuchlik oil base" LLC',
    14: '"Fergana oil base" LLC',
    15: '"Urgench oil base" LLC',
  },
};

const NeftBazaContainer = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { i18n } = useTranslation();
  const baseName = oilBaseNames[i18n.language][id];

  const theme = useTheme();
  const isSmaller = useMediaQuery(theme.breakpoints.down("xs"));

  const neftBazaItemInfo = oilBaseData[i18n.language][baseName];
  return (
    <BlockLayout
      title={baseName}
      breadcrumbNames={[
        "Bosh sahifa",
        "Kompaniya haqida",
        "Tizim tarkibiga kiruvchi jamiyatlar",
        baseName,
      ]}
    >
      <Typography className={classes.titleStyle} variant="h4">
        Jamiyat tomonidan realizasiya qilinadigan mahsulot turlari:
      </Typography>
      <Grid className={classes.fuelBlockMargin} container spacing={6}>
        <Grid container item xs={12}>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            flexDirection={"row"}
            justifyContent={isSmaller ? "center" : "flex-start"}
          >
            {products[i18n.language][baseName].map((productInfo) => (
              <FuelBlock productInfo={productInfo} />
            ))}
          </Box>
        </Grid>
        {/*<Grid item xs={12} md={6}>
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
        </Grid>*/}
      </Grid>
      <Typography className={classes.titleStyle} align="center" variant="h4">
        Taxiatosh neft baza xodimlari
      </Typography>
      <Grid container spacing={3}>
        {neftBazaItemInfo.map((itemInfo) => (
          <Grid item container justify={"center"} xs={12} sm={6} md={4} lg={3}>
            <ManCard tableRows={tableRows} workerData={itemInfo} />
          </Grid>
        ))}
      </Grid>
    </BlockLayout>
  );
};

export default NeftBazaContainer;
