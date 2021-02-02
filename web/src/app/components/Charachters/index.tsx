import React from 'react';
import { useGetCharactersQuery } from '../../../generated/graphql';
import { Card } from '../../../components/atm.card';

export const Characters: React.FC = () => {
  const { data, loading, error } = useGetCharactersQuery();

  if (loading) {
    return <h1>Carregando ...</h1>;
  }
  if (error) {
    return <h5>Erro ao carregar.</h5>;
  }
  if (!data || !data.characters || !data.characters.results) {
    return (
      <h5> Nenhum personagem disponível, por favor recarregue a página.</h5>
    );
  }

  return (
    <>
      {data?.characters?.results?.map((character) => (
        <Card key={character?.id}>
          <h1>{character?.name}</h1>
          <h2>{character?.species}</h2>
          <h3>{character?.origin?.name}</h3>
          <body>{character?.location?.name}</body>
          <img src={character?.image} alt={character?.name} />
        </Card>
      ))}
    </>
  );
};
