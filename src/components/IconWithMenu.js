import React, { useState } from "react";
import IconWithText from "./IconWithText";
import { Menu, MenuItem, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  menuText: {
    fontWeight: "lighter",
    margin: 0,
  },
  linkStyle: {
    color: "black",
    cursor: "pointer",
  },
  listMargin: {
    margin: 0,
  },
});

const dictionaryOfLang = {
  uz: "Uz",
  ru: "Ru",
  en: "En",
};

const IconWithMenu = ({ Icon, style, reverse, textStyle }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
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
          text={dictionaryOfLang[currentLanguage]}
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
        {["ru", "en", "uz"].map(
          (lang) =>
            currentLanguage !== lang && (
              <MenuItem
                key={lang}
                className={classes.listMargin}
                onClick={() => {
                  handleClose();
                  handleLanguageChange(lang);
                }}
              >
                <Typography className={classes.menuText}>
                  {dictionaryOfLang[lang]}
                </Typography>
              </MenuItem>
            )
        )}
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
