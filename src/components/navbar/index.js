import React, { useState } from "react";
import { AppBar, Toolbar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import UpperNavbar from "./components/UpperNavbar";
import SearchBlock from "./components/SearchBlock";
import DisabilitiesBlock from "./components/DisabilitiesBlock";
import BlockWithOrnament from "./components/BlockWithOrnament";
import MenuBar from "./components/MenuBar";
import { menuItems } from "./constants/menuItems";
import { find } from "ramda";
import PaperMenu from "./components/PaperMenu";

const useStyles = makeStyles((theme) => ({
  toolbarStyle: {
    // padding: "0 100px",
    borderBottom: "1px solid #CCCCCC",
    minHeight: 48,
  },
}));

const Navbar = ({ type }) => {
  const classes = useStyles();

  const [parentMenuSelected, setParentMenuSelected] = useState(0);
  const handleParentMenuClick = (id) => {
    if (parentMenuSelected !== id) {
      setParentMenuSelected(id);
    } else {
      setParentMenuSelected(0);
    }
  };
  const closePaperMenu = () => {
    setParentMenuSelected(0);
  };
  const isOpenPaperMenu = Boolean(parentMenuSelected);

  const [currentBlock, setCurrentBlock] = useState("menu");
  const changeCurrentBlock = (blockName) => {
    if (currentBlock === blockName) {
      setCurrentBlock("menu");
    } else {
      setCurrentBlock(blockName);
      if (isOpenPaperMenu) closePaperMenu();
    }
  };
  const closeCurrentBlock = () => {
    setCurrentBlock("menu");
  };

  const parentMenuList = find(
    (item) => item.id === parentMenuSelected,
    menuItems
  );

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar className={classes.toolbarStyle}>
          <UpperNavbar
            changeCurrentBlock={changeCurrentBlock}
            closePaperMenu={closePaperMenu}
          />
        </Toolbar>
        {currentBlock === "menu" && (
          <Toolbar className={classes.toolbarStyle}>
            <MenuBar
              handleParentMenuClick={handleParentMenuClick}
              parentMenuSelected={parentMenuSelected}
              menuItems={menuItems}
            />
          </Toolbar>
        )}
        {currentBlock === "disability" && (
          <BlockWithOrnament closeBlock={closeCurrentBlock}>
            <DisabilitiesBlock />
          </BlockWithOrnament>
        )}
        {currentBlock === "search" && (
          <BlockWithOrnament closeBlock={closeCurrentBlock}>
            <SearchBlock />
          </BlockWithOrnament>
        )}
      </AppBar>
      {isOpenPaperMenu && (
        <PaperMenu
          parentUrl={parentMenuList.url}
          parentMenuList={parentMenuList.children}
          closePaperMenu={closePaperMenu}
          parentId={parentMenuList.id}
        />
      )}
    </>
  );
};

Navbar.defaultProps = {
  type: "white",
};

export default Navbar;
