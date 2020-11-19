import React, { FC, ReactElement, ReactNodeArray, ReactNode } from "react";
import { IconButton, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as CloseIcon } from "../../../icons/cross.svg";

interface BlockProps {
  children: ReactElement<any, string> | ReactNodeArray | ReactNode;
  closeBlock: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const useStyles = makeStyles({
  blockBack: {
    backgroundImage: "url(/images/UNGBrand.png)",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: 100,
    paddingTop: 20,
    paddingBottom: 20,
    position: "relative",
  },
  closeSearchButton: {
    padding: 0,
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

const Block: FC<BlockProps> = ({ children, closeBlock }) => {
  const classes = useStyles();
  return (
    <Box className={classes.blockBack}>
      {children}
      <Box style={{ position: "absolute", top: 5, right: 5 }}>
        <IconButton
          // color="primary"
          classes={{ root: classes.closeSearchButton }}
          onClick={closeBlock}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Block;
