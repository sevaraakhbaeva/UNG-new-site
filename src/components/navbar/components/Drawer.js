import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SwipeableDrawer, List, Divider, Box } from "@material-ui/core";
import { menuItems } from "components/navbar/constants/menuItems";
import DrawerListItem from "components/navbar/components/DrawerListItem";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      width: 350,
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
    backgroundColor: theme.palette.background.paper,
  },
}));

const Drawer = ({ open, handleDrawerOpen, handleDrawerClose }) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      open={open}
      onClose={handleDrawerClose}
      onOpen={handleDrawerOpen}
    >
      <Box py={2} px={1}>
        <RouterLink
          onClick={handleDrawerClose}
          style={{ textDecoration: "none" }}
          to="/"
        >
          <img alt="UNG logo" src="/images/logo.png" width="150" />
        </RouterLink>
      </Box>
      <Divider />

      <List className={classes.root}>
        <DrawerListItem menuItems={menuItems} />
      </List>
    </SwipeableDrawer>
  );
};

export default Drawer;
