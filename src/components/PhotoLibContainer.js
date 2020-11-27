import React, { useState } from "react";
import { Typography, Box, Link, Grid } from "@material-ui/core";
import BlockLayout from "./BlockLayout";
import { photoLibraryData } from "../constants/photoLibraryData";
import { find } from "ramda";
import PhotoDialog from "./PhotoDialog";
import Button from "./Button";

let currentImageIdx = -1;
const PhotoLibContainer = () => {
  const [folderId, setFolderId] = useState(0);

  const handleOnClick = (folderId, imageIdx) => {
    setFolderId(folderId);
    currentImageIdx = imageIdx;
  };

  const handleClose = () => {
    setFolderId(0);
    currentImageIdx = -1;
  };
  const pathToGalleryFolder = "/images/photoGallery/";

  const currentFolderObject = find(
    (folder) => folder.id === folderId,
    photoLibraryData
  );

  const open = Boolean(folderId);
  return (
    <BlockLayout
      title="Фотолавҳалар"
      breadcrumbNames={["Bosh sahifa", "Matbuot markazi ", "Фотолавҳалар"]}
    >
      {photoLibraryData.map((folder, i) => (
        <Box mt={i !== 0 ? 8 : 0}>
          <Typography variant="h3" color="primary">
            {folder.title}
          </Typography>
          <Typography color="secondary">{folder.date}</Typography>
          <Grid container spacing={3} justify="center">
            {folder.photoUrls.map((url, i) => (
              <Grid xs={12} md={6} lg={4} item>
                <Link
                  style={{ cursor: "pointer" }}
                  onClick={() => handleOnClick(folder.id, i)}
                >
                  <img
                    style={{ width: "100%", maxWidth: 500 }}
                    alt={`${folder.title} ${i}`}
                    src={pathToGalleryFolder + url}
                  />
                </Link>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button>Barcha suratlar</Button>
            </Grid>
          </Grid>
        </Box>
      ))}

      {open && (
        <PhotoDialog
          open={open}
          handleClose={handleClose}
          currentFolderObject={currentFolderObject}
          currentImageIdx={currentImageIdx}
          pathToGalleryFolder={pathToGalleryFolder}
        />
      )}
    </BlockLayout>
  );
};

export default PhotoLibContainer;
