import React from "react";
import { structSubData } from "../constants/subStructData";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import StructuralBlock from "./StructuralBlock";
import BlockLayout from "./BlockLayout";

const useStyles = makeStyles({
  gridContainer: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
  },
  gridItem: {
    margin: 8,
    flex: "0 1 calc(20% - 16px)",
  },
});

const StructSubContainer = () => {
  const classes = useStyles();
  return (
    <BlockLayout
      title="Tizim tarkibiga kiruvchi jamiyatlar"
      breadcrumbNames={[
        "Bosh sahifa",
        "Kompaniya haqida",
        "Tizim tarkibiga kiruvchi jamiyatlar",
      ]}
    >
      {structSubData.map((divisionBlock: any) => (
        <Box style={{ marginBottom: 40 }}>
          <Typography variant="h4" style={{ marginBottom: 40 }} color="primary">
            {divisionBlock.title}
          </Typography>
          <Box className={classes.gridContainer}>
            {divisionBlock.data.map((dataItem: string) => (
              <Box className={classes.gridItem}>
                <StructuralBlock
                  title={dataItem}
                  picName={divisionBlock.imgName}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </BlockLayout>
  );
};

export default StructSubContainer;
