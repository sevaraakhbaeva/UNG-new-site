import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import BlockLayout from "./BlockLayout";
import { managementData } from "../constants/managementData";
import ManagerBlock from "./ManagerBlock";

const useStyles = makeStyles({});

const ManagementContainer = () => {
  const classes = useStyles();
  return (
    <BlockLayout
      title="Rahbariyat"
      breadcrumbNames={["Bosh sahifa", "Kompaniya haqida", "Rahbariyat"]}
    >
      {managementData.map((item: any) => (
        <ManagerBlock managerData={item} />
      ))}
    </BlockLayout>
  );
};

export default ManagementContainer;
