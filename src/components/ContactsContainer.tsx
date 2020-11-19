import React, { FC } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import BlockLayout from "./BlockLayout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dayBlockStyle: (props: any) => ({
    backgroundColor: props.isWeekDay ? "#03A3DF" : "#CCCCCC",
    color: "#FFFFFF",
    width: "100%",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 8,
  }),
  marginTypography: {
    marginBottom: 30,
    marginTop: 20,
  },
});

const regDays = "9:00-18:00";

const days = ["Du", "Se", "Chor", "Pay", "Juma", "Shan", "Yak"];

const ContactsContainer = () => {
  const classes = useStyles();

  return (
    <BlockLayout
      title="Biz bilan bog’lanish"
      breadcrumbNames={["Bosh sahifa", "Kompaniya haqida", "Bog’lanish"]}
    >
      <Grid container>
        <Grid item md={6} xs={12}>
          <Typography>
            <Typography component="span" color="secondary">
              Tel.:
            </Typography>{" "}
            +(99871) 233-57-57, 236-02-10 <br />
            <Typography component="span" color="secondary">
              Devonxona:
            </Typography>{" "}
            +(99871) 236-76-58 <br />
            <Typography component="span" color="secondary">
              Ishonch telefoni:
            </Typography>{" "}
            +(99871) 233-28-88 <br />
            <Typography component="span" color="secondary">
              Bizning pochta manzilimiz:
            </Typography>{" "}
            <Typography component="span" color="primary">
              kans@ung.uz, ung@exat.uz
            </Typography>{" "}
            <br />
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography>
            <Typography component="span" color="secondary">
              Avtobus:
            </Typography>{" "}
            № 63, 83, 96, 129 <br />
            <Typography component="span" color="secondary">
              Marshrutli taksilar:
            </Typography>{" "}
            № 51, 137
            <br />
            <Typography component="span" color="secondary">
              Mo’ljal:
            </Typography>{" "}
            I.M. Gupkina nomidagi Rossiya Universiteti
            <br />
            <br />
          </Typography>
        </Grid>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{
            width: "100%",
          }}
        >
          <Typography
            className={classes.marginTypography}
            align="center"
            variant="h4"
          >
            Ish tartibi
          </Typography>
          <Box display="inline-block">
            {days.map((day) => (
              <DayBlock dayInfo={day} />
            ))}
          </Box>
        </Box>
        <Box></Box>
      </Grid>
    </BlockLayout>
  );
};

interface DayBlockProps {
  dayInfo: string;
}
const DayBlock: FC<DayBlockProps> = ({ dayInfo }) => {
  const isWeekDay = dayInfo !== "Shan" && dayInfo !== "Yak";
  const classes = useStyles({ isWeekDay: isWeekDay });
  return (
    <Box display="inline-block" width={100} mx={1}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
        className={classes.dayBlockStyle}
      >
        <Typography variant="h5" style={{ fontWeight: "normal" }}>
          {dayInfo}
        </Typography>
      </Box>
      <Typography align="center" variant="h5">
        {isWeekDay ? regDays : "-"}
      </Typography>
    </Box>
  );
};

export default ContactsContainer;
