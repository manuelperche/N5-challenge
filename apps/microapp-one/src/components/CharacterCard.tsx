import React from "react";
import styled from "styled-components";
import { Character } from "../types/character";
import i18n from "../utils/i18n";

interface CharacterCardProps {
  character: Character;
}

const Card = styled.div`
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
`;

const Info = styled.div`
  color: #666;
  font-size: 0.9em;
  margin: 5px 0;
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => (
  <Card>
    <Image
      src={character.imageUrl}
      alt={character.name}
      onError={(e) => {
        e.currentTarget.src =
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E";
      }}
    />
    <Name>{character.name}</Name>
    <Info>
      {i18n.t("status")}: {i18n.t(character.status)}
    </Info>
    <Info>
      {i18n.t("species")}: {i18n.t(character.species)}
    </Info>
  </Card>
);

export default CharacterCard;
