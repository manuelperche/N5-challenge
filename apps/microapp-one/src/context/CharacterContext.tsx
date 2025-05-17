import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCharacters } from '../utils/getCharacters';

interface Character {
  id: number;
  name: string;
  url: string;
  imageUrl: string;
  status: string;
  species: string;
}

interface CharacterContextType {
  characters: Character[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  setCurrentPage: (page: number) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await getCharacters(currentPage);
        setCharacters(response.results);
        setTotalPages(Math.ceil(response.count / 10));
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        currentPage,
        totalPages,
        loading,
        setCurrentPage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacters must be used within a CharacterProvider');
  }
  return context;
}; 