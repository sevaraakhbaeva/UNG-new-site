import React, { FC } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BlockLayout from "./BlockLayout";
import { useParams } from "react-router-dom";
import { managementData } from "../constants/managementData";
import { findIndexById } from "../helpers/helperFunction";
import Paragraph from "./Paragraph";
import LastChangesText from "./LastChangesText";

const tableRows = {
  name: "Имя",
  position: "Позиция",
  freeHours: "Дни приема",
  phoneNumber: "Номер телефона",
  email: "Адрес электронной почты",
  fax: "Факс",
};

const useStyles = makeStyles({
  image: {
    height: 250,
  },
  tableStyle: {
    width: "100%",
  },
  cellPadding: {
    padding: 0,
  },
});

const ManagerDetail = () => {
  const classes = useStyles();
  let { id }: any = useParams();
  const indexOfArr = findIndexById(managementData, id);
  const managerData = managementData[indexOfArr];
  const bioArray = managerData.biography.split(".");

  return (
    <BlockLayout
      title={managerData.name}
      breadcrumbNames={[
        "Bosh sahifa",
        "Kompaniya haqida",
        "Rahbariyat",
        managerData.name,
      ]}
    >
      <Box style={{ display: "flex" }}>
        <img
          alt={managerData.name}
          src={`/images/management/${managerData.image}`}
          className={classes.image}
        />
        <Box className={classes.tableStyle} px={4}>
          <Table size="small">
            <TableBody>
              {Object.entries(tableRows).map((item: string[]) => (
                <TableRow style={{ padding: 0 }}>
                  <TableCell
                    className={classes.cellPadding}
                    component="th"
                    scope="row"
                  >
                    <Typography>{item[1]}</Typography>
                  </TableCell>
                  <TableCell className={classes.cellPadding}>
                    <Typography>{managerData[item[0]]}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
      <Box mt={3}>
        <Typography variant="h4">Биография</Typography>
        {bioArray.map(
          (paragraph) =>
            Boolean(paragraph) && <Typography>{paragraph + "."}</Typography>
        )}
        <LastChangesText>
          Oxirgi o’zgartirilgan sana: 20-sentabr 2020
        </LastChangesText>
      </Box>
    </BlockLayout>
  );
};

export default ManagerDetail;
