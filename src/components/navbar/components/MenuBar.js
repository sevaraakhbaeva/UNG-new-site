import React from "react";
import { Grid, Link } from "@material-ui/core";

import IconWithText from "../../IconWithText";
import { ReactComponent as ArrowDownIcon } from "../../../icons/chevron-down.svg";
import { ReactComponent as ArrowUpIcon } from "../../../icons/chevron-up.svg";

const MenuBar = ({ handleParentMenuClick, parentMenuSelected, menuItems }) => {
  return (
    <Grid xs={12} item container alignItems="center" justify="space-between">
      {menuItems.map((item) => (
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
              text={item.name}
              reverse
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuBar;
