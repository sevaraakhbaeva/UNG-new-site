import React, { FC } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ModalWindow from "./ModalWindow";

interface ManCardProps {
  workerData: { [index: string]: string };
}

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    borderRadius: 0,
    height: "100%",
  },
  titleStyle: {
    fontWeight: "lighter",
  },
});

const ManCard: FC<ManCardProps> = ({ workerData }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        style={{ position: "relative" }}
        className={classes.root}
        elevation={3}
      >
        <CardMedia title="Worker">
          <img
            alt="Worker"
            style={{ width: "100%" }}
            src={`/images/neftBaza/${workerData.picUrl}`}
          />
        </CardMedia>
        <CardContent style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <Typography
            color="primary"
            gutterBottom
            variant="h5"
            className={classes.titleStyle}
          >
            {workerData.name}
          </Typography>
          <Typography gutterBottom variant="h5" className={classes.titleStyle}>
            {workerData.position}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleClickOpen}
            variant="outlined"
            fullWidth
            color="primary"
          >
            Batafsil
          </Button>
        </CardActions>
      </Card>
      <ModalWindow
        workerData={workerData}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
};

export default ManCard;
