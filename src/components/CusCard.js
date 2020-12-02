import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconWithText from "./IconWithText";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";
import { useTranslation } from "react-i18next";
import Link from "./CusLink";

import { formatDateAndTimeToDate } from "utils/formatDate";

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
  const { i18n } = useTranslation();
  const classes = useStyles();

  const currentLanguage = i18n.language;

  return (
    <Card className={classes.root} elevation={3}>
      <CardMedia title="News item">
        <Link href={`/press/news/${newsInfo["slug"]}`}>
          <img
            alt="News"
            className={classes.imgStyle}
            src={newsInfo["image"]}
          />
        </Link>
      </CardMedia>
      <CardContent className={classes.cardContentStyle}>
        <Link href={`/press/news/${newsInfo["slug"]}`}>
          <Typography gutterBottom variant="h5">
            {newsInfo[`news_title_${currentLanguage}`]}
          </Typography>
        </Link>
        <IconWithText
          Icon={<ClockIcon />}
          text={formatDateAndTimeToDate(newsInfo["date_updated"])}
          style={{ marginTop: "10px", color: "#999999" }}
        />
      </CardContent>
    </Card>
  );
};

export default CusCard;
