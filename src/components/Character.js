import React from 'react';

function Character (props) {
  return (
    <div className="character__card">
      <div className="character__image">
        <img src={props.characterImg} alt={props.characterName} />
      </div>
      
      <div className="character__info">
        <h2 className="character__name">{props.characterName}</h2>
        <p className="character__species">Species: {props.characterSpecies}</p>
      </div>
    </div>
  )
}

export default Character;