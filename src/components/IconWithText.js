import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textStyle: (reverse) => ({
    marginLeft: reverse ? "0px" : "5px",
    marginRight: reverse ? "5px" : "0px",
  }),
}));

const IconWithText = ({ Icon, text, style, reverse, textStyle }) => {
  const classes = useStyles(reverse);

  return (
    <Grid
      container
      item
      direction={reverse ? "row-reverse" : "row"}
      alignItems="center"
      style={{
        ...style,
      }}
    >
      <Grid item>{Icon}</Grid>
      <Grid item>
        <Typography style={{ ...textStyle }} className={classes.textStyle}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

IconWithText.defaultProps = {
  text: "",
  style: {},
  reverse: false,
  textStyle: {},
};

export default IconWithText;
