import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  paperBlock: (props) => ({
    padding: "30px 15px",
    minHeight: 200,
    backgroundImage: `url(/images/structuralSubdivision/${props.imagePath})`,
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 65%",
  }),
  typographyStyle: {
    width: "75%",
  },
});

const StructuralBlock = ({ title, picName }) => {
  const classes = useStyles({ imagePath: picName });
  return (
    <Paper square className={classes.paperBlock}>
      <Box>
        <Typography variant="h5" className={classes.typographyStyle}>
          {title}
        </Typography>
      </Box>
    </Paper>
  );
};

export default StructuralBlock;
