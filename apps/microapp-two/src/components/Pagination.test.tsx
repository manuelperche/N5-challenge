import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Pagination from "./Pagination";
import { PokemonContext } from "../context/PokemonContext";

vi.mock("../utils/i18n", () => ({
  default: {
    t: (key: string) => {
      const translations: Record<string, string> = {
        previous: "Previous",
        next: "Next",
        page: "Page",
        of: "of",
      };
      return translations[key] || key;
    },
  },
}));

vi.mock("../utils/getPokemons", () => ({
  getPokemons: vi.fn().mockResolvedValue({
    results: [],
    count: 50,
  }),
}));

describe("Pagination", () => {
  const mockSetCurrentPage = vi.fn();
  const mockGetPokemons = vi.fn();

  const renderWithContext = (
    currentPage = 1,
    totalPages = 5,
    loading = false
  ) => {
    return render(
      <PokemonContext.Provider
        value={{
          pokemons: [],
          loading,
          currentPage,
          totalPages,
          setCurrentPage: mockSetCurrentPage,
          getPokemons: mockGetPokemons,
        }}
      >
        <Pagination />
      </PokemonContext.Provider>
    );
  };

  it("renders pagination controls", async () => {
    await act(async () => {
      renderWithContext();
    });
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText(/Page 1 of 5/)).toBeInTheDocument();
  });

  it("disables previous button on first page", async () => {
    await act(async () => {
      renderWithContext(1);
    });
    const prevButton = screen.getByText("Previous");
    expect(prevButton).toBeDisabled();
  });

  it("disables next button on last page", async () => {
    await act(async () => {
      renderWithContext(5);
    });
    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("disables both buttons when loading", async () => {
    await act(async () => {
      renderWithContext(2, 5, true);
    });
    const prevButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");
    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it("calls setCurrentPage when clicking next", async () => {
    await act(async () => {
      renderWithContext(2);
    });
    await act(async () => {
      fireEvent.click(screen.getByText("Next"));
    });
    expect(mockSetCurrentPage).toHaveBeenCalledWith(3);
  });

  it("calls setCurrentPage when clicking previous", async () => {
    await act(async () => {
      renderWithContext(2);
    });
    await act(async () => {
      fireEvent.click(screen.getByText("Previous"));
    });
    expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
  });
});
