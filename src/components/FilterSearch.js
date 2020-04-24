import React from 'react';

const FilterSearch = (props) => {
  const preventDefault = (ev) => ev.preventDefault();

  const handleSearchCharacter = (ev) => {
    ev.preventDefault();
    const value = ev.target.value;
    props.handleSearchCharacter(value);
  }

  return (
    <form className="filter__search" onSubmit={preventDefault}>
      <label htmlFor="search-character">Search a character:</label>
      <input onChange={handleSearchCharacter} type="text" id="search-character" name="search-character" value={props.searchCharacter} />
      <button onClick={props.resetInput} type="button" className="reset__btn">Clear</button>
    </form>
  )
}

export default FilterSearch;