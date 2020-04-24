import React from 'react';
import icon from '../images/backhome.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPastafarianism, faRestroom } from '@fortawesome/free-solid-svg-icons';

const CharacterDetails = (props) => {
  const {image, name, species, origin, episode, status} = props.character;

  const Species = species === 'Human' ? <FontAwesomeIcon icon={faRestroom} className="icon human" /> : <FontAwesomeIcon icon={faPastafarianism} className="icon" />;

  return (
    <section className="details">
      <Link to="/" className="character__details--btn" title="Go back"><img className="home__icon" src={icon} alt="Go back" /> Go back</Link>
      <div className="character__details">
        
        <div className="character__details-img">
          <img src={image} alt={name} />
        </div>
        
      <div className="character__details--info">
          <h2 className="character__details--name">{name}</h2>
          <ul className="character__details--ul">
            <li className="character__details--species"><h3>Species:</h3> {species} {Species}</li>
            <li className="character__details--origin"><h3>Origin:</h3> {origin.name}</li>
            <li className="character__details--episode"><h3>Number of episodes:</h3> {episode.length}</li>
            <li className="character__details--status"><h3>Status:</h3> {status}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CharacterDetails;