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

const Footer = () => {
  return (
    <Block withBackground>
      <Grid direction="column" container>
        <Grid item container style={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={6}>
            <Box style={{ width: "80%" }}>
              <img
                alt="UNG logo"
                src="/images/logo.png"
                width="250"
                style={{ marginBottom: "30px" }}
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
              style={{ marginBottom: "15px" }}
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
        <Grid item container>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" style={{ marginBottom: "15px" }}>
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
            <Typography variant="h5" style={{ marginBottom: "15px" }}>
              Bizni ijtimoiy tarmoqlarda kuzatib boring
            </Typography>
            <Box>
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
      </Grid>
    </Block>
  );
};

export default Footer;
