import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  listStyles: {
    fontFamily: "LabGrotesque, Calibri, sans-serif",
    fontSize: 16,
    listStyle: "none",
    "& > li": {
      lineHeight: "160%",
      fontSize: 16,
      fontWeight: "normal",
      margin: "10px 0",
    },
    "& > li::before": {
      content: `"\\2022"`,
      color: "#03A3DF",
      fontWeight: "bold",
      display: "inline-block",
      width: "1em",
      marginRight: "0.5em",
    },
    "& a": {
      color: "#03A3DF",
      textDecoration: "none",
    },
  },
});

const ListWithBulletPoint = ({ htmlString }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.listStyles}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export default ListWithBulletPoint;
