import React from 'react';
import styled from 'styled-components';

// BEM block: 'button-microapp-one'
const StyledButton = styled.button`
  /* Element: implicitly the button itself */
  padding: 10px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* Modifier example: primary */
  ${(props) =>
    props.primary &&
    `
    background-color: blue;
    color: white;
  `}

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ children, ...props }) => {
  // Example of passing a modifier prop
  return (
    <StyledButton {...props} className="button-microapp-one">
      {children || "Hello from Microapp One Button"}
    </StyledButton>
  );
};

export default Button; 