import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";
import MenuListItem from "./MenuListItem";
import { find } from "ramda";
import SideMenuImage from "./SideMenuImage";

const useStyles = makeStyles((theme) => ({
  menuStylePosition: {
    zIndex: 1500,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundImage: "url(/images/UNGBrand.png)",
    backgroundRepeat: "repeat-y",
    width: "85%",
  },
  marginRight: { marginRight: 40 },
  cornerBorder: {
    borderRight: "1px solid #CCCCCC",
    padding: "30px 0 30px 80px",
    minHeight: 500,
    [theme.breakpoints.up("lg")]: {
      minHeight: 600,
    },
    [theme.breakpoints.up("xl")]: {
      minHeight: 700,
    },
  },
  sideImageHeight: { height: "100%" },
}));

const PaperMenu = ({ parentId, parentUrl, parentMenuList, closePaperMenu }) => {
  const classes = useStyles();
  const [childrenMenuSelected, setChildrenMenuSelected] = useState(0);
  const handleMouseEnter = (id) => {
    setChildrenMenuSelected(id);
  };
  const childrenMenuList = find(
    (item) => item.id === childrenMenuSelected,
    parentMenuList
  );

  const isChildrenMenuOpened =
    Boolean(childrenMenuSelected) &&
    childrenMenuList !== undefined &&
    childrenMenuList.hasOwnProperty("children");

  return (
    <Paper className={classes.menuStylePosition}>
      <Grid container>
        <Grid item xs={8} container className={classes.cornerBorder}>
          <Grid className={classes.marginRight} item>
            {parentMenuList.map((item, i) => (
              <MenuListItem
                name={item.name}
                url={parentUrl + item.url}
                id={item.id}
                handleMouseEnter={handleMouseEnter}
                isLast={parentMenuList.length - 1 === i}
                closePaperMenu={closePaperMenu}
              />
            ))}
          </Grid>
          {isChildrenMenuOpened && (
            <Grid item xs={6}>
              {childrenMenuList.children.map((item, i) => (
                <MenuListItem
                  name={item.name}
                  url={parentUrl + childrenMenuList.url + item.url}
                  id={item.id}
                  handleMouseEnter={() => {}}
                  isLast={childrenMenuList.length - 1 === i}
                  closePaperMenu={closePaperMenu}
                />
              ))}
            </Grid>
          )}
        </Grid>
        <Grid item xs={4}>
          <SideMenuImage closePaperMenu={closePaperMenu} idOfPic={parentId} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PaperMenu;
