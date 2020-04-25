import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPastafarianism, faRestroom } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Character (props) {
  const {characterImg, characterName, characterSpecies} = props;

  const speciesIcon = characterSpecies === 'Human' ? <FontAwesomeIcon icon={faRestroom} className="icon human"/> : <FontAwesomeIcon icon={faPastafarianism} className="icon"/>;

  return (
    <div className="character__card">
      <div className="character__image">
        <img src={characterImg} alt={characterName} />
      </div>
      
      <div className="character__info">
        <h2 className="character__name">{characterName}</h2>
        <p className="character__species">Species: {characterSpecies} {speciesIcon}</p>
      </div>
    </div>
  )
}

Character.propTypes = {
  characterImg: PropTypes.string,
  characterName: PropTypes.string,
  characterSpecies: PropTypes.string
};

export default Character;