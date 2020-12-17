import React from "react";
import { Grid, Link } from "@material-ui/core";

import IconWithText from "components/IconWithText";
import { ReactComponent as ArrowDownIcon } from "icons/chevron-down.svg";
import { ReactComponent as ArrowUpIcon } from "icons/chevron-up.svg";
import { useTranslation } from "react-i18next";
import Menu from 'components/navbar/components/Menu';

const splitMenuItems = (menuItems) => {
  let menuItemsWithChildren = [];
  let menuItemsNoChildren = [];
  for(let item of menuItems){
    if(item.children !== undefined && item.children.length > 0){
      menuItemsWithChildren.push(item);
    } else{
      menuItemsNoChildren.push(item);
    }
  }
  return [menuItemsWithChildren, menuItemsNoChildren];
}

const MenuBar = ({ handleParentMenuClick, parentMenuSelected, menuItems }) => {
  const { t } = useTranslation();

  const [menuItemsWithChildren, menuItemsNoChildren] = splitMenuItems(menuItems);

  return (
    <Grid xs={12} item container alignItems="center" justify="space-between">
      {menuItemsWithChildren.map((item) => (
        <Grid key={item.id} item>
          <Link
            onClick={() => handleParentMenuClick(item.id)}
            underline="none"
            style={{ color: "black", cursor: "pointer" }}
          >
            <IconWithText
              Icon={
                parentMenuSelected !== item.id ? (
                  <ArrowDownIcon />
                ) : (
                  <ArrowUpIcon />
                )
              }
              text={t(item.name)}
              reverse
            />
          </Link>
        </Grid>
      ))}
      <Grid item>
        <Menu options={menuItemsNoChildren} />
      </Grid>
    </Grid>
  );
};

export default MenuBar;
