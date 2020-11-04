/* tslint:disable */
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
    "&:hover": {
      color: "#03A3DF",
    },
  },
  closeButton: {
    padding: 0,
  },
  menuItemsWrap: {
    // padding: "30px 0 30px 80px",
  },
  crossPosition: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1000,
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

const Navbar: FC<NavbarProps> = ({ type }) => {
  const classes = useStyles();
  const textStyleObj: CSSProperties = { fontSize: 14 };

  const [menuNameIdx, setMenuNameIdx] = useState("");
  const [itemsOfMenu, setItemsOfMenu] = useState("");

  const toggleMenu = (item: string) => {
    if (menuNameIdx === item) closeMenu();
    else setMenuNameIdx(item);

    setItemsOfMenu("");
  };
  const closeMenu = () => {
    setMenuNameIdx("");
  };

  const getItemsOfMainMenu = (item: string) => {
    setItemsOfMenu(item);
  };

  let openMenu = Boolean(menuNameIdx);
  let openMenuItem = Boolean(itemsOfMenu);

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
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    toggleMenu(item);
                  }}
                  style={{ color: "black", cursor: "pointer" }}
                >
                  <IconWithText
                    textStyle={textStyleObj}
                    Icon={
                      openMenu && menuNameIdx === item ? (
                        <ArrowUpIcon />
                      ) : (
                        <ArrowDownIcon />
                      )
                    }
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
              container
              style={{
                borderRight: "1px solid #CCCCCC",
                padding: "30px 0 30px 80px",
              }}
            >
              <Grid
                item
                className={classes.menuItemsWrap}
                style={{ marginRight: 40 }}
              >
                {Object.keys(menuItems[menuNameIdx]).map((item, i) => (
                  <Link
                    underline="none"
                    className={classes.linkStyle}
                    onMouseOver={(
                      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => {
                      event.preventDefault();
                      getItemsOfMainMenu(item);
                    }}
                  >
                    <Typography
                      key={i}
                      style={
                        i !== Object.keys(menuItems[menuNameIdx]).length - 1
                          ? { marginBottom: 10 }
                          : { marginBottom: 0 }
                      }
                      color={itemsOfMenu === item ? "primary" : "initial"}
                    >
                      {item}
                    </Typography>
                  </Link>
                ))}
              </Grid>
              {openMenuItem && (
                <Grid item xs={6} className={classes.menuItemsWrap}>
                  {menuItems[menuNameIdx][itemsOfMenu].map(
                    (item: string, i: number) => {
                      if (item !== "") {
                        return (
                          <Link underline="none" className={classes.linkStyle}>
                            <Typography key={i} style={{ marginBottom: 10 }}>
                              {item}
                            </Typography>
                          </Link>
                        );
                      }
                    }
                  )}
                </Grid>
              )}
            </Grid>

            <Grid container style={{ height: 500 }} item xs={4}>
              <Box style={{ position: "relative", width: "100%" }}>
                <Box className={classes.crossPosition}>
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
                  src={`/images/menu/${menuPicPaths[menuNameIdx]}`}
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
