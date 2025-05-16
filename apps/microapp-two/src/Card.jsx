import React from 'react';
import styled from 'styled-components';

// BEM block: 'card-microapp-two'
const StyledCard = styled.div`
  /* Element: implicitly the card itself */
  padding: 20px;
  background-color: lightgreen;
  border: 1px solid green;
  border-radius: 5px;
  color: #333;

  /* Modifier example: elevated */
  ${(props) =>
    props.elevated &&
    `
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  `}
`;

const Card = ({ children, ...props }) => {
  return (
    <StyledCard {...props} className="card-microapp-two">
      {children || "Hello from Microapp Two Card"}
    </StyledCard>
  );
};

export default Card; 