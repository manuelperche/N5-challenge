import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import i18n from "./utils/i18n";

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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #646cff;
  color: white;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #535bf2;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  color: #666;
  font-size: 0.9em;
`;

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  height: number;
  weight: number;
}

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * itemsPerPage;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
        );
        const data = await response.json();
        setTotalPages(Math.ceil(data.count / itemsPerPage));

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(pokemonDetails);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
      setLoading(false);
    };

    fetchPokemons();
  }, [currentPage]);

  return (
    <>
      <Grid>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid>

      <Pagination>
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1 || loading}
        >
          {i18n.t("previous")}
        </Button>
        <PageInfo>
          {i18n.t("page")} {currentPage} {i18n.t("of")} {totalPages}
        </PageInfo>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages || loading}
        >
          {i18n.t("next")}
        </Button>
      </Pagination>
    </>
  );
};

export default PokemonList;
