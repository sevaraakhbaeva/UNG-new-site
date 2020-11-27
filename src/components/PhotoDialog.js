import React, { useState } from "react";
import {
  IconButton,
  Typography,
  Box,
  Dialog,
  Slide,
  makeStyles,
} from "@material-ui/core";
import Arrow from "./Arrow";
import Slider from "react-slick";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  dialogImageStyle: {
    // width: 300,
    // margin: 0,
  },
  dialogWindow: {
    // width: "75%",
    width: 700,
    backgroundColor: "transparent",
  },
});

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow: <Arrow direction="right" style={{ right: 25 }} />,
  prevArrow: <Arrow direction="left" style={{ left: 25 }} />,
};

const PhotoDialog = ({
  open,
  handleClose,
  currentFolderObject,
  currentImageIdx,
  pathToGalleryFolder,
}) => {
  settings.initialSlide = currentImageIdx;
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      classes={{ paperWidthSm: classes.dialogWindow }}
      fullWidth
    >
      <Slider {...settings}>
        {currentFolderObject.photoUrls.map((url, i) => (
          // <Box style={{ backgroundColor: "transparent" }}>
          <img
            className={classes.dialogImageStyle}
            alt={`${currentFolderObject.title} ${i}`}
            src={pathToGalleryFolder + url}
          />
          // </Box>
        ))}
      </Slider>
    </Dialog>
  );
};

export default PhotoDialog;
