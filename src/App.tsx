import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Footer from "./components/Footer";

const THEME = createMuiTheme({
  typography: {
    fontFamily: "LabGrotesque, Calibri, sans-serif",
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
        <Navbar />
        {/* <Main /> */}
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
