import React from 'react';
import {useLocation} from 'react-router-dom';
import CharacterListItem from './CharacterLitsItem';
import useRickAndMortyAPI from './useRickAndMortyAPI';

const CharacterList = () => {
  const location = useLocation();
  const [response, loading] = useRickAndMortyAPI(`/character/${location.search}`);
  
  if (loading) {
    return (
      '...Loading'
    )
  }

  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      <ul>
        {response?.results?.map(character => (
          <CharacterListItem {...character} key={character.id} />
        ))}
      </ul>
    </div>
  )
}

export default CharacterList;
