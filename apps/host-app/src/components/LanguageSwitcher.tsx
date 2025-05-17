import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18n from "../utils/i18n";

const LANGUAGE_KEY = "app-language";

const LanguageContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

const LanguageButton = styled.button`
  margin: 5px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #646cff;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #535bf2;
  }
`;

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
    localStorage.setItem(LANGUAGE_KEY, lng);
    // Dispatch a custom event that microapps can listen to
    window.dispatchEvent(new Event("languageChanged"));
  };
  return (
    <LanguageContainer>
      <span>{t("languageSwitcher")}</span>
      <LanguageButton onClick={() => changeLanguage("en")}>
        English
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage("es")}>
        Español
      </LanguageButton>
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
