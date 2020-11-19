import React from "react";
import {
  Typography,
  Divider,
  Box,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import BlockLayout from "./BlockLayout";
import FileBlock from "./FileBlock";

import { tenderDetail } from "../constants/tenderInfo";
import { useParams } from "react-router-dom";
import { tenderCategories } from "../constants/tenderCompanies";
const useStyles = makeStyles({
  headBold: {
    fontWeight: "normal",
    fontSize: 16,
    color: "#FFFFFF",
  },
  marginTable: {
    marginTop: 20,
  },
  fontCell: { fontSize: 16 },
  dividerColor: { backgroundColor: "#03A3DF", height: 2, borderRadius: 50 },
  listStyles: {
    fontFamily: "LabGrotesque, Calibri, sans-serif",
    fontSize: 16,
    "& > li": {
      lineHeight: "160%",
      fontSize: 16,
      fontWeight: "normal",
      margin: "10px 0",
    },
  },
  filePos: {
    width: "60%",
    minWidth: 300,
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
  },
  headColor: {
    backgroundColor: "#03A3DF",
    opacity: "50%",
  },
});
const tenderInfoFinalTable = (tenderInfo) => {
  let cost = 0;
  tenderInfo.purchases.map((item) => {
    cost = cost + parseFloat(item.price);
    return;
  });
  return [
    // lotNumber: tenderInfo.name,
    // end: tenderInfo.companyRequisites.endTender,
    // cost: cost,
    // participant: tenderInfo.companyRequisites.name,
    // status: tenderInfo.status,
    tenderInfo.name,
    tenderInfo.companyRequisites.endTender,
    cost.toString(),
    tenderInfo.status,
  ];
};
const tenderTableNames = [
  "№ Lot raqami",
  "Tugash muddati",
  "Birlik uchun boshlang'ich narx",
  "Yaxshiroq narx",
];
// const tenderStartTableNames = [
//   "Mahsulot miqdori",
//   "O’lchov birligi",
//   "Birlik uchun boshlang'ich narx",
//   "Hozirgi taqdim etilgan narx",
//   "Yaxshiroq narx",
// ];
const TenderDetailContainer = () => {
  const classes = useStyles();
  let { id } = useParams();

  const tenderFinalInfo = tenderInfoFinalTable(tenderDetail);
  return (
    <BlockLayout
      title="Tenderlar"
      breadcrumbNames={[
        "Bosh sahifa",
        "Biznesga oid",
        "Tenderlar",
        tenderCategories[id],
        tenderDetail.name,
      ]}
    >
      <Typography variant="h4" color="primary">
        {tenderDetail.name}
      </Typography>
      <Divider className={classes.dividerColor} />
      {tenderDetail.purchases.map((item) => (
        <Box my={3}>
          <Typography variant="h5">{item.name}</Typography>
          <Typography>{item.description}</Typography>
          <TenderTableStart item={item} classes={classes} />
        </Box>
      ))}

      <Box my={3}>
        <Typography variant="h4" color="primary">
          Asosiy Talablar
        </Typography>
        <Divider className={classes.dividerColor} />
        <Box my={3}>
          <div
            className={classes.listStyles}
            dangerouslySetInnerHTML={{ __html: tenderDetail.requirements }}
          />
        </Box>
        <Box my={3}>
          <Typography variant="h4" color="primary">
            Lot yo’riqnomasi
          </Typography>
          <Divider className={classes.dividerColor} />
          <Box my={3} className={classes.filePos}>
            <FileBlock fileInfo={tenderDetail.fileInfo} />
          </Box>
        </Box>

        <Box my={3}>
          <Typography variant="h4" color="primary">
            Xaridor va lot haqida ma’lumot
          </Typography>
          <Divider className={classes.dividerColor} />
          <Box my={3}>
            <CompanyTenderTable
              classes={classes}
              companyTable={tenderDetail.companyRequisites}
            />
          </Box>
        </Box>

        <Box my={3}>
          <Divider className={classes.dividerColor} />
          <Box my={3}>
            {" "}
            <TenderTable
              tenderTableNames={tenderTableNames}
              tenderInfoFinalTable={tenderFinalInfo}
              classes={classes}
            />
          </Box>
        </Box>
      </Box>
    </BlockLayout>
  );
};

const cellNames = {
  inn: "INN:",
  name: "Tashkilot nomi:",
  address: "Buyurtmachi manzili:",
  phone: "Tashkilot telefoni:",
  clientBillNumber: "Buyurtmachi hisob raqami:",
  deliveryTerms: "Yetkazib berish sharti bilan",
  deadline: "Yetqazib berish muddati:",
  paymentTerms: "To’lov muddati:",
  commision: "Kommision:",
  startTender: "Ariza qoldirish muddati:",
  endTender: "Tugash muddati:",
};

const CompanyTenderTable = ({ companyTable, classes }) => {
  return (
    <Table size="small">
      <TableBody>
        {Object.entries(companyTable).map((item) => (
          <TableRow>
            <TableCell
              style={{ width: "50%" }}
              classes={{ root: classes.fontCell }}
              align="right"
            >
              {cellNames[item[0]]}
            </TableCell>
            <TableCell
              style={{ width: "50%" }}
              classes={{ root: classes.fontCell }}
              align="left"
            >
              {item[1]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const TenderTable = ({ tenderInfoFinalTable, classes, tenderTableNames }) => {
  return (
    <Table className={classes.marginTable}>
      <TableHead className={classes.headColor}>
        <TableRow>
          {tenderTableNames.map((name) => (
            <TableCell classes={{ root: classes.headBold }} align="center">
              {name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {tenderInfoFinalTable.map((item) => (
            <TableCell classes={{ root: classes.fontCell }} align="center">
              {item}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

const TenderTableStart = ({ item, classes }) => {
  return (
    <Table className={classes.marginTable}>
      <TableHead className={classes.headColor}>
        <TableRow>
          <TableCell classes={{ root: classes.headBold }} align="center">
            Mahsulot miqdori
          </TableCell>
          <TableCell classes={{ root: classes.headBold }} align="center">
            O’lchov birligi
          </TableCell>
          <TableCell classes={{ root: classes.headBold }} align="center">
            Birlik uchun boshlang'ich narx
          </TableCell>
          <TableCell classes={{ root: classes.headBold }} align="center">
            Hozirgi taqdim etilgan narx
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell classes={{ root: classes.fontCell }} align="center">
            {item.number}
          </TableCell>
          <TableCell classes={{ root: classes.fontCell }} align="center">
            {item.unitMeasurement}
          </TableCell>
          <TableCell classes={{ root: classes.fontCell }} align="center">
            {item.price}
          </TableCell>

          <TableCell
            classes={{ root: classes.fontCell }}
            style={
              item.status === "open"
                ? { color: "#27AE60" }
                : { color: "#EB5757" }
            }
            align="center"
          >
            {item.status === "open" ? "Sotilmagan" : "Sotilgan"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TenderDetailContainer;
