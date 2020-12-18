import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "30px 60px",
    [theme.breakpoints.up("xl")]: {
      padding: "50px 90px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "40px 70px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 30px",
    },
  },
  ornamentStyles: {
    backgroundImage: "url(/images/UNGBrand.png)",
    backgroundRepeat: "repeat-y",
    width: "100%",
    minHeight: 100,
    "@media (max-width:1280px)": {
      backgroundSize: 33,
    },
    "@media (max-width:960px)": {
      backgroundSize: 24,
    },
    "@media (max-width:600px)": {
      backgroundSize: 22,
    },
  },
  backgroundColor: {
    backgroundColor: "#FAFAFA",
  },
}));

const Block = ({ children, style, withBackground, withOrnament }) => {
  const classes = useStyles();
  return (
    <Box
      className={clsx(
        withOrnament && classes.ornamentStyles,
        withBackground && classes.backgroundColor
      )}
    >
      <Box className={classes.container} style={{ ...style }}>
        {children}
      </Box>
    </Box>
  );
};

Block.defaultProps = {
  style: {},
  withBackground: false,
  withOrnament: false,
};

export default Block;
