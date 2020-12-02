import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  listStyles: {
    fontFamily: "LabGrotesque, Calibri, sans-serif",
    fontSize: 16,
    listStyle: "none",
    lineHeight: "160%",
    "& img": {
      maxWidth: "100%",
    },
    "& > li": {
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

const HtmlConverter = ({ htmlString }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.listStyles}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export default HtmlConverter;
