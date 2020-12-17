import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as FinanceIcon } from "../icons/DT_Moliya.svg";
import { ReactComponent as LogisticsIcon } from "../icons/DT_Logistika.svg";
import { ReactComponent as CapitalIcon } from "../icons/DT_Kapital.svg";
import { ReactComponent as WorkerIcon } from "../icons/DT_Xodimlar.svg";
import { ReactComponent as SettingIcon } from "../icons/DT_Setting.svg";
import { ReactComponent as ResourceIcon } from "../icons/DT_Zaxiralar.svg";

import IconInCircle from "./IconInCircle";
import Block from "./Block";
import Title from "./Title";
import { useTranslation } from "react-i18next";
import { ButtonBase } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  titleIcon: {
    fontWeight: "bolder",
    margin: 8,
    width: "70%",
    fontSize: 24,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      margin: 5,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      margin: 0,
    },
  },
  iconStyle: {
    height: 150,
    width: 150,
    [theme.breakpoints.down("sm")]: {
      height: 130,
      width: 130,
    },
  },
  iconContainerStyle: {
    marginTop: 10,
  },
  popOverStyle: {
    padding: "15px 5px",
  },
}));

const digTransformationItems = [
  {
    icon: <FinanceIcon />,
    text: "Finance",
    details: [
      "Снижение затрат на банковские услуги",
      "Снижение общего объема дебиторской задолженности",
      "Снижение просроченной дебиторской задолженности",
      "Снижение трудозатрат на финансовую функцию (Казначейство)",
      "Снижение трудозатрат на финансовую функцию (Учет и отчетность)",
      "Сокращение затрат на аудит",
      "Замедление кредиторской задолженности",
    ],
  },
  {
    icon: <LogisticsIcon />,
    text: "Supply Connection Management",
    details: [
      "Повышение точности оперативного планирования",
      "Снижение затрат на распределение",
      "Улучшение коммерческих условий поставок",
      "Снижение потерь, связанных с простоями транспорта",
      "Снижение общих затрат на транспортировку",
    ],
  },
  {
    icon: <WorkerIcon />,
    text: "Personnel management",
    details: [
      "Повышение производительности всех сотрудников компании",
      "Повышение производительности сотрудников HR-функции",
      "Повышение производительности сотрудников при работе с отчетами по Кадровому делопроизводству и фонда оплаты труда",
      "Снижение потерь при ошибках в расчетах фонда оплаты труда и налогов",
    ],
  },
  {
    icon: <CapitalIcon />,
    text: "Capital construction and investment projects",
    details: [
      "Сокращение доли проектов, выполненных с превышением бюджета",
      "Сокращение доли проектов, закрытых на этапе реализации по причине отсутствия экономического эффекта для Компании",
      "Сокращение доли проектов с низкой экономической ценностью для Компании",
      "Сокращение объема административных затрат",
    ],
  },
  {
    icon: <SettingIcon />,
    text: "Equipment maintenance and repair",
    details: [
      "Сокращение длительности внеплановых остановов",
      "Сокращение количества внеплановых остановов",
      "Повышение чистого инструментального времени работы ремонтного персонала",
      "Оптимизация бюджета на ремонт и техническое обслуживание оборудования",
      "Снижение трудозатрат",
      "Сокращение списаний неликвидов",
      "Высвобождение капитала в запасах",
      "Оптимизация закупок материально-технических ресурсов",
    ],
  },
  {
    icon: <ResourceIcon />,
    text: "Procurement and management of stocks",
    details: [
      "Снижение затрат на закупку",
      "Снижение уровня страховых запасов МТР",
      "Снижение затрат на хранение",
    ],
  },
];
let selectedId = null;
const DigitalTransformation = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    selectedId = id;
  };
  const handleClose = () => {
    setAnchorEl(null);
    selectedId = null;
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Block withBackground>
      <Title>{t("Digital transformation")}</Title>

      <Grid container spacing={2}>
        {digTransformationItems.map((item, i) => (
          <>
            <Grid
              className={classes.iconContainerStyle}
              item
              xs={12}
              sm={6}
              md={4}
              alignItems="center"
              container
              direction="column"
            >
              <Link
                style={{ cursor: "pointer" }}
                onClick={(event) => handleClick(event, i)}
              >
                <IconInCircle Icon={item.icon} className={classes.iconStyle} />
              </Link>
              <Typography className={classes.titleIcon} align="center">
                {t(item.text)}
              </Typography>
            </Grid>
            {selectedId !== null && (
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                elevation={2}
              >
                <Box maxWidth={300} p={2}>
                  {digTransformationItems[selectedId].details.map((detail) => (
                    <Typography>{detail}</Typography>
                  ))}
                </Box>
              </Popover>
            )}
          </>
        ))}
      </Grid>
    </Block>
  );
};

export default DigitalTransformation;
