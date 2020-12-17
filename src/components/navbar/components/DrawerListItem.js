import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { find } from "ramda";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(5),
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemPadding: {
    margin: 0,
  },
}));

const DrawerListItem = ({ menuItems }) => {
  const classes = useStyles();
  const [selectedMenuId, setSelectedMenuId] = React.useState(0);
  const handleClick = (id) => {
      if (id === selectedMenuId) setSelectedMenuId(0);
      else setSelectedMenuId(id);
  };

  const childrenMenuItems = find(
    (item) => item.id === selectedMenuId,
    menuItems
  );

  return menuItems.map((menuItem) => (
    <>
      { (menuItem.hasOwnProperty("children") && menuItem.children.length > 0) ?
          <ListItem
        button
        key={menuItem.id}
        onClick={() => handleClick(menuItem.id)}
      >
        <ListItemText className={classes.itemPadding} primary={menuItem.name} />
        {(selectedMenuId === menuItem.id ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      :
      <ListItem
          button
          component="a"
          href={menuItem.url}
          key={menuItem.id}
      >
        <ListItemText className={classes.itemPadding} primary={menuItem.name} />
      </ListItem>}
      {childrenMenuItems !== undefined && selectedMenuId === menuItem.id && (
        <Collapse
          in={selectedMenuId === menuItem.id}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            {childrenMenuItems.children.map((childMenu) => (
              <>
                <ListItem
                  key={childMenu.id}
                  button
                  component="a"
                  href={menuItem.url + childMenu.url}
                  className={classes.nested}
                >
                  <ListItemText
                    className={classes.itemPadding}
                    primary={childMenu.name}
                  />
                </ListItem>
                {/* {childMenu.hasOwnProperty("children") && (
                  <DrawerListItem
                    key={childMenu.id}
                    menuItems={childMenu.children}
                  />
                )} */}
              </>
            ))}
          </List>
        </Collapse>
      )}
    </>
  ));
};

export default DrawerListItem;
