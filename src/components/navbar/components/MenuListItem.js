import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  linkStyle: {
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "#03A3DF",
    },
  },
});

const MenuListItems = ({
  url,
  name,
  id,
  isLast,
  handleMouseEnter,
  closePaperMenu,
}) => {
  const classes = useStyles();

  return (
    <RouterLink style={{ textDecoration: "none" }} to={`${url}`}>
      <Link
        underline="none"
        className={classes.linkStyle}
        onMouseEnter={() => {
          handleMouseEnter(id);
        }}
        onClick={() => {
          closePaperMenu();
        }}
      >
        <Typography
          style={!isLast ? { marginBottom: 10 } : { marginBottom: 0 }}
        >
          {name}
        </Typography>
      </Link>
    </RouterLink>
  );
};

export default MenuListItems;
