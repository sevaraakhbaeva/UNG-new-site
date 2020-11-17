import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HistoryContainer from "./components/HistoryContainer";
import StructSubContainer from "./components/StructSubContainer";
import NeftBazaContainer from "./components/NeftBazaContainer";
import ManagementContainer from "./components/ManagementContainer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";
import ManagerDetailContainer from "./components/ManagerDetailContainer";
import TenderContainer from "./components/TenderContainer";
import TenderDetailContainer from "./components/TenderDetailContainer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const THEME = createMuiTheme({
  typography: {
    fontFamily: "LabGrotesque, Calibri, sans-serif",
    fontSize: 14,
    body1: {
      lineHeight: "160%",
      fontSize: 16,
      fontWeight: "normal",
      margin: "10px 0",
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
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <MainContainer />
            </Route>
            <Route path="/about/history">
              <HistoryContainer />
            </Route>
            <Route path="/about/structure/taxiatosh">
              <NeftBazaContainer />
            </Route>
            <Route path="/about/structure">
              <StructSubContainer />
            </Route>
            <Route
              path="/about/management/:id"
              children={<ManagerDetailContainer />}
            />
            <Route path="/about/management">
              <ManagementContainer />
            </Route>

            <Route path="/business/tender/:id/:tenderId">
              <TenderDetailContainer />
            </Route>
            <Route path="/business/tender/:id">
              <TenderContainer />
            </Route>
            <Route path="/business/tender">
              <Redirect to="/business/tender/1" />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
