import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
// import Navbar from "./components/Navbar";
import { default as Slider } from "./components/CusSlider";
import News from "./components/News";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Parallax from "./components/Parallax";
import Ratings from "./components/Ratings";
import DigitalTransformation from "./components/DigitalTransformation";
import { Divider } from "@material-ui/core";
import Partners from "./components/Partners";
import Table from "./components/Table";
import Map from "./components/Map";
import Footer from "./components/Footer";

const THEME = createMuiTheme({
  typography: {
    fontFamily: "LabGrotesque",
    fontSize: 14,
    body1: {
      lineHeight: "160%",
    },
    button: {
      textTransform: "none",
    },
    h3: {
      fontSize: "30px",
      fontWeight: "bold",
      lineHeight: "auto",
    },
    h4: {
      fontSize: "22px",
      fontWeight: "bolder",
      lineHeight: "160%",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "bolder",
      lineHeight: "160%",
    },
  },
  palette: {
    primary: {
      main: "#03A3DF",
    },
    secondary: {
      main: "#777777",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="App">
        {/* <Navbar /> */}
        <Slider />
        <News />
        <Parallax />
        <Ratings />
        <Divider />
        <DigitalTransformation />
        <Divider />
        <Partners />
        <Divider />
        <Table />
        <Map />
        <Divider />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
