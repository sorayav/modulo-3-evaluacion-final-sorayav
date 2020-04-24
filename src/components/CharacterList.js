import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';
import ItExists from './ItExists'

const CharacterList = (props) => {
  const {characters, searchCharacter} = props;
  const doesItExist = characters.filter(characterElement => !searchCharacter || characterElement.name.toLowerCase().includes(searchCharacter.toLowerCase()));
  
  if (doesItExist.length === 0) {
    return <ItExists />
  } else {
    return ( <div> 
      <ul className="character__list">
        {doesItExist
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(characterElement =>
          <Link key={characterElement.id} to={`character/${characterElement.id}`} title="Click for more info">
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