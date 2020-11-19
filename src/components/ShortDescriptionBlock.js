import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";
import IconWithText from "./IconWithText";
import { makeStyles } from "@material-ui/styles";

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
  const active = objectInfo.status === "open";
  const classes = useStyles({ active: active });
  return (
    <Paper className={classes.paperStyle}>
      <Typography variant="h5">{objectInfo.name}</Typography>
      <Typography>{objectInfo.description}</Typography>
      <Typography
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
      ))}
      <IconWithText
        Icon={<ClockIcon />}
        text={"Tugash muddati: " + objectInfo.date}
        style={{ color: "#999999" }}
        textStyle={{ fontSize: 14, fontWeight: "normal" }}
      />
    </Paper>
  );
};

export default ShortDescriptionBlock;
