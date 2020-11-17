import React, { FC } from "react";
import { Typography, Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import { Link as RouterLink } from "react-router-dom";

interface ManagerBlockProps {
  managerData: { [index: string]: string };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: "#FFFFFF",
      flexWrap: "wrap",
      "&:hover": {
        border: "1px solid",
        borderColor: theme.palette.primary.main,
      },
      "&:not(:last-child)": {
        marginBottom: 30,
      },
    },
    image: {
      width: 250,
    },
    textStyle: {
      fontSize: 16,
    },
  })
);

const ManagerBlock: FC<ManagerBlockProps> = ({ managerData }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img
        alt={managerData.name}
        src={`/images/management/${managerData.image}`}
        className={classes.image}
      />
      <Box px={4} py={2}>
        <Typography variant="h4">{managerData.name}</Typography>
        <Typography color="primary" className={classes.textStyle}>
          {managerData.position}
        </Typography>
        <Typography className={classes.textStyle}>
          Qabul kunlari: {managerData.freeHours}
        </Typography>
        <Typography className={classes.textStyle}>
          Murojaat uchun telefon: {managerData.phoneNumber}
        </Typography>
        <RouterLink
          style={{ textDecoration: "none" }}
          to={`/about/management/${managerData.id}`}
        >
          <Button thinBorder style={{ marginTop: 20 }}>
            Batafsil
          </Button>
        </RouterLink>
      </Box>
    </Box>
  );
};

export default ManagerBlock;
