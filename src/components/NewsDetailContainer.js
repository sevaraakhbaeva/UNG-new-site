import React from "react";

import BlockLayout from "./BlockLayout";
import { useParams } from "react-router-dom";

import useGetList from "hooks/crud/useGetList";
import * as API from "constants/api";

import LoadingContainer from "components/LoadingContainer";
import NewsDetails from "components/news/NewsDetails";

const NewsDetailContainer = () => {
  const { id } = useParams();

  return (
    <BlockLayout
      title="Yangiliklar"
      breadcrumbNames={["Bosh sahifa", "Matbuot markazi", "Yangiliklar"]}
    >
      <LoadingContainer
        api={API.NEWS_DETAIL + "/" + id}
        component={NewsDetails}
      />
    </BlockLayout>
  );
};

export default NewsDetailContainer;
