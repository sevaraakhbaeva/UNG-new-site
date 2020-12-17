import React from "react";
import { Divider, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dividerStyle: {
    background: "#03A3DF",
    width: "60px",
    height: "5px",
    borderRadius: "50px",
  },
  titlePadding: {
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
      marginBottom: 20,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
}));

const Title = ({ children, textStyle, variant }) => {
  const classes = useStyles();
  return (
    <Box className={classes.titlePadding}>
      <Typography style={{ ...textStyle }} variant={variant}>
        {children}
      </Typography>
      <Divider classes={{ root: classes.dividerStyle }} />
    </Box>
  );
};
Title.defaultProps = {
  textStyle: {},
  variant: "h3",
};
export default Title;
