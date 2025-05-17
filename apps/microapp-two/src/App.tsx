import React from "react";
import PokemonGrid from "./components/PokemonGrid";
import Pagination from "./components/Pagination";
import { PokemonProvider } from "./context/PokemonContext";
import i18n from "./utils/i18n";
i18n.init();

const App: React.FC = () => {
  return (
    <PokemonProvider>
      <PokemonGrid />
      <Pagination />
    </PokemonProvider>
  );
};

export default App;
