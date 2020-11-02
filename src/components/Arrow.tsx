import React, { FC } from "react";
import { Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as LeftArrow } from "../icons/LeftIcon.svg";
import { ReactComponent as RightArrow } from "../icons/RightIcon.svg";
import { CSSProperties } from "@material-ui/styles";

const useStyles = makeStyles({
  positionArrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 99,
  },
  iconStyle: {
    backgroundColor: "#FAFAFA",
    opacity: "30%",
    "&:hover": {
      backgroundColor: "#FAFAFA",
      opacity: "50%",
    },
  },
});
export interface ArrowProps {
  direction: "right" | "left";
  onClick?: any;
  style?: CSSProperties;
  withoutMargin?: boolean;
}

const Arrow: FC<ArrowProps> = ({
  direction,
  onClick,
  style,
  withoutMargin,
}) => {
  const classes = useStyles();
  const ArrowIcon = direction === "left" ? <LeftArrow /> : <RightArrow />;
  let arrowStyle: object;
  if (withoutMargin) {
    arrowStyle = direction === "left" ? { left: 0 } : { right: 0 };
  } else {
    arrowStyle = direction === "left" ? { left: "25px" } : { right: "25px" };
  }

  console.log(style);
  return (
    <Box className={classes.positionArrow} style={{ ...arrowStyle, ...style }}>
      <IconButton classes={{ root: classes.iconStyle }} onClick={onClick}>
        {ArrowIcon}
      </IconButton>
    </Box>
  );
};

Arrow.defaultProps = {
  style: {},
  withoutMargin: false,
};

export default Arrow;
