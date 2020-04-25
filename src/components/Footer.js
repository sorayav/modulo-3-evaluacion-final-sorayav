import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
          <div className="footer__text"><a href="https://adalab.es" title="Adalab web" target="_blank" rel="noopener noreferrer">Adalab</a>'s final assessment module 3, Soraya Valle.</div>
          <div className="footer__socialmedia">
            <a href="https://github.com/Adalab/modulo-3-evaluacion-final-sorayav" title="Github repository" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithubSquare} className="icon__social" /></a>
            <a href="https://linkedin.com/in/sorayavalle/" title="This is my Linkedin!" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} className="icon__social" /></a>
            <a href="https://twitter.com/SocialSoraya" title="This is my Twitter!" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitterSquare} className="icon__social" /></a>
          </div>
    </footer>
  )
}

export default Footer;