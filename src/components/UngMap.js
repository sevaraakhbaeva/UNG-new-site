import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const UngMap = () => {
  return (
    <YMaps>
      My awesome application with maps!
      <Map
        width="100%"
        height={500}
        defaultState={{ center: [41.323728, 69.314167], zoom: 13 }}
      >
        <Placemark geometry={[41.305930192079664, 69.28450189235966]} />
        <Placemark geometry={[41.33366291862775, 69.34237801422017]} />
        <Placemark geometry={[41.328049247371496, 69.28392958411038]} />
      </Map>
    </YMaps>
  );
};

export default UngMap;
