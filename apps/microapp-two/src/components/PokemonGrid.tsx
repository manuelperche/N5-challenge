import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemons } from "../context/PokemonContext";

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

const PokemonGrid: React.FC = () => {
  const { pokemons } = usePokemons();

  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonGrid;
