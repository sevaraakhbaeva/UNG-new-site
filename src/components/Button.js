import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const colors = {
  primary: "#03A3DF",
  secondary: "#777777",
  white: "#FFFFFF",
  black: "#191919",
};

const useStyles = makeStyles((theme) => ({
  buttonContainer: (props) => ({
    padding: "10px 60px",
    border: props.thinBorder ? "1px solid" : "2px solid",
    "&:hover": { border: props.thinBorder ? "1px solid" : "2px solid" },
    borderRadius: 0,
  }),
  buttonText: {
    fontWeight: 500,
    margin: 0,
  },
}));

const CusButton = (props) => {
  const { color, children, style, thinBorder, className, ...rest } = props;
  const classes = useStyles({ thinBorder: thinBorder });
  return (
    <Button
      className={clsx(classes.buttonContainer, className)}
      style={{ color: colors[color], ...style }}
      {...rest}
    >
      <Typography className={classes.buttonText}>{children}</Typography>
    </Button>
  );
};

CusButton.defaultProps = {
  variant: "outlined",
  color: "primary",
  style: {},
  thinBorder: false,
};

export default CusButton;
