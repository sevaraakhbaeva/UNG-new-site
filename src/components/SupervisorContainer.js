import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import BlockLayout from "./BlockLayout";
import { supervisorData } from "../constants/supervisorData";
import { makeStyles } from "@material-ui/styles";
import HtmlConverter from "./HtmlConverter";
import ManCard from "./ManCard";

const useStyles = makeStyles({
  titleStyle: {
    marginTop: 8,
    marginBottom: 8,
  },
});

const SupervisorContainer = () => {
  const classes = useStyles();
  return (
    <BlockLayout
      title="Кузатув кенгаши"
      breadcrumbNames={["Bosh sahifa", "Kompaniya haqida", "Кузатув кенгаши"]}
    >
      <Typography className={classes.titleStyle}>
        «Ўзбекнефтгаз» АЖ ягона акциядорининг (оддий акциялар эгаси) 2019 йил 11
        июлдаги 10-сонли қарори билан «Ўзбекнефтгаз» АЖ Кузатув кенгаши аъзолари
        қуйидаги таркибда тасдиқланган:
      </Typography>
      <Grid container justify="center" spacing={3}>
        {supervisorData.workers.map((item) => (
          <Grid item xs={12} sm={6} md={4} container justify={"center"}>
            <ManCard
              workerData={item}
              withoutDetailInfo
              picFolderUrl="/kuzatuv"
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={4}>
        <Typography className={classes.titleStyle} align="center">
          Кузатув кенгашининг ваколат доирасига қуйидагилар киради:
        </Typography>
        <HtmlConverter htmlString={supervisorData.dataList} />
      </Box>
    </BlockLayout>
  );
};

export default SupervisorContainer;
