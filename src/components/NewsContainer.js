import React from "react";
import BlockLayout from "./BlockLayout";
import * as API from "constants/api";
import News from "components/news/News";
import LoadingContainer from "components/LoadingContainer";
import { useParams } from "react-router-dom";

const NewsContainer = () => {
  const { page } = useParams();

  return (
    <BlockLayout
      title="Yangiliklar"
      breadcrumbNames={["Bosh sahifa", "Matbuot markazi", "Yangiliklar"]}
    >
      <LoadingContainer
        api={API.NEWS_LIST + "?page=" + page}
        component={News}
      />
    </BlockLayout>
  );
};

export default NewsContainer;
