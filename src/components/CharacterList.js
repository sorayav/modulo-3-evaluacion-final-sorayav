import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
  const {characters, searchCharacter} = props;
  return (
    <ul className="character__list">
      {characters
      .filter(characterElement => !searchCharacter || characterElement.name.toLowerCase().includes(searchCharacter.toLowerCase()))
      .map(characterElement =>
        <Link key={characterElement.id} to={`character/${characterElement.id}`}>
        <li key = {characterElement.id}>
          <Character 
              characterImg = {characterElement.image}
              characterName = {characterElement.name}
              characterSpecies = {characterElement.species}
          />
          </li>
          </Link>
        )}
    </ul>
  )
}

export default CharacterList;