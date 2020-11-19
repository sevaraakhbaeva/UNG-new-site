import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Title from "./Title";
import Link from "./CusLink";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  paperStyle: {
    padding: "10px 20px",
  },
});

const SideMenu = ({ listOfMenu, activeId, title, url }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paperStyle}>
      <Title variant="h4">{title}</Title>
      {Object.entries(listOfMenu).map((item) => (
        <RouterLink style={{ textDecoration: "none" }} to={`${url}/${item[0]}`}>
          <Link>
            <Typography color={activeId === item[0] ? "primary" : "initial"}>
              {item[1]}
            </Typography>
          </Link>
        </RouterLink>
      ))}
    </Paper>
  );
};

export default SideMenu;
