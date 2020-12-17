import React from "react";
import { Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as LeftArrow } from "../icons/LeftIcon.svg";
import { ReactComponent as RightArrow } from "../icons/RightIcon.svg";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  positionArrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 99,
  },
  iconStyle: {
    backgroundColor: "#FAFAFA",
    opacity: "30%",
    padding: "12px",
    "&:hover": {
      backgroundColor: "#FAFAFA",
      opacity: "50%",
    },
    [theme.breakpoints.down("md")]: {
      padding: 10,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 1,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  leftArrowStyle: {
    left: 25,
    [theme.breakpoints.down("md")]: {
      left: 15,
    },
    [theme.breakpoints.down("sm")]: {
      left: 8,
    },
    [theme.breakpoints.down("xs")]: {
      left: 4,
    },
  },
  rightArrowStyle: {
    right: 25,
    [theme.breakpoints.down("md")]: {
      right: 15,
    },
    [theme.breakpoints.down("sm")]: {
      right: 8,
    },
    [theme.breakpoints.down("sm")]: {
      right: 4,
    },
  },
}));

const Arrow = ({ direction, onClick, style }) => {
  const classes = useStyles();
  const isLeft = direction === "left";

  return (
    <Box
      className={clsx(
        classes.positionArrow,
        isLeft && classes.leftArrowStyle,
        !isLeft && classes.rightArrowStyle,
        style
      )}
    >
      <IconButton classes={{ root: classes.iconStyle }} onClick={onClick}>
        {isLeft ? <LeftArrow /> : <RightArrow />}
      </IconButton>
    </Box>
  );
};

Arrow.defaultProps = {
  style: {},
  withoutMargin: false,
  smallButton: false,
};

export default Arrow;
