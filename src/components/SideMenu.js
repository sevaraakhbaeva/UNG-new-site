import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Title from "./Title";
import Link from "./CusLink";
import { Link as RouterLink } from "react-router-dom";
import useGetList from "hooks/crud/useGetList";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  paperStyle: {
    padding: "10px 20px",
  },
});

const SideMenu = ({ activeId, title, url, name="name", api }) => {
  const classes = useStyles();
  const { data } = useGetList(api);
  const listOfMenu = data.results;
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  console.log(data);

  return (
    <Paper elevation={3} className={classes.paperStyle}>
      <Title variant="h4">{title}</Title>
      {listOfMenu.map((item) => (
        <RouterLink style={{ textDecoration: "none" }} to={`${url}/${item.id}`}>
          <Link>
            <Typography
              color={parseInt(activeId) === item.id ? "primary" : "initial"}
            >
              {item[`${name}_${currentLanguage}`]}
            </Typography>
          </Link>
        </RouterLink>
      ))}
    </Paper>
  );
};

export default SideMenu;
