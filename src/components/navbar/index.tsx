import React, { FC, useState } from "react";
import { AppBar, Toolbar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import UpperNavbar from "./components/UpperNavbar";
import SearchBlock from "./components/SearchBlock";
import DisabilitiesBlock from "./components/DisabilitiesBlock";
import BlockWithOrnament from "./components/BlockWithOrnament";

export interface NavbarProps {
  type?: "white" | "transparent";
}

const useStyles = makeStyles((theme) => ({}));

const findOpenedComponent = (openedBlock: string): React.ReactNode => {
  if (openedBlock === "disability") {
    return <DisabilitiesBlock />;
  } else if (openedBlock === "search") {
    return <SearchBlock />;
  }
};

const Navbar: FC<NavbarProps> = ({ type }) => {
  const [openedBlock, setOpenedBlock] = useState("");
  const openChosenBlock = (chosenBlock: string) => {
    setOpenedBlock(chosenBlock);
  };
  const closeChosenBlock = () => {
    setOpenedBlock("");
  };
  const openedComponent = findOpenedComponent(openedBlock);
  const isAnyOpened = Boolean(openedBlock);
  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <UpperNavbar setFunction={openChosenBlock} />
          <Divider />
        </Toolbar>
        {!isAnyOpened && (
          <BlockWithOrnament closeBlock={closeChosenBlock}>
            {openedComponent}
          </BlockWithOrnament>
        )}
      </AppBar>
    </>
  );
};

Navbar.defaultProps = {
  type: "white",
};

export default Navbar;
