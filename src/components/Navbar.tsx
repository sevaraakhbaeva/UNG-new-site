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
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Collapse,
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
import IconWithMenu from "./IconWithMenu";
import BlockWithOrnament from "./BlockWithOrnament";
import SearchBlock from "./SearchBlock";
import DisabilitiesBlock from "./DisabilitiesBlock";

import { menuItems, menuPicPaths } from "../constants/menu";

import { Link as RouterLink } from "react-router-dom";

export interface NavbarProps {
  type?: "white" | "transparent";
}

const useStyles = makeStyles((theme) => ({
  menuItem: {
    marginRight: 17,
  },
  toolbarStyle: {
    padding: "0 100px",
    borderBottom: "1px solid #CCCCCC",
    minHeight: 48,
  },
  menuStylePosition: {
    zIndex: 1500,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundImage: "url(/images/UNGBrand.png)",
    backgroundRepeat: "no-repeat",
    width: "85%",
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
  closeSearchButton: {
    padding: 0,
    width: 40,
    height: 40,
    marginLeft: 10,
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
  searchForm: {
    width: "90%",
    minHeight: 60,
    background: "#FAFAFA",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: 400, // ? Check
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },

  drawerPaper: {
    width: 400, // ! Check as well
  },
  toolbar: theme.mixins.toolbar,
}));

const topMenuItems = [
  {
    icon: <FileIcon />,
    text: "Bo’sh ish o’rinlari",
  },
  {
    icon: <MapIcon />,
    text: "Korxonalar",
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
  const [openMainMenu, setOpenMainMenu] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);
  const [openInvalid, setOpenInvalid] = useState(false);

  let openMenu = Boolean(menuNameIdx);
  let openMenuItem = Boolean(itemsOfMenu);

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeSearchInvalidBlock = () => {
    setOpenMainMenu(true);
    setOpenSearch(false);
    setOpenInvalid(false);
  };

  const toggleOpenMainMenu = () => {
    setOpenMainMenu(!openMainMenu);
  };

  const toggleSearch = () => {
    if (openMenu) closeMenu();
    if (openInvalid) setOpenInvalid(false);
    else toggleOpenMainMenu();
    setOpenSearch(!openSearch);
  };

  const toggleOpenInvalid = () => {
    if (openMenu) closeMenu();
    if (openSearch) setOpenSearch(false);
    else toggleOpenMainMenu();
    setOpenInvalid(!openInvalid);
  };

  const toggleMenu = (item: string) => {
    if (menuNameIdx === item) {
      closeMenu();
    } else {
      setMenuNameIdx(item);
    }

    setItemsOfMenu("");
  };

  const closeMenu = () => {
    setMenuNameIdx("");
  };

  const getItemsOfMainMenu = (item: string) => {
    setItemsOfMenu(item);
  };
  const logoImage = <img alt="UNG logo" src="/images/logo.png" width="150" />;

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar className={classes.toolbarStyle}>
          <Grid container alignItems="center" item xs={2}>
            <Hidden mdDown>{logoImage}</Hidden>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid
            style={{ height: "25px" }}
            justify="flex-end"
            container
            alignItems="center"
            xs={10}
            item
          >
            <Grid item className={classes.menuItem}>
              <Link
                underline="none"
                style={{ color: "black", cursor: "pointer" }}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  event.preventDefault();
                  toggleOpenInvalid();
                }}
              >
                <IconWithText
                  Icon={<VisionIcon />}
                  text="Imkoniyati cheklanganlar uchun"
                  textStyle={textStyleObj}
                />
              </Link>
            </Grid>
            {topMenuItems.map((item) => (
              <Grid item className={classes.menuItem}>
                {item.text !== "Uz" && (
                  <IconWithText
                    Icon={item.icon}
                    text={item.text}
                    textStyle={textStyleObj}
                  />
                )}
              </Grid>
            ))}
            <Grid item className={classes.menuItem}>
              <IconWithMenu
                Icon={topMenuItems[topMenuItems.length - 1].icon}
                text={topMenuItems[topMenuItems.length - 1].text}
                textStyle={textStyleObj}
                reverse
              />
            </Grid>
            <Grid item>
              <Link
                underline="none"
                className={classes.linkStyle}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  event.preventDefault();
                  toggleSearch();
                }}
              >
                <SearchIcon />
              </Link>
            </Grid>
          </Grid>
          <Divider />
        </Toolbar>

        {!openMainMenu && (
          <BlockWithOrnament closeBlock={closeSearchInvalidBlock}>
            {openSearch && <SearchBlock />}
            {openInvalid && <DisabilitiesBlock />}
          </BlockWithOrnament>
        )}
        {openMainMenu && (
          <Hidden mdDown>
            <Toolbar className={classes.toolbarStyle}>
              <Grid
                xs={12}
                item
                container
                alignItems="center"
                justify="space-between"
              >
                {Object.keys(menuItems).map((item: string) => (
                  <Grid key={item} item={true}>
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
                        reverse={true}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Toolbar>
          </Hidden>
        )}
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerMenu
              logoImage={logoImage}
              open={openMenu}
              menuNameIdx={menuNameIdx}
              handleClick={toggleMenu}
            />
          </Drawer>
        </Hidden>
      </nav>

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
                  <MenuLintItems
                    key={i}
                    item={item}
                    menuNameIdx={menuNameIdx}
                    itemsOfMenu={itemsOfMenu}
                    getItemsOfMainMenu={getItemsOfMainMenu}
                    closeMenu={closeMenu}
                    style={
                      i !== Object.keys(menuItems[menuNameIdx]).length - 1
                        ? { marginBottom: 10 }
                        : { marginBottom: 0 }
                    }
                  />
                ))}
              </Grid>
              {openMenuItem && (
                <Grid item xs={6} className={classes.menuItemsWrap}>
                  {menuItems[menuNameIdx][itemsOfMenu].map(
                    (item: string, i: number) => {
                      if (item !== "") {
                        return (
                          <Link
                            onClick={closeMenu}
                            underline="none"
                            className={classes.linkStyle}
                          >
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
                    // color="primary"
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

interface menuLintItemsProps {
  getItemsOfMainMenu: any;
  item: string;
  menuNameIdx: string;
  itemsOfMenu: string;
  style: CSSProperties;
  closeMenu: any;
}

const MenuLintItems: FC<menuLintItemsProps> = ({
  getItemsOfMainMenu,
  item,
  itemsOfMenu,
  style,
  closeMenu,
}) => {
  const classes = useStyles();
  return (
    <RouterLink style={{ textDecoration: "none" }} to="/about/history">
      <Link
        underline="none"
        className={classes.linkStyle}
        onClick={closeMenu}
        onMouseEnter={(
          event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ) => {
          event.preventDefault();
          getItemsOfMainMenu(item);
        }}
      >
        <Typography
          style={{ ...style }}
          color={itemsOfMenu === item ? "primary" : "initial"}
        >
          {item}
        </Typography>
      </Link>
    </RouterLink>
  );
};

interface DrawerMenuProps {
  logoImage: React.ReactNode;
  open: boolean;
  menuNameIdx: string;
  handleClick: (item: string) => void;
}
const DrawerMenu: FC<DrawerMenuProps> = ({
  logoImage,
  open,
  menuNameIdx,
  handleClick,
}) => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {logoImage}
        </ListSubheader>
      }
      style={{ width: "100%" }}
    >
      {Object.keys(menuItems).map((item: string) => (
        <ListItem button>
          <ListItemText
            primary={item}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              handleClick(item);
            }}
          />
          {open && menuNameIdx === item ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </ListItem>
      ))}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button style={{ paddingLeft: 30 }}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

Navbar.defaultProps = {
  type: "white",
};

export default Navbar;
