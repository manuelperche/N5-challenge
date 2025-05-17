import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import { useCharacters } from "../context/CharacterContext";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CharacterGrid: React.FC = () => {
  const { characters } = useCharacters();

  return (
    <Grid>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Grid>
  );
};

export default CharacterGrid;
