import React, { FC } from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Title from "./Title";
import Link from "./CusLink";
import { Link as RouterLink } from "react-router-dom";

interface SideMenuProps {
  listOfMenu: { [index: number]: string };
  activeId: string;
  title: string;
  url: string;
}

const useStyles = makeStyles({
  paperStyle: {
    padding: "10px 20px",
  },
});

const SideMenu: FC<SideMenuProps> = ({ listOfMenu, activeId, title, url }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paperStyle}>
      <Title variant="h4">{title}</Title>
      {Object.entries(listOfMenu).map((item: any) => (
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
