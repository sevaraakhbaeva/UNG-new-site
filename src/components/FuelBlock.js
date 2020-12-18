import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as DieselFuelIcon } from "icons/neftBaza/dieselFuel.svg";
import { ReactComponent as DieselOilIcon } from "icons/neftBaza/dieselOil.svg";
import { ReactComponent as FuelIcon } from "icons/neftBaza/fuel.svg";
import { ReactComponent as FurnaceFuelIcon } from "icons/neftBaza/furnaceFuel.svg";
import { ReactComponent as IndustrialOilIcon } from "icons/neftBaza/industrailOil.svg";

const icons = {
  petrol: <FuelIcon />,
  oil: <DieselOilIcon />,
  diesel: <DieselFuelIcon />,
  furnace: <FurnaceFuelIcon />,
  industrial: <IndustrialOilIcon />,
};

const useStyles = makeStyles((theme) => ({
  paperFuelBlock: {
    backgroundImage: "url(/images/neftBaza/logo.png)",
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 80%",
    padding: "10px 5px",
  },
  blockWidth: {
    maxWidth: 210,
    [theme.breakpoints.up("lg")]: {
      maxWidth: 250,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 290,
    },
  },
}));

const FuelBlock = ({ productInfo }) => {
  const classes = useStyles();
  const Icon = icons[productInfo.iconName];
  return (
    <Box width={"100%"} className={classes.blockWidth} mr={1} mb={1}>
      <Paper elevation={2} square className={classes.paperFuelBlock}>
        <Box height={70} display={"flex"} alignItems={"center"}>
          <Box pl={1} display={"flex"} alignItems={"center"}>
            <Box component="span" pr={1}>
              {Icon}
            </Box>
            <Typography component="span">{productInfo.name}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default FuelBlock;
