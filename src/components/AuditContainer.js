import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import BlockLayout from "./BlockLayout";
import { auditData } from "../constants/auditData";
import { makeStyles } from "@material-ui/styles";
import ManCard from "./ManCard";

const useStyles = makeStyles({});
const tableRows = {
  name: "Имя",
  position: "Должность",
  place: "Место работы",
  shareAmount: "Количество принадлежащих акций",
};
const AuditContainer = () => {
  return (
    <BlockLayout
      title="Тафтиш комиссияси"
      breadcrumbNames={["Bosh sahifa", "Kompaniya haqida", "Тафтиш комиссияси"]}
    >
      <Grid container justify="center" spacing={3}>
        {auditData.map((item) => (
          <Grid item xs={12} sm={6} md={4} container justify={"center"}>
            <ManCard
              tableRows={tableRows}
              workerData={item}
              picFolderUrl="/audit"
            />
          </Grid>
        ))}
      </Grid>
    </BlockLayout>
  );
};

export default AuditContainer;
