import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {
  return (
    <div className="character__details">
      <Link to="/" className="character__details--btn"> ≤ Home</Link>
      <div className="character__details-img">
        <img src={props.character.image} alt={props.character.name} />
      </div>
      
      <h2 className="character__details--name">{props.character.name}</h2>

      <ul className="character__details--info">
        <li className="character__details--species">Species: {props.character.species}</li>
        <li className="character__details--origin">Origin: {props.character.origin.name}</li>
        <li className="character__details--episode">Episodes: {props.character.episode}</li>
        <li className="character__details--status">Status: {props.character.status}</li>
      </ul>
    </div>
  )
}

// # episodes - object length
export default CharacterDetails;