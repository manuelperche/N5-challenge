// src/components/CharacterList.tsx
import React from "react";
import CharacterGrid from "./components/CharacterGrid";
import Pagination from "./components/Pagination";
import { CharacterProvider } from "./context/CharacterContext";

const RickAndMorty: React.FC = () => {
  return (
    <CharacterProvider>
      <CharacterGrid />
      <Pagination />
    </CharacterProvider>
  );
};

export default RickAndMorty;
