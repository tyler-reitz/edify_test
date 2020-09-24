import React from 'react';
import {Link} from 'react-router-dom';

const CharacterListItem = ({id, name, image}) => (
  <li>
    <Link to={`/character/${id}`}>
      <p>{name}</p>
      <img src={image} alt="character" />
    </Link>
  </li>
);

export default CharacterListItem;
