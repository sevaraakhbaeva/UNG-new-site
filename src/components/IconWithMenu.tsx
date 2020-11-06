import React, { useState, FC, ReactNode, CSSProperties } from "react";
import IconWithText from "./IconWithText";
import { Menu, MenuItem, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export interface IconWithMenuProps {
  Icon: ReactNode;
  text?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  reverse?: boolean;
}

const useStyles = makeStyles({
  menuText: {
    fontWeight: "lighter",
  },
  linkStyle: {
    color: "black",
    cursor: "pointer",
  },
});

const IconWithMenu: FC<IconWithMenuProps> = ({
  Icon,
  text,
  style,
  reverse,
  textStyle,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Link
        onClick={handleClick}
        underline="none"
        className={classes.linkStyle}
      >
        <IconWithText
          Icon={Icon}
          text={text}
          textStyle={textStyle}
          style={style}
          reverse={reverse}
        />
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Typography className={classes.menuText}>Ru</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography className={classes.menuText}>En</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

IconWithMenu.defaultProps = {
  text: "",
  style: {},
  reverse: false,
  textStyle: {},
};

export default IconWithMenu;
