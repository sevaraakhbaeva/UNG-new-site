import React, { useEffect, useState, useCallback } from "react";
import { AppBar, Toolbar, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import UpperNavbar from "components/navbar/components/UpperNavbar";
import SearchBlock from "components/navbar/components/SearchBlock";
import DisabilitiesBlock from "components/navbar/components/DisabilitiesBlock";
import BlockWithOrnament from "components/navbar/components/BlockWithOrnament";
import MenuBar from "components/navbar/components/MenuBar";
import { menuItems as initialMenuItems } from "components/navbar/constants/menuItems";
import { find, prop } from "ramda";
import PaperMenu from "components/navbar/components/PaperMenu";
import * as API from "constants/api";
import useGetList from "hooks/crud/useGetList";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  toolbarStyle: {
    borderBottom: "1px solid #CCCCCC",
    minHeight: 48,
    paddingLeft: 100,
    paddingRight: 100,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
}));

export const navInitSerializer = (values, lang) => {
  return values.map((value) => {
    const name = prop(`name_${lang}`, value);
    const id = prop("id", value);
    const url = `/${id}`;
    return { ...value, name, url };
  });
};

const serializeMenuItems = (menuItems, lang) => {
  return menuItems.map((item) => {
    const name = item[`name_${lang}`];
    const children = item.hasOwnProperty("sub_category")
      ? item.sub_category.map((subCategory) => {
          const name = subCategory[`name_${lang}`];
          const children =
            subCategory.hasOwnProperty("redir") && subCategory.redir !== null
              ? subCategory.redir.sub_category.map((subOfFilePage) => {
                  const name = subOfFilePage[`subcategory_${lang}`];
                  const url = `/${subCategory.redir.id}/sub/${subOfFilePage.id}`;
                  return { id: subOfFilePage.id, name: name, url: url };
                })
              : [];
          return {
            id: subCategory.id,
            url: subCategory.url,
            name: name,
            children: children,
          };
        })
      : [];
    return { id: item.id, name: name, url: item.url, children: children };
  });
};

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const hideMenu = useMediaQuery(theme.breakpoints.down("sm"));
  const { i18n } = useTranslation();
  // const [menuItems, setMenuItems] = useState(
  //   serializeMenuItems(initialMenuItems, i18n.language)
  // );

  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const { data } = useGetList(API.TENDER_COMPANIES);

  const changeNewItems = useCallback((res) => {
    const TO_BUSINESS_ID = 2;
    const TENDER_ID = 1;
    const newMenuItems = initialMenuItems.map((menuItem) =>
      menuItem.id === TO_BUSINESS_ID
        ? {
            ...menuItem,
            children: menuItem.children.map((child) =>
              child.id === TENDER_ID ? { ...child, children: res } : child
            ),
          }
        : menuItem
    );

    setMenuItems(newMenuItems);
  }, []);

  useEffect(() => {
    changeNewItems(navInitSerializer(data.results, i18n.language));
  }, [changeNewItems, data, i18n.language]);

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
            hideMenu={hideMenu}
          />
        </Toolbar>

        {currentBlock === "menu" && !hideMenu && (
          <Toolbar className={classes.toolbarStyle}>
            <MenuBar
              handleParentMenuClick={handleParentMenuClick}
              parentMenuSelected={parentMenuSelected}
              menuItems={menuItems}
              closePaperMenu={closePaperMenu}
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
      {isOpenPaperMenu && !hideMenu && (
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
