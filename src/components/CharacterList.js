import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';
import ItExist from './ItExists';

const CharacterList = (props) => {
  const {characters, searchCharacter} = props;
  const doesItExist = characters.filter(characterElement => !searchCharacter || characterElement.name.toLowerCase().includes(searchCharacter.toLowerCase()))
  
  if (doesItExist.length === 0) {
    return <ItExist />
  } else {
    return ( <div> 
      <ul className="character__list">
        {characters
        // .sort(characterElement => characterElement.name)
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
      </div>
    )
  }
}

export default CharacterList;