import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
  const {characters, searchCharacter} = props;
  return (
    <ul className="character__list">
      {characters
      .filter(characterElement => !searchCharacter || characterElement.name.toLowerCase().includes(searchCharacter.toLowerCase()))
      .map(characterElement =>
        <li key = {characterElement.id}>
          <Character 
              characterImg = {characterElement.image}
              characterName = {characterElement.name}
              characterSpecies = {characterElement.species}
          />
          </li>
        )}
    </ul>
  )
}

export default CharacterList;