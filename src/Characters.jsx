import React from 'react';
import CharacterList from './CharacterList';
import CharacterListFilters from './CharacterListFilters';

const Characters = () => {
  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      <CharacterListFilters />
      <CharacterList />
    </div>
  )
}

export default Characters;
