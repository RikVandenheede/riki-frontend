import { useContext, useEffect, useState } from "react";

import { AppContext } from "../provider/AppProvider";
import { useFetch } from "../hooks/useFetch";

import { getIcons, getArticles } from "../utils/api";
import { text } from "../utils/text";

import { Layout } from "../components/molecules/Layout";
import { DashboardSection } from "../components/molecules/DashboardSection";

export const Dashboard = () => {
  const { isloggedIn, setIsLoggedIn, accesToken, refreshToken } =
    useContext(AppContext);

  const {
    data: icons,
    errors: iconErrors,
    isLoading: iconsLoading,
  } = useFetch(getIcons, accesToken);

  const {
    data: articles,
    errors: articlesErros,
    isLoading: articlesLoading,
  } = useFetch(getArticles, accesToken);

  const [filterOption, setFilterOption] = useState<string>("Show all");

  useEffect(() => {
    if (!isloggedIn || iconErrors.length > 0) {
      setIsLoggedIn(false);
    }
  });

  return (
    <Layout
      loggedIn={isloggedIn && iconErrors.length <= 0}
      filterOption={filterOption}
      setFilterOption={setFilterOption}
    >
      {iconsLoading ? (
        <p>Loading...</p>
      ) : (
        <DashboardSection
          type="icon"
          title="Icons"
          description={text.icon_intro}
          data={icons}
        />
      )}
    </Layout>
  );
};
