import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
  },
});

const Block = ({ children, style, withBackground, withOrnament }) => {
  const classes = useStyles();
  const ornamentStyles = withOrnament
    ? {
        backgroundImage: "url(/images/UNGBrand.png)",
        backgroundRepeat: "repeat-y",
        width: "100%",
        minHeight: 100,
      }
    : {};
  return (
    <Box
      style={{
        width: "100%",
        background: withBackground ? "#FAFAFA" : "",
        ...ornamentStyles,
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
