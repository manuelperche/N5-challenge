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
  getCharacters: () => Promise<void>;
}

export const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
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
        getCharacters: fetchCharacters
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