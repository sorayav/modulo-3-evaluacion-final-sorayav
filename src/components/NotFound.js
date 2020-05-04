import React from 'react';
import notFound from '../images/notfound.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="character__notfound">
      <h2>There's nothing here.</h2>
      <p>Searching is pain, you better <Link to="/" title="Go home, you're drunk">go back</Link> and try again.</p>
      <img src={notFound} alt="Not found" />
    </div>
  )
}

export default NotFound;