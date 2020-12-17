import React from "react";
import SliderContainer from "components/SliderContainer";
import News from "./News";
import Parallax from "./Parallax";
import Ratings from "./Ratings";
import DigitalTransformation from "./DigitalTransformation";
import { Divider } from "@material-ui/core";
import Partners from "./Partners";
import Map from "./Map";

const MainContainer = () => {
  return (
    <>
      <SliderContainer />
      <News />
      <Parallax />
      <Ratings />
      <Divider />
      <DigitalTransformation />
      <Divider />
      <Partners />
      <Divider />
      {/* <Table /> */}
      <Map />
      <Divider />
    </>
  );
};

export default MainContainer;
