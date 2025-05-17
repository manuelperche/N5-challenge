import React from "react";
import styled from "styled-components";
import { useCharacters } from "../context/CharacterContext";
import i18n from "../utils/i18n";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #646cff;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #535bf2;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Pagination: React.FC = () => {
  const { currentPage, totalPages, loading, setCurrentPage } = useCharacters();

  return (
    <Container>
      <Button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1 || loading}
      >
        {i18n.t("previous")}
      </Button>
      <span>
        {i18n.t("page")} {currentPage} {i18n.t("of")} {totalPages}
      </span>
      <Button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
      >
        {i18n.t("next")}
      </Button>
    </Container>
  );
};

export default Pagination;
