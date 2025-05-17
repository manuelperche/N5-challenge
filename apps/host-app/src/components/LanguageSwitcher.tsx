import React from "react";
import styled from "styled-components";

const Button = styled.button<{ $active: boolean }>`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: ${(props) => (props.$active ? "#646cff" : "#f0f0f0")};
  color: ${(props) => (props.$active ? "white" : "#333")};
  cursor: pointer;
  font-weight: bold;
`;

interface LanguageSwitcherProps {
  selectedLanguage: string;
  onLanguageChange: (lng: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => (
  <div style={{ marginBottom: 20 }}>
    <Button
      $active={selectedLanguage === "en"}
      onClick={() => onLanguageChange("en")}
    >
      EN
    </Button>
    <Button
      $active={selectedLanguage === "es"}
      onClick={() => onLanguageChange("es")}
    >
      ES
    </Button>
  </div>
);

export default LanguageSwitcher;
