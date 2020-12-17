import React from "react";
import { Paper, Box, Typography, IconButton } from "@material-ui/core";
import { ReactComponent as DownloadIcon } from "icons/files/download.svg";
import { ReactComponent as ExaridIcon } from "icons/files/exarid.svg";
import { ReactComponent as ExcelIcon } from "icons/files/excel.svg";
import { ReactComponent as PdfIcon } from "icons/files/pdf.svg";
import { ReactComponent as WordIcon } from "icons/files/word.svg";
import { ReactComponent as ReferenceIcon } from "icons/files/reference.svg";
import { ReactComponent as WebIcon } from "icons/files/www.svg";
import { ReactComponent as ZipIcon } from "icons/files/zip.svg";
import { ReactComponent as MemoryIcon } from "icons/files/memory.svg";
import { ReactComponent as PptIcon } from "icons/files/ppt.svg";
import { ReactComponent as UngIcon } from "icons/files/ung.svg";
import { ReactComponent as FileIcon } from "icons/files/file.svg";

import { makeStyles } from "@material-ui/styles";
import IconInCircle from "components/IconInCircle";
import IconWithText from "components/IconWithText";
import { ReactComponent as LexuzIcon } from "icons/files/lexuz.svg";
import { useTranslation } from "react-i18next";
import { siteName } from "constants/constants";

import HtmlConverter from "components/HtmlConverter";

const useStyles = makeStyles({
  blockStruct: {
    display: "flex",
    padding: "30px 20px",
  },
  textUnderIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconAtEnd: {
    justifySelf: "flex-end",
    marginLeft: "auto",
  },
  removeHover: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const icons = {
  exarid: { icon: <ExaridIcon />, name: "" },
  ung: { icon: <UngIcon />, name: "" },
  xls: { icon: <ExcelIcon />, name: "XLS" },
  xlsx: { icon: <ExcelIcon />, name: "XLSX" },
  pdf: { icon: <PdfIcon />, name: "PDF" },
  doc: { icon: <WordIcon />, name: "DOC" },
  docx: { icon: <WordIcon />, name: "DOCX" },
  zip: { icon: <ZipIcon />, name: "ZIP" },
  ppt: { icon: <PptIcon />, name: "PPT" },
  pptx: { icon: <PptIcon />, name: "PPTX" },
  lexuz: { icon: <LexuzIcon />, name: "" },
  file: { icon: <FileIcon />, name: "FILE" },
};

const nameOfWebsite = {
  exarid: "www.openinfo.uz",
  lexuz: "www.lex.uz",
};

const FileBlock = ({ fileInfo, style }) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const typeOfFile = fileInfo[`extension_${currentLanguage}`].replace(".", "");
  const isDownload =
    typeOfFile !== "exarid" && typeOfFile !== "ung" && typeOfFile !== "lexuz";

  const isExternalSource = typeOfFile === "exarid" || typeOfFile === "lexuz";

  return (
    <Paper elevation={3}>
      <Box style={{ ...style }} className={classes.blockStruct}>
        <Box className={classes.textUnderIcon}>
          {icons[typeOfFile] !== undefined
            ? icons[typeOfFile]["icon"]
            : icons["file"]["icon"]}
          <Typography variant="h5" color="primary">
            {icons[typeOfFile] !== undefined
              ? icons[typeOfFile]["name"]
              : icons["file"]["name"]}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mx={3}
        >
          <Typography variant="h5">
            <HtmlConverter
              htmlString={fileInfo[`filename_${currentLanguage}`]}
            />
          </Typography>
          <Typography>
            <HtmlConverter
              htmlString={fileInfo[`description_${currentLanguage}`]}
            />
          </Typography>
          {isDownload && (
            <Box>
              <IconWithText
                Icon={<MemoryIcon />}
                text={`Hajimi: ${fileInfo[`filesize_${currentLanguage}`]}`}
                textStyle={{ fontSize: 14, color: "#999999" }}
              />
            </Box>
          )}
          {isExternalSource && (
            <Box>
              <IconWithText
                Icon={<WebIcon />}
                text={`Веб-сайт: ${nameOfWebsite[typeOfFile]}`}
                textStyle={{ fontSize: 14, color: "#999999" }}
              />
            </Box>
          )}
        </Box>
        <Box className={classes.iconAtEnd}>
          {isDownload ? (
            <IconButton
              component="a"
              href={fileInfo[`fileurl_${currentLanguage}`]}
              className={classes.removeHover}
            >
              <IconInCircle
                scale={55}
                borderWidth={2}
                Icon={<DownloadIcon />}
              />
            </IconButton>
          ) : (
            <IconButton
              component="a"
              href={fileInfo[`fileurl_${currentLanguage}`]}
              className={classes.removeHover}
            >
              <ReferenceIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

FileBlock.defaultProps = {
  style: {},
};

export default FileBlock;
