import React from 'react';
import { CardStyled } from './card.style';

interface CardProps {
  color?: string;
}

export const Card: React.FC<CardProps> = ({ color, children }) => {
  return <CardStyled color={color}>{children}</CardStyled>;
};
