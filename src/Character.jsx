import React from 'react';
import {Link} from 'react-router-dom';
import useRickAndMortyAPI from './useRickAndMortyAPI';

const CharacterDetail = ({ match }) => {
  const { characterId } = match.params;
  const [response, loading] = useRickAndMortyAPI(`/character/${characterId}`);

  if (loading) {
    return (
      '...Loading'
    )
  }

  return (
    <div>
      <Link to="/characters">back</Link>
      <h1>{response?.name}</h1>
      <img src={response?.image} alt="profile" />
    </div>
  )
}

export default CharacterDetail
