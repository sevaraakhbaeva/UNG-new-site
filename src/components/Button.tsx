import React, { FC } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";

export interface CusButtonProps {
  variant?: "outlined" | "contained" | "text";
  color?: "primary" | "secondary";
  style?: CSSProperties;
}

const useStyles = makeStyles({
  buttonContainer: {
    padding: "7px 70px",
    border: "2px solid",
    "&:hover": { border: "2px solid" },
  },
  buttonText: {
    fontSize: "18px",
    fontWeight: 500,
  },
});

const CusButton: FC<CusButtonProps> = ({ variant, color, children, style }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.buttonContainer}
      style={{ ...style }}
      color={color}
      variant={variant}
    >
      <Typography variant="h5" align="center" component="span">
        {children}
      </Typography>
    </Button>
  );
};

CusButton.defaultProps = {
  variant: "outlined",
  color: "primary",
  style: {},
};

export default CusButton;
