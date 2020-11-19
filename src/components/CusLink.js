import React from "react";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  linkStyle: {
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "#03A3DF",
    },
  },
});

const CusLink = ({ children }) => {
  const classes = useStyles();

  return (
    <Link underline="none" className={classes.linkStyle}>
      {children}
    </Link>
  );
};

export default CusLink;
