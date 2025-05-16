import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Button from "microappOne/Button";
import Card from "microappTwo/Card";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div>
        <span>{t("languageSwitcher")}</span>
        <button onClick={() => changeLanguage("en")} style={{ margin: "5px" }}>
          English
        </button>
        <button onClick={() => changeLanguage("es")} style={{ margin: "5px" }}>
          Español
        </button>
      </div>

      <h1>{t("greeting")}</h1>

      <h2>{t("microappOneTitle")}</h2>
      <Suspense fallback={t("loadingButton")}>
        <Button />
      </Suspense>

      <h2>{t("microappTwoTitle")}</h2>
      <Suspense fallback={t("loadingCard")}>
        <Card />
      </Suspense>

      <p className="read-the-docs">{t("learnMore")}</p>
    </>
  );
}

export default App;
