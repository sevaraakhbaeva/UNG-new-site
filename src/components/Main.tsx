import React from "react";
import Slider from "./CusSlider";
import News from "./News";
import Parallax from "./Parallax";
import Ratings from "./Ratings";
import DigitalTransformation from "./DigitalTransformation";
import { Divider } from "@material-ui/core";
import Partners from "./Partners";
import Table from "./Table";
import Map from "./Map";

const Main = () => {
  return (
    <>
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
    </>
  );
};

export default Main;
