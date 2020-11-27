import React from "react";
import {
  IconButton,
  Typography,
  Box,
  Dialog,
  Link,
  Slide,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";

import BlockLayout from "./BlockLayout";
import { withStyles } from "@material-ui/core/styles";
import LastChangesText from "./LastChangesText";
import { ReactComponent as CloseIcon } from "../icons/cross.svg";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    padding: 0,
    width: 40,
    height: 40,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const ImageContainer = ({
  imgUrl,
  title,
  breadcrumbNames,
  lastChangesText,
  heading,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isHeading = heading !== "";
  return (
    <BlockLayout
      title={title}
      breadcrumbNames={["Bosh sahifa", ...breadcrumbNames, title]}
    >
      <Box>
        {isHeading && (
          <Typography style={{ marginBottom: 30 }} variant="h4">
            {heading}
          </Typography>
        )}
        <Link style={{ cursor: "pointer" }} onClick={handleClickOpen}>
          <img
            style={{ width: "100%" }}
            src={`/images/${imgUrl}`}
            alt="Hierarchy"
          />
        </Link>
        <LastChangesText>{lastChangesText}</LastChangesText>
      </Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {isHeading ? heading : title}
        </DialogTitle>
        <img
          style={{ width: "100%" }}
          src={`/images/${imgUrl}`}
          alt="Hierarchy"
        />
      </Dialog>
    </BlockLayout>
  );
};

export default ImageContainer;
