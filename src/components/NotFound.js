import React from 'react';
import notFound from '../images/notfound.png';

const NotFound = () => {
  return (
    <div className="character__notfound">
      <h2>There's nothing here.</h2>
      <p>Searching is pain, you better <a href="/" title="Go home, you're drunk">go back</a> and try again.</p>
      <img src={notFound} alt="Not found" />
    </div>
  )
}

export default NotFound;