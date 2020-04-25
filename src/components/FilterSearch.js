import React from 'react';

const FilterSearch = (props) => {
  const preventDefault = (ev) => ev.preventDefault();

  const handleSearchCharacter = (ev) => {
    const value = ev.target.value;
    props.handleSearchCharacter(value);
  }

  const handleSort = () => {
    props.handleSortCharacters();
  }

  // const handleSpecie = (ev) => {
  //   let valueSpecie = ev.target.value;
  //   props.handleSpecie(valueSpecie);
  // }

  return (
    <form className="filters__box" onSubmit={preventDefault}>
      <div className="filters__box1">
        <label htmlFor="search-character">Search a character:</label>
        <input onChange={handleSearchCharacter} type="text" id="search-character" name="search-character" value={props.searchCharacter} />
        <button onClick={props.resetInput} type="button" className="reset__btn">Clear</button>
      </div>
      <div className="filters__box2">
        <label htmlFor="sort">Sort alphabetically: </label>
        <input onChange={handleSort} type="checkbox" id="sort" name="sort" value="sort" checked={props.sortCharacter} checked={props.sortChecked}/>

      {/* <label htmlFor="filter-specie">Filter by specie:</label>
        <select id="filter-specie" name="filter-specie" value={props.characterSpecies} onChange={handleSpecie}>
          <option value="">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
      </select> */}
      </div>
    </form>
  )
}

export default FilterSearch;