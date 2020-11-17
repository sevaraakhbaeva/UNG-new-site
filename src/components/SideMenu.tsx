import React, { FC } from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Title from "./Title";
import Link from "./CusLink";
import { tenderCategoriesType } from "../constants/tenderCompanies";

interface SideMenuProps {
  listOfMenu: tenderCategoriesType;
  activeId: string;
}

const useStyles = makeStyles({
  paperStyle: {
    padding: "10px 20px",
  },
});

const SideMenu: FC<SideMenuProps> = ({ listOfMenu, activeId }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paperStyle}>
      <Title variant="h4">Tenderlar</Title>
      {Object.entries(listOfMenu).map((item: any) => (
        <Link>
          <Typography color={activeId === item[0] ? "primary" : "initial"}>
            {item[1]}
          </Typography>
        </Link>
      ))}
    </Paper>
  );
};

export default SideMenu;
