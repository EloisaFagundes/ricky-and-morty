import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import { Separator } from '../../components/atm.separator';
import { Header } from '../../components/Header';
import { Characters } from '../components/Charachters';

export const HomePage: React.FC = () => {
  return (
    <Grid fluid>
      <Header />
      <Separator />
      <Characters />
    </Grid>
  );
};
