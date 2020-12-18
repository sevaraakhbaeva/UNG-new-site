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
import ModalWindow from "components/ModalWindow";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    borderRadius: 0,
    maxWidth: 270,
    [theme.breakpoints.up("lg")]: {
      maxWidth: 340,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 400,
    },
  },
  titleStyle: {
    fontWeight: "lighter",
  },
  cardStyle: {
    paddingLeft: "20px",
    paddingRight: "20px",
    minHeight: 125,
    [theme.breakpoints.down("sm")]: {
      minHeight: 90,
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 70,
    },
  },
  buttonText: {
    margin: 0,
  },
}));

const ManCard = ({ workerData, withoutDetailInfo = false, tableRows }) => {
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
            src={`/images/neftBaza/unknown.png`}
          />
        </CardMedia>
        <CardContent className={classes.cardStyle}>
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
          {!withoutDetailInfo && (
            <Button
              onClick={handleClickOpen}
              variant="outlined"
              fullWidth
              color="primary"
            >
              <Typography className={classes.buttonText}>Batafsil</Typography>
            </Button>
          )}
        </CardActions>
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
