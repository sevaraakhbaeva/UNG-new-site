import React, { FC } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Typography,
  Toolbar,
  Box,
  Grid,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { BorderBottom } from "@material-ui/icons";
import { ReactComponent as VisionIcon } from "../icons/Vector.svg";
import { ReactComponent as FileIcon } from "../icons/file-text.svg";
import { ReactComponent as MapIcon } from "../icons/map.svg";
import { ReactComponent as ArrowDownIcon } from "../icons/chevron-down.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";

import IconWithText from "./IconWithText";

export interface NavbarProps {
  type?: "white" | "transparent";
}

const useStyles = makeStyles((theme) => ({}));
// const MenuText = () => {
//     return (

//     );
// }

const Navbar: FC<NavbarProps> = ({ type }) => {
  const classes = useStyles();
  return (
    <AppBar style={{ backgroundColor: "white", color: "black" }}>
      <Toolbar style={{ padding: "0 100px" }}>
        <Grid container alignItems="center">
          <img alt="UNG logo" src="/images/logo.png" width="150" />
          <Grid
            spacing={2}
            style={{ height: "25px" }}
            item
            justify="flex-end"
            container
          >
            <Grid item>
              <IconWithText
                Icon={<VisionIcon />}
                text="Imkoniyati cheklanganlar uchun"
              />
            </Grid>
            <Grid item>
              <IconWithText Icon={<FileIcon />} text="Bo’sh ish o’rinlari" />
            </Grid>
            <Grid item>
              <IconWithText Icon={<MapIcon />} text="Korxonalar" />
            </Grid>
            <Grid item>
              <IconWithText Icon={<ArrowDownIcon />} text="Uz" reverse />
            </Grid>
            <Grid item>
              <SearchIcon />
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

Navbar.defaultProps = {
  type: "white",
};

export default Navbar;
