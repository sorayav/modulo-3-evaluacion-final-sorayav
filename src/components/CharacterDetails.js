import React from 'react';
import icon from '../images/backhome.png';
import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {
  const episodesTotal = props.character.episode;
  const episodesNumber = episodesTotal.length;
  return (
    <section className="details">
      <Link to="/" className="character__details--btn"><img className="home__icon" src={icon} alt="Go back" /> Go back</Link>
      <div className="character__details">
        
        <div className="character__details-img">
          <img src={props.character.image} alt={props.character.name} />
        </div>
        
      <div className="character__details--info">
          <h2 className="character__details--name">{props.character.name}</h2>
          <ul className="character__details--ul">
            <li className="character__details--species"><h3>Species:</h3> {props.character.species}</li>
            <li className="character__details--origin"><h3>Origin:</h3> {props.character.origin.name}</li>
            <li className="character__details--episode"><h3>Number of episodes:</h3> {episodesNumber}</li>
            <li className="character__details--status"><h3>Status:</h3> {props.character.status}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CharacterDetails;