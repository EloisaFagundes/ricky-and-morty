import React from 'react';
import { Container } from './button.style';

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWrapper: React.FC<Props> = ({
  children,
  backgroundColor = '#7159c1',
  color = '#fff',
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Container>
  );
};

export { ButtonWrapper as Button };
