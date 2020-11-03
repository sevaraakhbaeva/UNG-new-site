import { Typography, Grid } from "@material-ui/core";
import React, { FC, ReactNode, CSSProperties } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

export interface IconWithTextProps {
  Icon: ReactNode;
  text?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  reverse?: boolean;
  withFunction?: boolean;
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
  textStyle,
  withFunction,
}) => {
  const classes = useStyles(reverse);
  const iconComponent = withFunction ? (
    <IconButton>{Icon}</IconButton>
  ) : (
    <>{Icon}</>
  );

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
      <Grid item>{iconComponent}</Grid>
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
  withFunction: false,
};

export default IconWithText;
