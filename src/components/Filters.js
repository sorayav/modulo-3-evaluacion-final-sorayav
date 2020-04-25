import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const {searchCharacter, resetInput, sortCharacter, isSortChecked} = props;
  
  const preventDefault = (ev) => ev.preventDefault();

  const handleSearchCharacter = (ev) => {
    const value = ev.target.value;
    props.handleSearchCharacter(value);
  }

  const handleSort = () => {
    props.handleSortCharacters();
  }

  return (
    <form className="filters__box" onSubmit={preventDefault}>
      <div className="filters__box1">
        <label htmlFor="search-character">Search a character:</label>
        <input 
          onChange={handleSearchCharacter} 
          type="text" 
          id="search-character" 
          name="search-character" 
          value={searchCharacter} 
          />
        <button 
          onClick={resetInput} 
          type="button" 
          className="reset__btn">Clear
          </button>
      </div>
      <div className="filters__box2">
        <label htmlFor="sort">Sort alphabetically:</label>
        <input 
          onChange={handleSort} 
          type="checkbox" 
          id="sort" 
          name="sort" 
          value="sort" 
          checked={sortCharacter} 
          defaultChecked={isSortChecked}
          />
      </div>
    </form>
  )
}

Filters.propTypes = {
  searchCharacter: PropTypes.string,
  sortCharacter: PropTypes.bool,
  isSortChecked: PropTypes.bool
};

export default Filters;