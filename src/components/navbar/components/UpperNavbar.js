import React from "react";
import { Box, Link, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as VisionIcon } from "icons/Vector.svg";
import { ReactComponent as FileIcon } from "icons/file-text.svg";
import { ReactComponent as MapIcon } from "icons/map.svg";
import { ReactComponent as ArrowDownIcon } from "icons/chevron-down.svg";
import { ReactComponent as SearchIcon } from "icons/search.svg";
import { Link as RouterLink } from "react-router-dom";

import IconWithText from "components/IconWithText";
import IconWithMenu from "components/IconWithMenu";
import { useTranslation } from "react-i18next";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "components/navbar/components/Drawer";

const topMenuItems = [
  {
    icon: <FileIcon />,
    text: "Vacancy",
  },
  {
    icon: <MapIcon />,
    text: "Companies",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: "25px",
    width: "100%",
  },
  menuItem: {
    marginRight: 17,
  },
  linkStyle: {
    color: "black",
    cursor: "pointer",
  },
  leftUpper: {
    marginRight: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const UpperNavbar = ({ changeCurrentBlock, closePaperMenu, hideMenu }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (!hideMenu) handleDrawerClose();
  }, [hideMenu]);

  return (
    <>
      <Box
        className={classes.root}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box justifySelf="flex-start" className={classes.leftUpper}>
          {hideMenu ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <RouterLink
              onClick={closePaperMenu}
              style={{ textDecoration: "none" }}
              to="/"
            >
              <img alt="UNG logo" src="/images/logo.png" width="150" />
            </RouterLink>
          )}
        </Box>
        {/* <Box className={classes.menuItem}>
          <Link
            onClick={() => {
              changeCurrentBlock("disability");
            }}
            underline="none"
            className={classes.linkStyle}
          >
            <IconWithText
              Icon={<VisionIcon />}
              text={t("For people with disabilities")}
            />
          </Link>
        </Box> */}
        {topMenuItems.map((item, i) => (
          <Box key={i} className={classes.menuItem}>
            <IconWithText Icon={item.icon} text={t(item.text)} />
          </Box>
        ))}
        <Box className={classes.menuItem}>
          <IconWithMenu Icon={<ArrowDownIcon />} reverse />
        </Box>
        {/* <Box className={classes.menuItem}>
          <Link
            underline="none"
            className={classes.linkStyle}
            onClick={() => {
              changeCurrentBlock("search");
            }}
          >
            <SearchIcon />
          </Link>
        </Box> */}
      </Box>
      {hideMenu && (
        <Drawer
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      )}
    </>
  );
};

export default UpperNavbar;
