import React from 'react';
import loader from '../images/portal.gif';

const Loader = () => {
  return ( <div className="loader">
      <img src={loader} alt="Loader" />
      Loading characters...
    </div>
  )
}

export default Loader;