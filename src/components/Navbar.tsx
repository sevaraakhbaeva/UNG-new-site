import React, { FC, CSSProperties, useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Grid,
  Divider,
  Paper,
  Link,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as VisionIcon } from "../icons/Vector.svg";
import { ReactComponent as FileIcon } from "../icons/file-text.svg";
import { ReactComponent as MapIcon } from "../icons/map.svg";
import { ReactComponent as ArrowDownIcon } from "../icons/chevron-down.svg";
import { ReactComponent as ArrowUpIcon } from "../icons/chevron-up.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as CloseIcon } from "../icons/cross.svg";

import IconWithText from "./IconWithText";
import { menuItems, menuPicPaths } from "../constants/menu";

export interface NavbarProps {
  type?: "white" | "transparent";
}

const useStyles = makeStyles({
  menuItem: {
    marginRight: 17,
  },
  toolbarStyle: {
    padding: "0 100px",
    borderBottom: "1px solid #CCCCCC",
    minHeight: 48,
  },
  menuStylePosition: {
    marginTop: "99px",
    backgroundImage: "url(/images/UNGBrand.png)",
    backgroundRepeat: "no-repeat",
    width: "85%",
    margin: "0 auto",
  },
  linkStyle: {
    color: "black",
    cursor: "pointer",
  },
  closeButton: {
    padding: 0,
  },
});

const topMenuItems = [
  {
    icon: <VisionIcon />,
    text: "Imkoniyati cheklanganlar uchun",
  },
  {
    icon: <FileIcon />,
    text: "Bo’sh ish o’rinlari",
  },
  {
    icon: <MapIcon />,
    text: "Korxonalar",
  },
  {
    icon: <FileIcon />,
    text: "Bo’sh ish o’rinlari",
  },
  {
    icon: <ArrowDownIcon />,
    text: "Uz",
  },
];

let currentMenuName: string = "";

const Navbar: FC<NavbarProps> = ({ type }) => {
  const classes = useStyles();
  const textStyleObj: CSSProperties = { fontSize: 14 };

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <AppBar
        elevation={0}
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar className={classes.toolbarStyle}>
          <Grid container alignItems="center" item xs={2}>
            <img alt="UNG logo" src="/images/logo.png" width="150" />
          </Grid>
          <Grid
            style={{ height: "25px" }}
            justify="flex-end"
            container
            alignItems="center"
            xs={10}
            item
          >
            {topMenuItems.map((item) => (
              <Grid item className={classes.menuItem}>
                <IconWithText
                  Icon={item.icon}
                  text={item.text}
                  textStyle={textStyleObj}
                  withFunction
                  reverse={item.text === "Uz"}
                />
              </Grid>
            ))}
            <Grid item>
              <SearchIcon />
            </Grid>
          </Grid>
          <Divider />
        </Toolbar>
        <Toolbar className={classes.toolbarStyle}>
          <Grid
            xs={12}
            item
            container
            alignItems="center"
            justify="space-between"
          >
            {Object.keys(menuItems).map((item: string) => (
              <Grid key={item} item>
                <Link
                  underline="none"
                  className={classes.linkStyle}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    toggleMenu();
                    currentMenuName = item;
                  }}
                >
                  <IconWithText
                    textStyle={textStyleObj}
                    Icon={openMenu ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    text={item}
                    reverse
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>

      {openMenu && (
        <Paper className={classes.menuStylePosition}>
          <Grid container>
            <Grid
              item
              xs={8}
              style={{
                borderRight: "1px solid #CCCCCC",
                padding: "30px 0 30px 80px",
              }}
            >
              {menuItems[currentMenuName].map((item, i) => (
                <Typography
                  key={i}
                  style={
                    i !== menuItems[currentMenuName].length - 1
                      ? { marginBottom: 10 }
                      : { marginBottom: 0 }
                  }
                >
                  {item}
                </Typography>
              ))}
            </Grid>

            <Grid container style={{ height: 500 }} item xs={4}>
              <Box style={{ position: "relative", width: "100%" }}>
                <Box
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 1000,
                  }}
                >
                  <IconButton
                    color="primary"
                    classes={{ root: classes.closeButton }}
                    onClick={closeMenu}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <img
                  style={{
                    width: "80%",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                  alt="Menu"
                  src={`/images/menu/${menuPicPaths[currentMenuName]}`}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
};

Navbar.defaultProps = {
  type: "white",
};

export default Navbar;
