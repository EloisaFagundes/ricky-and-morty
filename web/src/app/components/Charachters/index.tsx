import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import { useGetCharactersQuery } from '../../../generated/graphql';
import { Card } from '../../../components/atm.card';
import { Separator } from '../../../components/atm.separator';
import { H1, H2, H3 } from '../../../components/atm.typography';
import { charactersStrings } from './constants-strings';

export const Characters: React.FC = () => {
  const { data, loading, error } = useGetCharactersQuery();

  if (loading) {
    return <h1>{charactersStrings.loading}</h1>;
  }
  if (error) {
    return <h5>{charactersStrings.error}</h5>;
  }
  if (!data || !data.characters || !data.characters.results) {
    return <h5>{charactersStrings.noData}</h5>;
  }

  return (
    <Row>
      <Col xs={12}>
        {data?.characters?.results?.map((character) => {
          return (
            <>
              <Card key={character?.id}>
                <H1>{character?.name}</H1>
                <H2>{character?.species}</H2>
                <H3>{character?.origin?.name}</H3>
                <body>{character?.location?.name}</body>
                <img src={character?.image ?? ''} alt={character?.name ?? ''} />
              </Card>
              <Separator />
            </>
          );
        })}
      </Col>
    </Row>
  );
};
