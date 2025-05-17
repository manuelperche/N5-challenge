import React from "react";
import styled from "styled-components";
import i18n from "../utils/i18n";

const TYPE_COLORS: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

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

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: transform 0.2s;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  margin: 10px 0;
  color: #333;
  text-transform: capitalize;
`;

const Info = styled.div`
  color: #666;
  font-size: 0.9em;
  margin: 5px 0;
`;

const Type = styled.span<{ $typeName: string }>`
  background: ${({ $typeName }) => TYPE_COLORS[$typeName] || "#f0f0f0"};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  text-transform: capitalize;
  display: inline-block;
`;

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <CardContainer>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        onError={(e) => {
          e.currentTarget.src =
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E";
        }}
      />
      <Name>{pokemon.name}</Name>
      <Info>
        {i18n.t("types")}:{" "}
        {pokemon.types.map((type) => (
          <Type key={type.type.name} $typeName={type.type.name}>
            {i18n.t(
              type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
            )}
          </Type>
        ))}
      </Info>
      <Info>
        {i18n.t("height")}: {pokemon.height / 10}m
      </Info>
      <Info>
        {i18n.t("weight")}: {pokemon.weight / 10}kg
      </Info>
    </CardContainer>
  );
};

export default PokemonCard;
