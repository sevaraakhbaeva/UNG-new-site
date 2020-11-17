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
  excel: { icon: <ExcelIcon />, name: "XLS" },
  pdf: { icon: <PdfIcon />, name: "PDF" },
  word: { icon: <WordIcon />, name: "DOC" },
  zip: { icon: <ZipIcon />, name: "ZIP" },
};

const FileBlock: FC<FileBlockProps> = ({ fileInfo, style }) => {
  const classes = useStyles();
  const typeOfFile: string = fileInfo.extension;
  return (
    <Paper>
      <Box style={{ ...style }} className={classes.blockStruct}>
        <Box className={classes.textUnderIcon}>
          {icons[typeOfFile].icon}
          <Typography variant="h5" color="primary">
            {icons[typeOfFile].name}
          </Typography>
        </Box>
        <Box mx={3}>
          <Typography variant="h5">{fileInfo.name}</Typography>
          <Typography>{fileInfo.description}</Typography>
          <Box>
            <IconWithText
              Icon={<MemoryIcon />}
              text={`Hajimi: ${fileInfo.size}`}
              textStyle={{ fontSize: 14, color: "#999999" }}
            />
          </Box>
        </Box>
        <Box className={classes.iconAtEnd}>
          <IconInCircle scale={60} borderWidth={2} Icon={<DownloadIcon />} />
        </Box>
      </Box>
    </Paper>
  );
};

FileBlock.defaultProps = {
  style: {},
};

export default FileBlock;
