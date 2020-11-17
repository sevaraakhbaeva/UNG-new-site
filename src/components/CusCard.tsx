import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconWithText from "./IconWithText";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    borderRadius: 0,
  },
});

const CusCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardMedia title="News item">
        <img alt="News" style={{ width: "100%" }} src="/images/news/img1.png" />
      </CardMedia>
      <CardContent style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Typography gutterBottom variant="h5">
          “O‘zbekneftgaz” AJ “Muborak” gazni qayta ishlash zavodida yirik
          investision loyiha amalga oshirildi
        </Typography>
        <IconWithText
          Icon={<ClockIcon />}
          text={"29-Avgust | 2020"}
          style={{ marginTop: "20px", color: "#999999" }}
        />
      </CardContent>
    </Card>
  );
};

export default CusCard;
