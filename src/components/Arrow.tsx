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
  iconStyle: (props: any) => ({
    backgroundColor: "#FAFAFA",
    opacity: "30%",
    padding: props.smallButton ? "6px" : "12px",
    "&:hover": {
      backgroundColor: "#FAFAFA",
      opacity: "50%",
    },
  }),
});
export interface ArrowProps {
  direction: "right" | "left";
  onClick?: any;
  style?: CSSProperties;
  withoutMargin?: boolean;
  smallButton?: boolean;
}

const Arrow: FC<ArrowProps> = ({
  direction,
  onClick,
  style,
  withoutMargin,
  smallButton,
}) => {
  const classes = useStyles({ smallButton: smallButton });
  const ArrowIcon = direction === "left" ? <LeftArrow /> : <RightArrow />;
  let arrowStyle: object;
  if (withoutMargin) {
    arrowStyle = direction === "left" ? { left: 4 } : { right: 4 };
  } else {
    arrowStyle = direction === "left" ? { left: "25px" } : { right: "25px" };
  }

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
  smallButton: false,
};

export default Arrow;
