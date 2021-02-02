import styled from 'styled-components';

interface CardSProps {
  color?: string;
}

export const CardStyled = styled.div<CardSProps>`
  position: relative;
  display: block;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #25242c;
  background-color: ${(props) => (props.color ? props.color : 'white')};
`;
