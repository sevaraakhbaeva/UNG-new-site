import React from "react";
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

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    borderRadius: 0,
    height: "100%",
    position: "relative",
    maxWidth: 270,
  },
  titleStyle: {
    fontWeight: "lighter",
  },
});

const ManCard = ({
  workerData,
  withoutDetailInfo = false,
  picFolderUrl,
  tableRows,
}) => {
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
      <Card className={classes.root} elevation={3}>
        <CardMedia title="Worker">
          <img
            alt="Worker"
            style={{ width: "100%" }}
            src={`/images${picFolderUrl}/${workerData.picUrl}`}
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
        {!withoutDetailInfo && (
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
        )}
      </Card>
      {!withoutDetailInfo && (
        <ModalWindow
          workerData={workerData}
          handleClose={handleClose}
          open={open}
          tableRows={tableRows}
        />
      )}
    </>
  );
};

export default ManCard;
