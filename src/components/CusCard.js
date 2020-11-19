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
  imgStyle: {
    width: "100%",
  },
  cardContentStyle: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

const CusCard = ({ newsInfo }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardMedia title="News item">
        <img
          alt="News"
          className={classes.imgStyle}
          src={`/images/news/${newsInfo.picPath}`}
        />
      </CardMedia>
      <CardContent className={classes.cardContentStyle}>
        <Typography gutterBottom variant="h5">
          {newsInfo.title}
        </Typography>
        <IconWithText
          Icon={<ClockIcon />}
          text={newsInfo.date}
          style={{ marginTop: "10px", color: "#999999" }}
        />
      </CardContent>
    </Card>
  );
};

export default CusCard;
