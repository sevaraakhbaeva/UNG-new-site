import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { menuPicPaths } from "../constants/menuItems";
import { Grid, Box, IconButton } from "@material-ui/core";
import { ReactComponent as CloseIcon } from "../../../icons/cross.svg";

const useStyles = makeStyles((theme) => ({
  blockRelative: {
    position: "relative",
    width: "100%",
    height: "100%",
    // minHeight: 515,
  },
  crossPosition: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1000,
  },
  closeButton: {
    padding: 0,
  },
  imageStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 400,
    [theme.breakpoints.up("lg")]: {
      height: 550,
    },
    [theme.breakpoints.up("xl")]: {
      height: 610,
    },
  },
}));
const SideMenuImage = ({ closePaperMenu, idOfPic }) => {
  const classes = useStyles();
  return (
    <Box className={classes.blockRelative}>
      <Box className={classes.crossPosition}>
        <IconButton
          classes={{ root: classes.closeButton }}
          onClick={closePaperMenu}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <img
        className={classes.imageStyle}
        alt="Menu"
        src={`/images/menu/${menuPicPaths[idOfPic]}`}
      />
    </Box>
  );
};

export default SideMenuImage;
