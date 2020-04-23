import React from 'react';

const FilterSearch = (props) => {

  const handleSearchCharacter = (ev) => {
    ev.preventDefault();
    const value = ev.target.value;
    props.handleSearchCharacter(value);
  }

  return (
    <form className="filter__search">
      <label htmlFor="search-character">Search a character:</label>
      <input onChange={handleSearchCharacter} type="text" id="search-character" name="search-character" value={props.searchCharacter} />
    </form>
  )
}

export default FilterSearch;