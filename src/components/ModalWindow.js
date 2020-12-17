import React from "react";
import {
  Typography,
  Dialog,
  DialogContent,
  Slide,
  IconButton,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    titleStyle: {
      width: "90%",
    },
    dialogStyle: {
      width: "30%",
      minWidth: 300,
    },
  });

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.titleStyle} variant="h6">
        {children}
      </Typography>
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

const useStyles = makeStyles({
  cellStyle: {
    maxWidth: 250,
    fontSize: 16,
  },
});

const ModalWindow = ({ handleClose, open, workerData, tableRows }) => {
  const size = Object.keys(workerData).length;

  const classes = useStyles();
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      TransitionComponent={Transition}
      maxWidth={false}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {workerData.name}
      </DialogTitle>
      <DialogContent dividers>
        <Table>
          <TableBody>
            {Object.entries(tableRows).map((item) => (
              <TableRow>
                <TableCell
                  className={classes.cellStyle}
                  component="th"
                  scope="row"
                >
                  <Typography>{item[1]}</Typography>
                </TableCell>
                <TableCell className={classes.cellStyle}>
                  <Typography>{workerData[item[0]]}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default ModalWindow;
