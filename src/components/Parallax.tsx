import React from "react";
import Block from "./Block";
import { Grid, Typography, Box } from "@material-ui/core";
import Title from "./Title";
import { default as Button } from "./Button";

const Parallax = () => {
  return (
    <Box
      style={{
        backgroundImage: 'url("/images/main_history.png")',
        // backgroundSize: "contain",
        height: "450px",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Block>
        <Grid style={{ height: "100%" }} container alignItems="center">
          <Grid xs={12} md={6} item>
            <Title>Kompaniya haqida</Title>
            <Typography style={{ marginTop: "40px" }}>
              <b>"O'zbekneftgaz" milliy xolding kompaniyasi</b> - neft va gazni
              geologik qidirish, qazib olish, tashish, saqlash, qayta ishlash va
              sotish bilan shug'ullanadigan o'zbek xolding korporatsiyasi.
              O'zbekistondagi eng yirik davlat kompaniyasi. Tabiiy gaz ishlab
              chiqarish bo'yicha kompaniya dunyoda 11-o'rinni egallaydi. To'liq
              korporativ nomi "O'zbekneftgaz" milliy xolding kompaniyasi.
              Kompaniyaning bosh qarorgohi Toshkent shahrida joylashgan.
            </Typography>
            <Button style={{ marginTop: "40px" }}>Ko’proq ma’lumot</Button>
          </Grid>
        </Grid>
      </Block>
    </Box>
  );
};

export default Parallax;
