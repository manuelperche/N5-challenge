import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import RickAndMorty from "microappOne/RickAndMorty";
import LanguageSwitcher from "./components/LanguageSwitcher";
// import Card from "microappTwo/Card";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 2.4em;
  line-height: 1.1;
  margin: 2rem 0 1rem;
  text-align: center;
`;

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <LanguageSwitcher />

      <Title>{t("greeting")}</Title>

      <Subtitle>{t("microappOneTitle")}</Subtitle>

      <RickAndMorty />

      {/* <Subtitle>{t("microappTwoTitle")}</Subtitle>
      <Suspense fallback={t("loadingCard")}>
        <Card />
      </Suspense> */}
    </Container>
  );
};

export default App;
