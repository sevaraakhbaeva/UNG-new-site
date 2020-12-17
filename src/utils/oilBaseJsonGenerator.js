import React from "react";
import readXlsxFile from "read-excel-file";

const cols = [
  "number",
  "name",
  "position",
  "phoneNumber",
  "freeHours",
  "address",
  "email",
  "trustNumber",
  // "picUrl",
];

const OilBaseJsonGenerator = () => {
  let results = {};
  const excelToJson = () => {
    const input = document.getElementById("input");
    let oilBaseName = "";
    let oilBaseNameObj = {};
    let oilBaseNameObjIdx = 1;
    let oilBaseIdx;
    let previousValues = {};
    readXlsxFile(input.files[0]).then((rows) => {
      rows.some((row) => {
        let isHeader = false;
        for (let i = 0; i < row.length; i++) {
          let el = row[i];
          if (i === 0 && typeof el === "string") {
            isHeader = true;
            oilBaseName = el;
            results[oilBaseName] = [];
            oilBaseIdx = 0;
            results[oilBaseName][oilBaseIdx] = {};
            oilBaseNameObj[oilBaseNameObjIdx] = oilBaseName;
            oilBaseNameObjIdx++;
            break;
          }
          if (el !== null && el !== undefined) {
            results[oilBaseName][oilBaseIdx][cols[i]] = el;
            previousValues[cols[i]] = el;
          } else {
            results[oilBaseName][oilBaseIdx][cols[i]] = previousValues[cols[i]];
          }
        }
        if (!isHeader) {
          oilBaseIdx++;
          results[oilBaseName][oilBaseIdx] = {};
        }
      });
    });
    // console.log(results);
    console.log(oilBaseNameObj);
  };

  return (
    <>
      <input type="file" id="input" onChange={excelToJson} />
    </>
  );
};

export default OilBaseJsonGenerator;
