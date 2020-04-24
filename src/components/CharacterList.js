import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';
import ItDoesntExist from './ItDoesntExist';

const CharacterList = (props) => {
  const {characters, searchCharacter} = props;
  const doesItExist = characters.filter(characterElement => !searchCharacter || characterElement.name.toLowerCase().includes(searchCharacter.toLowerCase()));
  // const sortByNameFunction = doesItExist.sort((a, b) => a.name.localeCompare(b.name));
  // const sortByName = <button onClick={sortByNameFunction}></button>
  
  if (doesItExist.length === 0) {
    return <ItDoesntExist />
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