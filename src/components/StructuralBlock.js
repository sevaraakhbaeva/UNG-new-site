import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link as RouterLink } from "react-router-dom";

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

const StructuralBlock = ({ dataItem, picName, parentUrl }) => {
  const isWithLink = Boolean(dataItem.link);
  return (
    <>
      {isWithLink ? (
        <RouterLink
          style={{ textDecoration: "none" }}
          to={parentUrl + dataItem.link}
        >
          <BlockWithoutLink title={dataItem.name} picName={picName} />
        </RouterLink>
      ) : (
        <BlockWithoutLink title={dataItem.name} picName={picName} />
      )}
    </>
  );
};

const BlockWithoutLink = ({ title, picName }) => {
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
