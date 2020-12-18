import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Block from "./Block";
import { ReactComponent as ProfitIcon } from "../icons/rating1.svg";
import { ReactComponent as WorkerIcon } from "../icons/rating2.svg";
import { ReactComponent as GazIcon } from "../icons/rating3.svg";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  captionColor: {
    color: "#999999",
  },
  marginDate: {
    marginTop: 30,
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  },
  numberStyle: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 44,
    [theme.breakpoints.down("md")]: {
      marginTop: 5,
      fontSize: 38,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      fontSize: 32,
    },
  },
  marginCaption: {
    [theme.breakpoints.down("md")]: {
      marginTop: 5,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
}));

const Caption = ({ text, number }) => {
  const classes = useStyles();
  const [focus, setFocus] = React.useState(false);
  const handleVisibility = (isVisible) => {
    if (isVisible) setFocus(true);
  };
  return (
    <>
      <Typography align="center" className={classes.marginCaption} variant="h4">
        {text}
      </Typography>
      <CountUp start={focus ? 0 : null} duration={2} end={number}>
        {({ countUpRef }) => (
          <VisibilitySensor onChange={handleVisibility} delayedCall>
            <Typography align="center" className={classes.numberStyle}>
              <span ref={countUpRef} />
            </Typography>
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
};

const ratingData = [
  {
    Icon: <ProfitIcon />,
    text: "Share of Uzbekneftegaz in GDP of Uzbekistan",
    number: 10946,
  },
  {
    Icon: <WorkerIcon />,
    text: "Total staff",
    number: 20043,
  },
  {
    Icon: <GazIcon />,
    text: "Annual gas production",
    number: 498095,
  },
];

const Ratings = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Block withBackground>
      <Grid container spacing={2} alignContent="center">
        {ratingData.map((item, i) => (
          <Grid
            key={i}
            item
            md={4}
            xs={12}
            container
            direction="column"
            alignItems="center"
          >
            {item.Icon}
            <Caption text={t(item.text)} number={item.number} />
          </Grid>
        ))}
      </Grid>
      <Grid className={classes.marginDate} container justify="flex-end">
        <Grid item>
          <Typography variant="caption" className={classes.captionColor}>
            {t("ratingDate", {
              day: "01",
              month: t("months.December"),
              year: "2020",
            })}
          </Typography>
        </Grid>
      </Grid>
    </Block>
  );
};

export default Ratings;
