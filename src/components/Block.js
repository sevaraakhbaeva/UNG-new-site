import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 60px",
    [theme.breakpoints.down("md")]: {
      padding: "15px 40px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 30px",
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
}));

const Block = ({ children, style, withBackground, withOrnament }) => {
  const classes = useStyles();
  return (
    <Box
      className={withOrnament ? classes.ornamentStyles : {}}
      style={{
        width: "100%",
        backgroundColor: withBackground ? "#FAFAFA" : "",
      }}
    >
      <Container className={classes.container} style={{ ...style }}>
        {children}
      </Container>
    </Box>
  );
};

Block.defaultProps = {
  style: {},
  withBackground: false,
  withOrnament: false,
};

export default Block;
