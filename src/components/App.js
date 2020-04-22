import React from 'react';
import '../scss/App.scss';
import { Route, Switch } from 'react-router-dom';
import fetchCharacters from '../services/FetchData';
import CharacterList from './CharacterList';
import FilterSearch from './FilterSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchCharacter = this.handleSearchCharacter.bind(this);
    this.state = {
      data: [],
      searchCharacter: ''
    }
  }

  componentDidMount() {
    fetchCharacters()
    .then(data => {
      this.setState({
        data: data.results
      })
    })
  }

  handleSearchCharacter(value) {
    this.setState({
      searchCharacter: value
    })
  }

  render() {
    const {data, searchCharacter} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>Rick and Morty characters</h1>
            <div className="filters">
              <FilterSearch handleSearchCharacter={this.handleSearchCharacter} searchCharacter={searchCharacter} />
            </div>
              <CharacterList characters={data} searchCharacter={searchCharacter} />
            </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
