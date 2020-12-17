import React from "react";
import { useParams } from "react-router-dom";
import LoadingContainer from "components/LoadingContainer";
import TenderDetail from "components/tenders/TenderDetail";
import * as API from "constants/api";
import Slider from "components/CusSlider";

const SliderContainer = () => {
  return <LoadingContainer api={API.SLIDER} component={Slider} />;
};

export default SliderContainer;
