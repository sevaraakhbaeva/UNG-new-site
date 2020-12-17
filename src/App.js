import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MainContainer from "components/MainContainer";
// import Navbar from "components/Navbar";
import Navbar from "components/navbar/index";
import Footer from "components/Footer";
import HistoryContainer from "components/HistoryContainer";
import StructSubContainer from "components/StructSubContainer";
import NeftBazaContainer from "components/NeftBazaContainer";
import ManagementContainer from "components/ManagementContainer";
import NewsContainer from "components/NewsContainer";
import NewsDetailContainer from "components/NewsDetailContainer";
import ContactsContainer from "components/ContactsContainer";
import AnnouncementContainer from "components/AnnouncementContainer";
// import LocalizationContainer from "components/LocalizationContainer";
import FAQContainer from "components/FAQContainer";
import ProductsContainer from "components/ProductsContainer";
import TextContainer from "components/TextContainer";

import PagesWithFilesContainer from "components/PagesWithFilesContainer";
import {
  titleOfTransparentData,
  transparentDataList,
} from "constants/transparentData";
import { titleOfLocalization, listOfFiles } from "constants/localizationData";
import {
  filesBusinessPlanData,
  titlesOfLocalNormativeActs,
  filesLocalNormativeActs,
  filesScienTech,
  filesShareCapital,
  filesCharterRegulation,
  filesCorporateGovernance,
  filesReports,
  titlesOfReports,
} from "constants/filesData";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ManagerDetailContainer from "components/ManagerDetailContainer";
import TenderContainer from "components/TenderContainer";
import TenderDetailContainer from "components/TenderDetailContainer";
import SupervisorContainer from "components/SupervisorContainer";
import AuditContainer from "components/AuditContainer";
import PagesWithFilesWithoutSideBar from "components/PagesWithFilesWithoutSideBar";
import ImageContainer from "components/ImageContainer";
import PhotoLibContainer from "components/PhotoLibContainer";
import VideoLibContainer from "components/VideoLibContainer";

import {
  aimData,
  legalInfoData,
  strategyData,
  investmentProjectsData,
  ungStatementData,
  againstCorruptionData,
} from "constants/textData";

