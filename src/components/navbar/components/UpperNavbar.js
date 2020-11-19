import React from "react";
import { Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as VisionIcon } from "../../../icons/Vector.svg";
import { ReactComponent as FileIcon } from "../../../icons/file-text.svg";
import { ReactComponent as MapIcon } from "../../../icons/map.svg";
import { ReactComponent as ArrowDownIcon } from "../../../icons/chevron-down.svg";
import { ReactComponent as SearchIcon } from "../../../icons/search.svg";

import IconWithText from "../../IconWithText";
import IconWithMenu from "../../IconWithMenu";
const topMenuItems = [
  {
    icon: <FileIcon />,
    text: "Bo’sh ish o’rinlari",
  },
  {
    icon: <MapIcon />,
    text: "Korxonalar",
  },
  {
    icon: <ArrowDownIcon />,
    text: "Uz",
  },
];

const useStyles = makeStyles({
  menuItem: {
    marginRight: 17,
  },
  linkStyle: {
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "#03A3DF",
    },
  },
});

const logoImage = <img alt="UNG logo" src="/images/logo.png" width="150" />;
const textStyleObj = { fontSize: 14 };

const UpperNavbar = ({ setFunction }) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        style={{ height: "25px" }}
        justify="flex-end"
        container
        alignItems="center"
        xs={10}
        item
      >
        <Grid item className={classes.menuItem}>
          <Link
            underline="none"
            style={{ color: "black", cursor: "pointer" }}
            onClick={(event) => {
              setFunction("disability");
            }}
          >
            <IconWithText
              Icon={<VisionIcon />}
              text="Imkoniyati cheklanganlar uchun"
              textStyle={textStyleObj}
            />
          </Link>
        </Grid>
        {topMenuItems.map((item) => (
          <Grid item className={classes.menuItem}>
            {item.text !== "Uz" && (
              <IconWithText
                Icon={item.icon}
                text={item.text}
                textStyle={textStyleObj}
              />
            )}
          </Grid>
        ))}
        <Grid item className={classes.menuItem}>
          <IconWithMenu
            Icon={topMenuItems[topMenuItems.length - 1].icon}
            text={topMenuItems[topMenuItems.length - 1].text}
            textStyle={textStyleObj}
            reverse
          />
        </Grid>
        <Grid item>
          <Link
            underline="none"
            className={classes.linkStyle}
            onClick={(event) => {
              event.preventDefault();
              setFunction("search");
            }}
          >
            <SearchIcon />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default UpperNavbar;
