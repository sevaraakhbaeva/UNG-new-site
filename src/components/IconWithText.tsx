import { Typography, Grid } from "@material-ui/core";
import React, { FC, ReactNode, CSSProperties } from "react";
import { makeStyles } from "@material-ui/core/styles";

export interface IconWithTextProps {
  Icon: ReactNode;
  text?: string;
  style?: CSSProperties;
  reverse?: boolean;
}

const useStyles = makeStyles((theme) => ({
  textStyle: (reverse) => ({
    marginLeft: reverse ? "0px" : "5px",
    marginRight: reverse ? "5px" : "0px",
  }),
}));

const IconWithText: FC<IconWithTextProps> = ({
  Icon,
  text,
  style,
  reverse,
}) => {
  const classes = useStyles(reverse);

  return (
    // <Box
    //   className={classes.blockStyle}
    //
    // >
    //   {Icon}
    //   <Typography className={classes.textStyle}>{text}</Typography>
    // </Box>
    <Grid
      container
      direction={reverse ? "row-reverse" : "row"}
      alignItems="center"
      style={{
        ...style,
      }}
    >
      <Grid item>{Icon}</Grid>
      <Grid item>
        <Typography className={classes.textStyle}>{text}</Typography>
      </Grid>
    </Grid>
  );
};

IconWithText.defaultProps = {
  text: "",
  style: {},
  reverse: false,
};

export default IconWithText;
