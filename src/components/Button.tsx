import React, { FC } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";

export interface CusButtonProps {
  variant?: "outlined" | "contained" | "text";
  color?: "primary" | "secondary" | "white" | "black";
  style?: CSSProperties;
  square?: boolean;
  thinBorder?: boolean;
}

interface ColorProps {
  [state: string]: string;
}

const colors: ColorProps = {
  primary: "#03A3DF",
  secondary: "#777777",
  white: "#FFFFFF",
  black: "#000000",
};

const useStyles = makeStyles({
  buttonContainer: (props: any) => ({
    padding: props.isSquare ? "10" : "7px 70px",
    border: props.thinBorder ? "1px solid" : "2px solid",
    "&:hover": { border: props.thinBorder ? "1px solid" : "2px solid" },
    borderRadius: 0,
  }),
  buttonText: {
    fontSize: "18px",
    fontWeight: 500,
  },
});

const CusButton: FC<CusButtonProps> = ({
  variant,
  color = "primary",
  children,
  style,
  square,
  thinBorder,
}) => {
  const classes = useStyles({ isSquare: square, thinBorder: thinBorder });
  return (
    <Button
      className={classes.buttonContainer}
      style={{ color: colors[color], ...style }}
      variant={variant}
    >
      {/* <Typography variant="h5" align="center" component="span"> */}
      {children}
      {/* </Typography> */}
    </Button>
  );
};

CusButton.defaultProps = {
  variant: "outlined",
  // color: "primary",
  style: {},
  square: false,
  thinBorder: false,
};

export default CusButton;