import TextLocalizationContainer from "components/TextLocalizationContainer";
import ScrollToTop from "components/ScrollToTop";
import { useTranslation } from "react-i18next";
import OilBaseJsonGenerator from "utils/OilBaseJsonGenerator";
const THEME = createMuiTheme({
  typography: {
    fontFamily: "LabGrotesque, Calibri, sans-serif",
    fontSize: 14,
    body1: {
      lineHeight: "160%",
      fontSize: 16,
      fontWeight: "normal",
      margin: "10px 0",
      "@media (min-width:1920px)": {
        fontSize: 24,
      },
      "@media (max-width:1920px)": {
        fontSize: 16,
      },
      "@media (max-width:960px)": {
        fontSize: 14,
      },
      "@media (max-width:600px)": {
        fontSize: 12,
      },
    },
    button: {
      textTransform: "none",
    },
    h3: {
      fontSize: "30px",
      fontWeight: "bold",
      lineHeight: "auto",
      "@media (min-width:1920px)": {
        fontSize: 36,
      },
      "@media (max-width:1920px)": {
        fontSize: 30,
      },
      "@media (max-width:960px)": {
        fontSize: 26,
      },
      "@media (max-width:600px)": {
        fontSize: 20,
      },
    },
    h4: {
      fontSize: "22px",
      fontWeight: "bolder",
      lineHeight: "160%",
      "@media (min-width:1920px)": {
        fontSize: 26,
      },
      "@media (max-width:1920px)": {
        fontSize: 22,
      },
      "@media (max-width:960px)": {
        fontSize: 20,
      },
      "@media (max-width:600px)": {
        fontSize: 18,
      },
    },
    h5: {
      fontSize: "16px",
      fontWeight: "bolder",
      lineHeight: "160%",
      "@media (min-width:1920px)": {
        fontSize: 20,
      },
      "@media (max-width:1920px)": {
        fontSize: 16,
      },
      "@media (max-width:960px)": {
        fontSize: 14,
      },
      "@media (max-width:600px)": {
        fontSize: 12,
      },
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
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/generate">
              <OilBaseJsonGenerator />
            </Route>
            <Route exact path="/">
              <MainContainer />
            </Route>

            {/* ===================== ABOUT ===================== */}
            <Route path="/about/history">
              <HistoryContainer />
            </Route>
            <Route path="/about/departments">
              <ImageContainer
                imgUrl="departments.svg"
                title="Organizational structure"
                heading="Organizational structure of the executive body of JSC «Uzbekneftegaz»"
                breadcrumbNames={["About us"]}
                lastChangesText={`01-${t("months.December")} 2020`}
              />
            </Route>
            <Route path="/about/structure/storages/:id">
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
            <Route path="/about/aims">
              <TextLocalizationContainer content="aimData" />
            </Route>
            <Route path="/about/supervisor">
              <SupervisorContainer />
            </Route>

            <Route path="/about/audit">
              <AuditContainer />
            </Route>

            <Route path="/about/strategy">
              <TextContainer isHtml textPageInfo={strategyData} />
            </Route>
            <Route path="/about/business-plan">
              <PagesWithFilesWithoutSideBar
                filesInfo={filesBusinessPlanData}
                title="Implementation of the basic parameters of a business plan"
                breadCrumbsTitle={["About us"]}
              />
            </Route>
            <Route path="/about/scientech">
              <PagesWithFilesWithoutSideBar
                filesInfo={filesScienTech}
                title="Scientific and Technical Council"
                breadCrumbsTitle={["About us"]}
              />
            </Route>

            <Route path="/about/regulation/:id">
              <PagesWithFilesContainer
                title="Regulations"
                breadCrumbsTitle={["About us"]}
              />
            </Route>
            <Route path="/about/regulation">
              <Redirect to="/about/regulation/1" />
            </Route>

            <Route path="/about/contacts">
              <ContactsContainer />
            </Route>
            <Route path="/about/faq">
              <FAQContainer />
            </Route>

            {/* ===================== BUSINESS ===================== */}
            <Route path="/business/legal-info">
              <TextContainer isHtml textPageInfo={legalInfoData} />
            </Route>

            <Route path="/business/products">
              <ProductsContainer />
            </Route>
            <Route path="/business/tender/detail/:slug">
              <TenderDetailContainer />
              {/* <TenderDetail /> */}
            </Route>
            <Route path="/business/tender/:id/:page">
              <TenderContainer />
            </Route>
            <Route
              exact
              path="/business/tender/:id"
              render={(props) => (
                <Redirect to={`/business/tender/${props.match.params.id}/1`} />
              )}
            />
            <Route path="/business/tender">
              <Redirect to="/business/tender/1/1" />
            </Route>

            <Route path="/business/localization/:id/sub/:subId">
              <PagesWithFilesContainer
                title="Localization"
                breadCrumbsTitle={["To business"]}
                url={"/business/localization"}
              />
            </Route>
            <Route path="/business/localization">
              <Redirect to="/business/localization/1" />
            </Route>

            {/* ===================== SHAREHOLDERS ===================== */}
            <Route path="/shareholders/share-capital">
              <PagesWithFilesWithoutSideBar
                filesInfo={filesShareCapital}
                title="Share capital structure"
                breadCrumbsTitle={["Investor and Shareholder"]}
              />
            </Route>

            <Route path="/shareholders/announcements">
              <AnnouncementContainer />
            </Route>
            <Route path="/shareholders/open/:id">
              <PagesWithFilesContainer
                title="Disclosures Information"
                breadCrumbsTitle={["Investor and Shareholder"]}
              />
            </Route>
            <Route path="/shareholders/open">
              <Redirect to="/shareholders/open/1" />
            </Route>

            <Route path="/shareholders/charter-regulations">
              <PagesWithFilesWithoutSideBar
                filesInfo={filesCharterRegulation}
                title="Charter and internal documents"
                breadCrumbsTitle={["Investor and Shareholder"]}
              />
            </Route>
            <Route path="/shareholders/corporate-governance">
              <PagesWithFilesWithoutSideBar
                filesInfo={filesCorporateGovernance}
                title="Corporation Control Codex"
                breadCrumbsTitle={["Investor and Shareholder"]}
              />
            </Route>
            <Route path="/shareholders/reports/:id">
              <PagesWithFilesContainer
                title="Reports"
                breadCrumbsTitle={["Investor and Shareholder"]}
              />
            </Route>
            <Route path="/shareholders/reports">
              <Redirect to="/shareholders/reports/1" />
            </Route>

            <Route path="/shareholders/investment-projects">
              <TextContainer isHtml textPageInfo={investmentProjectsData} />
            </Route>

            {/* ===================== NEWS ===================== */}
            <Route path="/press/page/:id">
              <NewsDetailContainer />
            </Route>
            <Route path="/press/:page">
              <NewsContainer />
            </Route>
            <Route path="/press">
              <Redirect to="/press/1" />
            </Route>
          </Switch>

          {/* ===================== YOUTH CENTER ===================== */}
          <Route path="/youth">
            <ImageContainer
              imgUrl="youth_center.svg"
              title="Organizational structure of the youth center"
              heading=""
              breadcrumbNames={["Youth policy"]}
              lastChangesText="06-sentabr 2019"
            />
          </Route>
          {/*<Route path="/youth/photo">*/}
          {/*  <PhotoLibContainer />*/}
          {/*</Route>*/}
          {/*<Route path="/youth/video">*/}
          {/*  <VideoLibContainer />*/}
          {/*</Route>*/}

          {/* ===================== Anti-corruption ===================== */}
          <Route path="/anti-corruption/ung-statement">
            <TextContainer isHtml textPageInfo={ungStatementData} />
          </Route>

          <Route path="/anti-corruption/local-regulations">
            <PagesWithFilesWithoutSideBar
              filesInfo={filesCorporateGovernance}
              title="Local regulatory documents"
              breadCrumbsTitle={["Against corruption"]}
            />
          </Route>

          <Route path="/anti-corruption/aginst-corruption">
            <TextContainer isHtml textPageInfo={againstCorruptionData} />
          </Route>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
