// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
import React from "react";
import CharacterGrid from "./components/CharacterGrid";
import Pagination from "./components/Pagination";
import { CharacterProvider } from "./context/CharacterContext";
import "./utils/i18n";
import i18n from "./utils/i18n";

i18n.init();

function App() {
  return (
    <CharacterProvider>
      <CharacterGrid />
      <Pagination />
    </CharacterProvider>
  );
}

export default App;
