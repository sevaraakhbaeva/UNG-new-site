import React from "react";
import Block from "./Block";
import { Grid, Typography, Box } from "@material-ui/core";
import Title from "./Title";
import { default as Button } from "./Button";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  buttonMargin: {
    marginTop: 40,
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  textMargin: {
    marginTop: 40,
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  backgroundImage: {
    backgroundImage: 'url("/images/main_history.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    height: 450,
    [theme.breakpoints.up("lg")]: {
      height: 580,
    },
    [theme.breakpoints.up("xl")]: {
      height: 700,
    },
  },
}));

const Parallax = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.backgroundImage}>
      <Block>
        <Grid style={{ height: "100%" }} container>
          <Grid xs={12} md={6} item>
            <Title>{t("About us")}</Title>
            <Typography className={classes.textMargin}>
              {t("briefHistory")}
            </Typography>
            <Button href="/about/history" className={classes.buttonMargin}>
              {t("More information")}
            </Button>
          </Grid>
        </Grid>
      </Block>
    </Box>
  );
};

export default Parallax;
