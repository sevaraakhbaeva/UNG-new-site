import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";

import FileBlock from "./FileBlock";
import SideMenu from "./SideMenu";
import BlockLayout from "./BlockLayout";
const useStyles = makeStyles({
  titleMargin: {
    marginTop: 40,
    marginBottom: 40,
  },
});

const titleOfLocalization = {
  0: "Ишлаб чиқаришни маҳаллийлаштириш",
  1: "«Ўзбекнефтгаз» АЖнинг маҳаллийлаштириш дастури",
  2: "Импортни қисқартиришнинг мақсадли кўрсаткичлари",
  3: "Моддий-техник ресурслар ва хизматларга бўлган эҳтиёж",
  4: "Тадбиркорлик субъектлари учун",
  5: "Саноат ярмаркаси ва кооперация биржаси",
};
const listOfFiles = {
  0: [
    {
      name:
        "Маҳаллийлаштириш ва кооперация алоқаларини кенгайтириш департаментининг норматив-ҳуқуқий ҳужжатлар Рўйхати",
      extension: "word",
      size: "2.6 MB",
      url: "",
    },
  ],
  1: [
    {
      name: '"ЎЗБЕКНЕФТГАЗ" АЖнинг 2020 йил учун Маҳаллийлаштириш дастури',
      extension: "excel",
      size: "3.0 MB",
      url: "",
    },
    {
      name: "Программа локализации АО «Узбекнефтегаз» на 2020-2021 годы",
      extension: "ppt",
      size: "3.0 MB",
      url: "",
    },
  ],
  2: [
    {
      name:
        '"ЎЗБЕКНЕФТГАЗ" АЖнинг 2020-йил учун маҳсулотлар ишлаб чиқаришни маҳаллийлаштириш ва тармоқлараро саноат кооперациясини кенгайтириш орқали импортни қисқартириш прогноз кўрсатгичлари тўғрисида МАЪЛУМОТ',
      extension: "excel",
      size: "3.5 MB",
      url: "",
    },
  ],
  3: [
    {
      name:
        "Потребность в валютных МТР, материалах и комплектующих на 2020 год",
      extension: "excel",
      size: "3.5 MB",
      url: "",
    },
  ],
  4: [
    {
      name:
        "Потребность в валютных МТР, материалах и комплектующих на 2020 год",
      extension: "word",
      size: "4.5 MB",
      url: "",
    },
  ],
  5: [
    {
      name: "Ҳудудий саноат ярмаркаси ва кооперация биржасини ўтказиш Жадвали",
      extension: "word",
      size: "1.7 MB",
      url: "",
    },
  ],
};

const LocalizationContainer = () => {
  const classes = useStyles();
  let { id } = useParams();
  const nameOfSubmenu = titleOfLocalization[id];
  const filesOfSubmenu = listOfFiles[id];

  return (
    <BlockLayout
      title="Маҳаллийлаштириш"
      breadcrumbNames={[
        "Bosh sahifa",
        "Бизнесга оид",
        "Маҳаллийлаштириш",
        nameOfSubmenu,
      ]}
    >
      <Typography className={classes.titleMargin} variant="h4" color="primary">
        {nameOfSubmenu}
      </Typography>
      <Grid container spacing={3}>
        <Grid
          item
          container
          xs={12}
          md={8}
          lg={9}
          direction="column"
          justify="flex-start"
        >
          {filesOfSubmenu.map((fileInfo) => (
            <Box mb={3}>
              <Grid item>
                <FileBlock fileInfo={fileInfo} />
              </Grid>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <SideMenu
            title="Маҳаллийлаштириш"
            listOfMenu={titleOfLocalization}
            activeId={id}
            url="/business/localization"
          />
        </Grid>
      </Grid>
    </BlockLayout>
  );
};

export default LocalizationContainer;
