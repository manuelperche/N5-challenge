import React from "react";
import PokemonList from "./PokemonList";
import i18n from "./utils/i18n";
i18n.init();

const App: React.FC = () => {
  return <PokemonList />;
};

export default App;
