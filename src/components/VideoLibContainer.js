import React from "react";
import { Typography, Box } from "@material-ui/core";
import BlockLayout from "./BlockLayout";
import { videoLibraryData } from "../constants/photoLibraryData";

const VideoLibContainer = () => {
  return (
    <BlockLayout
      title="Медиа кутибхона"
      breadcrumbNames={["Bosh sahifa", "Matbuot markazi ", "Медиа кутибхона"]}
    >
      {videoLibraryData.map((folder, i) => (
        <Box mt={i !== 0 ? 8 : 0}>
          <Typography variant="h3" color="primary">
            {folder.title}
          </Typography>
          <Typography color="secondary">{folder.date}</Typography>
          <div dangerouslySetInnerHTML={{ __html: folder.videoFrame }} />
        </Box>
      ))}
    </BlockLayout>
  );
};

export default VideoLibContainer;
