import React, { FC } from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface StructuralBlockProps {
  title: string;
  picName: string;
}

const useStyles = makeStyles({
  paperBlock: (props: any) => ({
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

const StructuralBlock: FC<StructuralBlockProps> = ({ title, picName }) => {
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
