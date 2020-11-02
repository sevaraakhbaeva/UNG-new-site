import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as FinanceIcon } from "../icons/DT_Moliya.svg";
import { ReactComponent as LogisticsIcon } from "../icons/DT_Logistika.svg";
import { ReactComponent as CapitalIcon } from "../icons/DT_Kapital.svg";
import { ReactComponent as WorkerIcon } from "../icons/DT_Xodimlar.svg";
import { ReactComponent as SettingIcon } from "../icons/DT_Setting.svg";
import { ReactComponent as ResourceIcon } from "../icons/DT_Zaxiralar.svg";

import IconInCircle from "./IconInCircle";
import Block from "./Block";
import Title from "./Title";

const useStyles = makeStyles({
  iconContainerStyle: {},
  titleIcon: {
    fontWeight: "bolder",
    margin: "8px",
    width: "70%",
  },
});

const DigitalTransformation = () => {
  const classes = useStyles();
  return (
    <Block withBackground>
      <Title>Raqamli transformatsiya</Title>

      <Grid container spacing={2}>
        <Grid
          className={classes.iconContainerStyle}
          item
          xs={12}
          sm={6}
          lg={4}
          alignItems="center"
          container
          direction="column"
        >
          <IconInCircle Icon={<FinanceIcon />} />
          <Typography className={classes.titleIcon} align="center" variant="h6">
            Moliya
          </Typography>
        </Grid>
        <Grid
          className={classes.iconContainerStyle}
          item
          xs={12}
          sm={6}
          lg={4}
          alignItems="center"
          container
          direction="column"
        >
          <IconInCircle Icon={<LogisticsIcon />} />
          <Typography className={classes.titleIcon} align="center" variant="h6">
            Ta'minot ulanmasi boshqaruvi
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.iconContainerStyle}
          xs={12}
          sm={6}
          lg={4}
          alignItems="center"
          container
          direction="column"
        >
          <IconInCircle Icon={<WorkerIcon />} />
          <Typography className={classes.titleIcon} align="center" variant="h6">
            Xodimlarni boshqarish
          </Typography>
        </Grid>
        <Grid
          className={classes.iconContainerStyle}
          item
          xs={12}
          sm={6}
          lg={4}
          alignItems="center"
          container
          direction="column"
        >
          <IconInCircle Icon={<CapitalIcon />} />
          <Typography className={classes.titleIcon} align="center" variant="h6">
            Kapital qurilish va investitsiya loyihalari
          </Typography>
        </Grid>
        <Grid
          className={classes.iconContainerStyle}
          item
          xs={12}
          sm={6}
          lg={4}
          alignItems="center"
          container
          direction="column"
        >
          <IconInCircle Icon={<SettingIcon />} />
          <Typography className={classes.titleIcon} align="center" variant="h6">
            Uskunalarga texnik xizmat ko'rsatish va ta'mirlash
          </Typography>
        </Grid>
        <Grid
          className={classes.iconContainerStyle}
          item
          xs={12}
          sm={6}
          lg={4}
          alignItems="center"
          container
          direction="column"
        >
          <IconInCircle Icon={<ResourceIcon />} />
          <Typography className={classes.titleIcon} align="center" variant="h6">
            Zaxiralarni sotib olish va boshqarish
          </Typography>
        </Grid>
      </Grid>
    </Block>
  );
};

export default DigitalTransformation;
