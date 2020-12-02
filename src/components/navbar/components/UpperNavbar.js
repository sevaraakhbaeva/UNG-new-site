import React from "react";
import { Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as VisionIcon } from "../../../icons/Vector.svg";
import { ReactComponent as FileIcon } from "../../../icons/file-text.svg";
import { ReactComponent as MapIcon } from "../../../icons/map.svg";
import { ReactComponent as ArrowDownIcon } from "../../../icons/chevron-down.svg";
import { ReactComponent as SearchIcon } from "../../../icons/search.svg";
import { Link as RouterLink } from "react-router-dom";

import IconWithText from "../../IconWithText";
import IconWithMenu from "../../IconWithMenu";
const topMenuItems = [
  {
    icon: <FileIcon />,
    text: "Bo’sh ish o’rinlari",
  },
  {
    icon: <MapIcon />,
    text: "Korxonalar",
  },
];

const useStyles = makeStyles({
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
  imageStart: {
    marginRight: "auto",
  },
});

const UpperNavbar = ({ changeCurrentBlock, closePaperMenu }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.root}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box justifySelf="flex-start" className={classes.imageStart}>
          <RouterLink
            onClick={closePaperMenu}
            style={{ textDecoration: "none" }}
            to="/"
          >
            <img alt="UNG logo" src="/images/logo.png" width="150" />
          </RouterLink>
        </Box>
        <Box className={classes.menuItem}>
          <Link
            onClick={() => {
              changeCurrentBlock("disability");
            }}
            underline="none"
            className={classes.linkStyle}
          >
            <IconWithText
              Icon={<VisionIcon />}
              text="Imkoniyati cheklanganlar uchun"
            />
          </Link>
        </Box>
        {topMenuItems.map((item, i) => (
          <Box key={i} className={classes.menuItem}>
            <IconWithText Icon={item.icon} text={item.text} />
          </Box>
        ))}
        <Box className={classes.menuItem}>
          <IconWithMenu Icon={<ArrowDownIcon />} reverse />
        </Box>
        <Box className={classes.menuItem}>
          <Link
            underline="none"
            className={classes.linkStyle}
            onClick={() => {
              changeCurrentBlock("search");
            }}
          >
            <SearchIcon />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default UpperNavbar;
