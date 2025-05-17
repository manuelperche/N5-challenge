interface Character {
  id: number;
  name: string;
  url: string;
  imageUrl: string;
  status: string;
  species: string;
}

interface PaginatedResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

const API_BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (
  page: number = 1
): Promise<PaginatedResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/character/?page=${page}`);
    const data = await response.json();

    // Transform the Rick and Morty API response to match our interface
    const charactersWithImages = data.results.map((character: any) => {
      return {
        id: character.id,
        name: character.name,
        url: character.url,
        imageUrl: character.image, // Rick and Morty API already includes image URLs
        status: character.status,
        species: character.species,
      };
    });

    return {
      count: data.info.count,
      next: data.info.next,
      previous: data.info.prev,
      results: charactersWithImages,
    };
  } catch (error) {
    console.error("Error fetching Rick and Morty characters:", error);
    throw error;
  }
};
