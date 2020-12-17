import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";
import IconWithText from "./IconWithText";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";
import HtmlConverter from "components/HtmlConverter";
import { formatDateAndTimeToDate } from "utils/formatDate";

const useStyles = makeStyles({
  paperStyle: (props) => ({
    padding: "10px 20px",
    borderLeft: props.active ? "8px solid #00DA5B" : "8px solid #E0E0E0",
  }),
  boldTypography: {
    fontWeight: "bolder",
  },
});

const ShortDescriptionBlock = ({ objectInfo }) => {
  const classes = useStyles({ active: objectInfo.status });
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <Paper className={classes.paperStyle}>
      <Typography variant="h5">
        <HtmlConverter htmlString={objectInfo[`title_${currentLanguage}`]} />
      </Typography>
      <Typography>
        <HtmlConverter
          htmlString={objectInfo[`asosiy_talablar_${currentLanguage}`]}
        />
      </Typography>
      {/* <Typography
        component="span"
        className={classes.boldTypography}
        color="secondary"
      >
        Категории:{" "}
      </Typography>
      {objectInfo.categories.map((cat, i) => (
        <Typography color="secondary" component="span">
          {cat} {objectInfo.categories.length - 1 !== i && " | "}
        </Typography>
      ))} */}
      <IconWithText
        Icon={<ClockIcon />}
        text={
          "Tugash muddati: " +
          formatDateAndTimeToDate(objectInfo["date_published"])
        }
        style={{ color: "#999999" }}
        textStyle={{ fontSize: 14, fontWeight: "normal" }}
      />
    </Paper>
  );
};

export default ShortDescriptionBlock;
