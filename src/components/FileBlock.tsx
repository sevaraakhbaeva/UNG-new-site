import React, { FC, ReactNode } from "react";
import { Paper, Box, Typography } from "@material-ui/core";
import { ReactComponent as DownloadIcon } from "../icons/files/download.svg";
import { ReactComponent as ExaridIcon } from "../icons/files/exarid.svg";
import { ReactComponent as ExcelIcon } from "../icons/files/excel.svg";
import { ReactComponent as PdfIcon } from "../icons/files/pdf.svg";
import { ReactComponent as WordIcon } from "../icons/files/word.svg";
import { ReactComponent as ReferenceIcon } from "../icons/files/reference.svg";
import { ReactComponent as WebIcon } from "../icons/files/www.svg";
import { ReactComponent as ZipIcon } from "../icons/files/zip.svg";
import { ReactComponent as MemoryIcon } from "../icons/files/memory.svg";
import { ReactComponent as PptIcon } from "../icons/files/ppt.svg";
import { ReactComponent as UngIcon } from "../icons/files/ung.svg";
import { CSSProperties, makeStyles } from "@material-ui/styles";
import IconInCircle from "./IconInCircle";
import IconWithText from "./IconWithText";

interface FileBlockProps {
  fileInfo: { [index: string]: string };
  style?: CSSProperties;
}

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
});

const icons: {
  [index: string]: {
    [index: string]: ReactNode | string | undefined;
  };
} = {
  exarid: { icon: <ExaridIcon />, name: "" },
  ung: { icon: <UngIcon />, name: "" },
  excel: { icon: <ExcelIcon />, name: "XLS" },
  pdf: { icon: <PdfIcon />, name: "PDF" },
  word: { icon: <WordIcon />, name: "DOC" },
  zip: { icon: <ZipIcon />, name: "ZIP" },
  ppt: { icon: <PptIcon />, name: "PPT" },
};

const FileBlock: FC<FileBlockProps> = ({ fileInfo, style }) => {
  const classes = useStyles();
  const typeOfFile: string = fileInfo.extension;
  const isDownload = typeOfFile !== "exarid" && typeOfFile !== "ung";

  return (
    <Paper elevation={3}>
      <Box style={{ ...style }} className={classes.blockStruct}>
        <Box className={classes.textUnderIcon}>
          {icons[typeOfFile].icon}
          <Typography variant="h5" color="primary">
            {icons[typeOfFile].name}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mx={3}
        >
          <Typography variant="h5">{fileInfo.name}</Typography>
          <Typography>{fileInfo.description}</Typography>
          {isDownload && (
            <Box>
              <IconWithText
                Icon={<MemoryIcon />}
                text={`Hajimi: ${fileInfo.size}`}
                textStyle={{ fontSize: 14, color: "#999999" }}
              />
            </Box>
          )}
        </Box>
        <Box className={classes.iconAtEnd}>
          {isDownload ? (
            <IconInCircle scale={55} borderWidth={2} Icon={<DownloadIcon />} />
          ) : (
            <ReferenceIcon />
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
