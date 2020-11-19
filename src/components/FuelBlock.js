import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as DieselFuelIcon } from "../icons/neftBaza/dieselFuel.svg";

const useStyles = makeStyles({
  paperFuelBlock: {
    padding: "12px 0px 12px 10px",
    backgroundImage: "url(/images/neftBaza/logo.png)",
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 80%",
    width: "100%",
  },
  containerGrid: {
    display: "flex",
    alignItems: "center",
  },
  iconMargin: {
    marginRight: 8,
  },
});

const FuelBlock = () => {
  const classes = useStyles();
  return (
    <Paper elevation={2} square className={classes.paperFuelBlock}>
      <Box className={classes.containerGrid}>
        <Box component="span" className={classes.iconMargin}>
          <DieselFuelIcon />
        </Box>
        <Typography component="span">Benzin AI-80</Typography>
      </Box>
    </Paper>
  );
};

export default FuelBlock;
