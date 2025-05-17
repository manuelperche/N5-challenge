import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import LanguageSwitcher from "./components/LanguageSwitcher";
import i18n from "./utils/i18n";

import RickAndMorty from "microappOne/App";
import Pokedex from "microappTwo/App";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  margin-bottom: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`;

const Button = styled.button<{ $active: boolean }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background: ${(props) => (props.$active ? "#646cff" : "#f0f0f0")};
  color: ${(props) => (props.$active ? "white" : "#333")};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    background: ${(props) => (props.$active ? "#535bf2" : "#e0e0e0")};
  }
`;

type Microapp = "rick-and-morty" | "pokedex";

const App: React.FC = () => {
  const { t } = useTranslation();
  const [activeApp, setActiveApp] = useState<Microapp>("pokedex");
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || "en");

  const handleLanguageChange = (lng: string) => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("app-language", lng);
    window.dispatchEvent(new Event("languageChanged"));
  };

  return (
    <Container>
      <LanguageSwitcher
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <Title>{t("greeting")}</Title>

      <Nav>
        <Button
          $active={activeApp === "pokedex"}
          onClick={() => setActiveApp("pokedex")}
        >
          Pokedex
        </Button>
        <Button
          $active={activeApp === "rick-and-morty"}
          onClick={() => setActiveApp("rick-and-morty")}
        >
          Rick and Morty
        </Button>
      </Nav>

      {activeApp === "rick-and-morty" && <RickAndMorty />}
      {activeApp === "pokedex" && <Pokedex />}

      {/* <Subtitle>{t("microappTwoTitle")}</Subtitle>
      <Suspense fallback={t("loadingCard")}> */}
        {/* <Card /> */}
      {/* </Suspense> */}
    </Container>
  );
};

export default App;
