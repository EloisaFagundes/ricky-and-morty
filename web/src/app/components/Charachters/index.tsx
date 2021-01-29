import React from 'react';
import { useGetCharactersQuery } from '../../../generated/graphql';

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
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Species</td>
            <td>Origin</td>
            <td>Location</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>
          {data?.characters?.results?.map((character) => (
            <tr key={character?.id}>
              <td>{character?.name}</td>
              <td>{character?.species}</td>
              <td>{character?.origin?.name}</td>
              <td>{character?.location?.name}</td>
              <td>{character?.image}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
