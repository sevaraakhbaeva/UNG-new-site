import React from "react";
import { Typography } from "@material-ui/core";
import { Trans } from "react-i18next";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    marginTop: 30,
    fontSize: 14,
    [theme.breakpoints.down("md")]: {
      marginTop: 25,
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
    },
  },
}));

const LastChangesText = ({ children, styles }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.textStyle}
      style={{ ...styles }}
      align="right"
      color="secondary"
    >
      <Trans>lastChanges</Trans>: {children}
    </Typography>
  );
};

LastChangesText.defaultProps = {
  styles: {},
};

export default LastChangesText;
