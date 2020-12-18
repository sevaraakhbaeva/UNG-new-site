import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const CusMenu = ({ options, parentMenuSelected, closePaperMenu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (parentMenuSelected !== 0) closePaperMenu();
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={(event) => handleMenuClick(event)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleMenuClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            component={"a"}
            href={option.url}
            onClick={handleMenuClose}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CusMenu;
