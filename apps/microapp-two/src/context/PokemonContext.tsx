import React, { createContext, useContext, useEffect, useState } from 'react';

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

interface PokemonContextType {
  pokemons: Pokemon[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  setCurrentPage: (page: number) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
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
        console.error('Error fetching pokemons:', error);
      }
      setLoading(false);
    };

    fetchPokemons();
  }, [currentPage]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        currentPage,
        totalPages,
        loading,
        setCurrentPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemons = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemons must be used within a PokemonProvider');
  }
  return context;
}; 