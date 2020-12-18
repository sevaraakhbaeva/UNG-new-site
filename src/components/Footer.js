import React from "react";
import { Grid, Typography, Box, IconButton } from "@material-ui/core";
import Block from "./Block";
import { ReactComponent as TwitterIcon } from "../icons/Social/twitter.svg";
import { ReactComponent as FacebookIcon } from "../icons/Social/facebook.svg";
import { ReactComponent as InstagramIcon } from "../icons/Social/instagram.svg";
import { ReactComponent as TelegramIcon } from "../icons/Social/telegram.svg";
import { ReactComponent as VkIcon } from "../icons/Social/vk.svg";
import { ReactComponent as YoutubeIcon } from "../icons/Social/youtube.svg";
import { ReactComponent as LinkedInIcon } from "../icons/Social/linkedin.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  typographyMargin: { marginBottom: "15px" },
  zeroMargin: { margin: 0 },
  imgStyle: {
    width: "60%",
    marginBottom: 30,
    maxWidth: 150,
  },
  socialContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Block withBackground>
      <Grid direction="column" container>
        <Grid item container style={{ marginBottom: 20 }}>
          <Grid item xs={12} md={6}>
            <Box style={{ width: "80%" }}>
              <img
                alt="UNG logo"
                src="/images/logo.png"
                className={classes.imgStyle}
              />
              <Typography
                color="primary"
                variant="h5"
                style={{ marginBottom: "10px" }}
              >
                © 1992 - 2020 Uzbekneftegaz milliy holding kompaniyasi
              </Typography>
              <Typography>
                100047, O’zbekiston Respublikasi, Tashkent shahar, Yashnobod
                tumani, Istiqbol ko‘chasi, 21-uy.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              color="primary"
              variant="h5"
              className={classes.typographyMargin}
            >
              Bog’lanish uchun ma’lumotlar:
            </Typography>

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
        </Grid>
        <Grid item container style={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.typographyMargin}>
              Ish tartibi:
            </Typography>{" "}
            <Typography>
              <Typography component="span" color="secondary">
                Ish kunlari:
              </Typography>{" "}
              dushanbadan jumagacha. |{" "}
              <Typography component="span" color="secondary">
                Dam olish kunlari:
              </Typography>{" "}
              shanba va yakshanba. <br />
              <Typography component="span" color="secondary">
                Ish soati:
              </Typography>{" "}
              09:00 dan 18:00 gacha. |{" "}
              <Typography component="span" color="secondary">
                Tushlik:
              </Typography>{" "}
              13:00 dan 14:00 gacha.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.typographyMargin}>
              Bizni ijtimoiy tarmoqlarda kuzatib boring
            </Typography>
            <Box className={classes.socialContainer}>
              <IconButton>
                <TelegramIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <YoutubeIcon />
              </IconButton>
              <IconButton>
                <VkIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Typography variant="h5" className={classes.typographyMargin}>
            Подписаться на наши обновления
          </Typography>
          <FormControl fullWidth>
            <Grid container alignItems="flex-end">
              <TextField
                id="standard-basic"
                label="Введите ваш e-mail"
                style={{ marginRight: 10, width: "50%", maxWidth: 300 }}
                InputLabelProps={{ style: { margin: 0, fontSize: 16 } }}
              />
              <Button>Подписаться</Button>
            </Grid>
          </FormControl>
        </Grid> */}
      </Grid>
    </Block>
  );
};

export default Footer;
