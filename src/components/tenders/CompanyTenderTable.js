import React from "react";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";
import { formatDateAndTimeToDate } from "utils/formatDate";

const useStyles = makeStyles({
  fontCell: { fontSize: 16 },
});

const keysOfTable = {
  uz: {
    name: "name_uz",
    inn: "inn",
    address: "address_uz",
    phone: "phone",
    clientBillNumber: "clientBillNumber",
    deliveryTerms: "deliveryTerms_uz",
    deadline: "deadline_uz",
    paymentTerms: "paymentTerms_uz",
    //!!! "commission": "commission",
    applicationDeadline: "date_published",
    expirationDate: "date_ends",
  },
  ru: {
    name: "name_ru",
    inn: "inn",
    address: "address_ru",
    phone: "phone",
    clientBillNumber: "clientBillNumber",
    deliveryTerms: "deliveryTerms_ru",
    deadline: "deadline_ru",
    paymentTerms: "paymentTerms_ru",
    //!!! "commission": "commission",
    applicationDeadline: "date_published",
    expirationDate: "date_ends",
  },
  en: {
    name: "name_en",
    inn: "inn",
    address: "address_en",
    phone: "phone",
    clientBillNumber: "clientBillNumber",
    deliveryTerms: "deliveryTerms_en",
    deadline: "deadline_en",
    paymentTerms: "paymentTerms_en",
    //!!! "commission": "commission",
    applicationDeadline: "date_published",
    expirationDate: "date_ends",
  },
};

const CompanyTenderTable = ({ companyTable }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <Table size="small">
      <TableBody>
        {Object.entries(keysOfTable[i18n.language]).map((item, id) => (
          <TableRow key={id}>
            <TableCell
              style={{ width: "50%" }}
              classes={{ root: classes.fontCell }}
              align="right"
            >
              {t(`tenderDetailInfoTable.${item[0]}`)}
            </TableCell>
            <TableCell
              style={{ width: "50%" }}
              classes={{ root: classes.fontCell }}
              align="left"
            >
              {item[0] !== "applicationDeadline" && item[0] !== "expirationDate"
                ? companyTable[item[1]]
                : formatDateAndTimeToDate(companyTable[item[1]], i18n.language)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CompanyTenderTable;
