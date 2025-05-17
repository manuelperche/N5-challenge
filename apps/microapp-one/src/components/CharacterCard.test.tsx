import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CharacterCard from "./CharacterCard";
import i18n from "../utils/i18n";

i18n.init();

describe("CharacterCard", () => {
  it("renders character info", () => {
    const character = {
      id: 1,
      name: "Rick Sanchez",
      imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      status: "Alive",
      species: "Human",
      url: "",
    };
    render(<CharacterCard character={character} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText(/Alive/)).toBeInTheDocument();
    expect(screen.getByText(/Human/)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", character.imageUrl);
  });
});
