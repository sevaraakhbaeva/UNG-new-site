import React from "react";
import { Typography, Divider, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import BlockLayout from "components/BlockLayout";
import FileBlock from "components/FileBlock";
import HtmlConverter from "components/HtmlConverter";

import TenderTableStart from "components/tenders/TenderTableStart";
import TenderTable from "components/tenders/TenderTable";
import CompanyTenderTable from "components/tenders/CompanyTenderTable";
import { useTranslation } from "react-i18next";
import { formatDateAndTimeToDate } from "utils/formatDate";

const tenderInfoFinalTable = (tenderInfo, currentLanguage) => {
  let cost = 0;
  tenderInfo.tenderlots.map((item) => {
    cost = cost + parseFloat(item.price);
    return;
  });
  return {
    "№ Lot number": tenderInfo[`title_${currentLanguage}`],
    expirationDate: formatDateAndTimeToDate(
      tenderInfo["company"]["date_ends"],
      currentLanguage
    ),
    price: cost.toString(),
    "Better price": tenderInfo.status,
  };
};

const useStyles = makeStyles({
  dividerColor: { backgroundColor: "#03A3DF", height: 2, borderRadius: 50 },
  filePos: {
    width: "60%",
    minWidth: 300,
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const backAPI = {
  company: {
    name_ru: "Ustyurt",
    name_en: "soem",
    name_uz: "Ustuyur",
    inn: "1231231231231",
    address_ru: "Ташкент, Яшанабадский район, улица Истикбол, 21й дом",
    address_en: "Ташкент, Yashnobod district, Istiqbol street, 21-house",
    address_uz: "`Tashkent shahar, Yashnobod tumani, Istiqbol ko‘chasi, 21-uy",
    phone: "998712757575",
    clientBillNumber: "23423434524234234234234234",
    deliveryTerms_ru: "Условия обслуживания",
    deliveryTerms_en: "Delivery Terms",
    deliveryTerms_uz: "Yetkazib berish sharti bilan",
    deadline_ru: "В течении 3х рабочих дней",
    deadline_en: "Within 3 week days",
    deadline_uz: "3 kun(ish kuni) ichida",
    paymentTerms_ru: "В течении 5 рабочих дней",
    paymentTerms_en: "Within 5 week days",
    paymentTerms_uz: "5 ish kuni ichida",
    date_published: "2020-11-28T14:25:37.525480Z",
    date_ends: "2020-12-07T10:32:34.975744Z",
  },
  title_ru: "№-ПК/13-2020 RU",
  title_en: "№-ПК/13-2020 EN",
  title_uz: "№-ПК/13-2020 UZ",
  asosiy_talablar_ru:
    "RU: <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>",
  asosiy_talablar_en:
    "EN: <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>",
  asosiy_talablar_uz:
    "UZ: <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li><li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>",
  date_published: "2020-12-02T10:05:23.556223Z",
  tenderlots: [
    {
      tender: 4,
      name_ru: "1-Принтер",
      name_en: "1-Printer",
      name_uz: "1-Принтер",
      description_ru:
        "RU: Sayyoramiz aholisining aksariyati mavjud bo'lgan barcha printerlar ikki toifaga bo'linganligiga qat'iy ishonadilar: oddiy va \"bosma, nusxa ko'chirish va skanerlay oladiganlar\", boshqacha qilib aytganda, ular har qanday bosib chiqarish jarayonlarini amalga oshiradilar. Biroq, aslida, ushbu turdagi ofis uskunalari juda ko'p turli xil tasniflarga ega, ularning mavjudligini ko'pchilik bilmaydi.",
      description_en:
        "EN: Sayyoramiz aholisining aksariyati mavjud bo'lgan barcha printerlar ikki toifaga bo'linganligiga qat'iy ishonadilar: oddiy va \"bosma, nusxa ko'chirish va skanerlay oladiganlar\", boshqacha qilib aytganda, ular har qanday bosib chiqarish jarayonlarini amalga oshiradilar. Biroq, aslida, ushbu turdagi ofis uskunalari juda ko'p turli xil tasniflarga ega, ularning mavjudligini ko'pchilik bilmaydi.",
      description_uz:
        "UZ: Sayyoramiz aholisining aksariyati mavjud bo'lgan barcha printerlar ikki toifaga bo'linganligiga qat'iy ishonadilar: oddiy va \"bosma, nusxa ko'chirish va skanerlay oladiganlar\", boshqacha qilib aytganda, ular har qanday bosib chiqarish jarayonlarini amalga oshiradilar. Biroq, aslida, ushbu turdagi ofis uskunalari juda ko'p turli xil tasniflarga ega, ularning mavjudligini ko'pchilik bilmaydi.",
      price: 45,
      id: 6,
      unit_ru: "штук",
      unit_en: "ones",
      unit_uz: "дона",
      number: "5",
      status: "open",
    },
    {
      tender: 4,
      name_ru: "2-Компьютер",
      name_en: "2-Computer",
      name_uz: "2-Kompyuter",
      description_ru:
        "RU: Kompyuter (ing . computer — hisoblayman), EHM (Elektron Hisoblash Mashinasi) — oldindan berilgan dastur (programma) boʻyicha ishlaydigan avtomatik qurilma. Elektron hisoblash mashinasi (EHM) bilan bir xildagi atama. Birok, K. hisoblash ishlarini bajarishdan tashqari uning funksiyasi ancha keng . EHMlarning rivojlanishida K. ning bir necha avlodlarini koʻrsatish mumkin. Bu avlodlar element turlari, konstruktiv-texnologik xususiyatlari, mantiqiy tuzilishi, dastur taʼminoti, texnik tafsilotlari, texnikadan foydalanishning qulaylik darajasi bilan bir-biridan farq qilad",
      description_en:
        "EN: Kompyuter (ing . computer — hisoblayman), EHM (Elektron Hisoblash Mashinasi) — oldindan berilgan dastur (programma) boʻyicha ishlaydigan avtomatik qurilma. Elektron hisoblash mashinasi (EHM) bilan bir xildagi atama. Birok, K. hisoblash ishlarini bajarishdan tashqari uning funksiyasi ancha keng . EHMlarning rivojlanishida K. ning bir necha avlodlarini koʻrsatish mumkin. Bu avlodlar element turlari, konstruktiv-texnologik xususiyatlari, mantiqiy tuzilishi, dastur taʼminoti, texnik tafsilotlari, texnikadan foydalanishning qulaylik darajasi bilan bir-biridan farq qilad",
      description_uz:
        "UZ: Kompyuter (ing . computer — hisoblayman), EHM (Elektron Hisoblash Mashinasi) — oldindan berilgan dastur (programma) boʻyicha ishlaydigan avtomatik qurilma. Elektron hisoblash mashinasi (EHM) bilan bir xildagi atama. Birok, K. hisoblash ishlarini bajarishdan tashqari uning funksiyasi ancha keng . EHMlarning rivojlanishida K. ning bir necha avlodlarini koʻrsatish mumkin. Bu avlodlar element turlari, konstruktiv-texnologik xususiyatlari, mantiqiy tuzilishi, dastur taʼminoti, texnik tafsilotlari, texnikadan foydalanishning qulaylik darajasi bilan bir-biridan farq qilad",
      price: 99,
      id: 7,
      unit_ru: "штук",
      unit_en: "ones",
      unit_uz: "дона",
      number: "5",
      status: "open",
    },
    {
      tender: 4,
      name_ru: "1-Принтер",
      name_en: "1-Printer",
      name_uz: "1-Принтер",
      description_ru:
        "RU: Sayyoramiz aholisining aksariyati mavjud bo'lgan barcha printerlar ikki toifaga bo'linganligiga qat'iy ishonadilar: oddiy va \"bosma, nusxa ko'chirish va skanerlay oladiganlar\", boshqacha qilib aytganda, ular har qanday bosib chiqarish jarayonlarini amalga oshiradilar. Biroq, aslida, ushbu turdagi ofis uskunalari juda ko'p turli xil tasniflarga ega, ularning mavjudligini ko'pchilik bilmaydi.",
      description_en:
        "EN: Sayyoramiz aholisining aksariyati mavjud bo'lgan barcha printerlar ikki toifaga bo'linganligiga qat'iy ishonadilar: oddiy va \"bosma, nusxa ko'chirish va skanerlay oladiganlar\", boshqacha qilib aytganda, ular har qanday bosib chiqarish jarayonlarini amalga oshiradilar. Biroq, aslida, ushbu turdagi ofis uskunalari juda ko'p turli xil tasniflarga ega, ularning mavjudligini ko'pchilik bilmaydi.",
      description_uz:
        "UZ: Sayyoramiz aholisining aksariyati mavjud bo'lgan barcha printerlar ikki toifaga bo'linganligiga qat'iy ishonadilar: oddiy va \"bosma, nusxa ko'chirish va skanerlay oladiganlar\", boshqacha qilib aytganda, ular har qanday bosib chiqarish jarayonlarini amalga oshiradilar. Biroq, aslida, ushbu turdagi ofis uskunalari juda ko'p turli xil tasniflarga ega, ularning mavjudligini ko'pchilik bilmaydi.",
      price: 45,
      id: 6,
      unit_ru: "штук",
      unit_en: "ones",
      unit_uz: "дона",
      number: "5",
      status: "open",
    },
  ],
  fileInfo: {
    filesize: "13.92 kb",
    extension: ".docx",
    file: "/media/tender/files/askug-01122.docx",
  },
  status: true,
  slug: "8990",
};

const TenderDetail = ({ data }) => {
  // const results = backAPI;
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const tenderFinalInfo = tenderInfoFinalTable(data, currentLanguage);

  const classes = useStyles();
  return (
    <BlockLayout
      title="Tenderlar"
      breadcrumbNames={[
        "Bosh sahifa",
        "Biznesga oid",
        "Tenderlar",
        data.company[`name_${currentLanguage}`],
        data[`title_${currentLanguage}`],
      ]}
    >
      <Typography variant="h4" color="primary">
        {data[`title_${currentLanguage}`]}
      </Typography>
      <Divider className={classes.dividerColor} />
      {data.tenderlots.map((item, i) => (
        <Box key={i} my={3}>
          <Typography variant="h5">
            {item[`name_${currentLanguage}`]}
          </Typography>
          <Typography>{item[`description_${currentLanguage}`]}</Typography>
          <TenderTableStart item={item} />
        </Box>
      ))}

      <Box my={3}>
        <Typography variant="h4" color="primary">
          {t("Basic requirements")}
        </Typography>
        <Divider className={classes.dividerColor} />
        <Box my={3}>
          <HtmlConverter
            htmlString={data[`asosiy_talablar_${currentLanguage}`]}
          />
        </Box>
        <Box my={3}>
          <Typography variant="h4" color="primary">
            {t("Lot Instructions")}
          </Typography>
          <Divider className={classes.dividerColor} />
          <Box my={3} className={classes.filePos}>
            <FileBlock fileInfo={data.fileInfo} />
          </Box>
        </Box>

        <Box my={3}>
          <Typography variant="h4" color="primary">
            {t("Information about the customer and lot")}
          </Typography>
          <Divider className={classes.dividerColor} />
          <Box my={3}>
            <CompanyTenderTable companyTable={data.company} />
          </Box>
        </Box>

        <Box my={3}>
          <Divider className={classes.dividerColor} />
          <Box my={3}>
            <TenderTable tenderInfoFinalTable={tenderFinalInfo} />
          </Box>
        </Box>
      </Box>
    </BlockLayout>
  );
};

export default TenderDetail;
