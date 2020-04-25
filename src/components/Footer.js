import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
          <div className="footer__text"><em>Rick and Morty</em> app created with React.</div>
          <div className="footer__socialmedia">
            <a href="https://github.com/Adalab/modulo-3-evaluacion-final-sorayav" title="Github repository" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithubSquare} className="icon__social" /></a>
            <a href="https://linkedin.com/sorayavalle" title="Checke my Linkedin" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} className="icon__social" /></a>
            <a href="https://twitter.com/SocialSoraya" title="Check my Twitter" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitterSquare} className="icon__social" /></a>
          </div>
    </footer>
  )
}

export default Footer;