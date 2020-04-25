import React from 'react';
import '../scss/App.scss';
import { Route, Switch } from 'react-router-dom';
import fetchCharacters from '../services/FetchData';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetails';
import Loader from './Loader';
import logo from '../images/logo.png';
import NotFound from './NotFound';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchCharacter = this.handleSearchCharacter.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.handleSortCharacters = this.handleSortCharacters.bind(this);
    this.handleSpecie = this.handleSpecie.bind(this);
    this.state = {
      data: [],
      searchCharacter: '',
      sortCharacters: false,
      isSortChecked: false,
      specie: '',
    }
  }

  componentDidMount() {
    fetchCharacters()
    .then(data => {
      this.setState({
        data: data.results
      })
    });
  }

  handleSearchCharacter(value) {
    this.setState({ searchCharacter: value })
  }

  handleSortCharacters() {
    if (this.state.sortCharacters !== true) {
      this.setState({ sortCharacters: true, isSortChecked: true })
      this.state.data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    } else {
      this.setState({ sortCharacters: false, isSortChecked: false })
      this.state.data.sort((a, b) => {
        if (a.id > b.id) { return 1 }
        if (a.id < b.id) { return -1 }
        return 0;
      })
    }
  }

  handleSpecie(valueSpecie) {
    this.setState({
      specie: valueSpecie
    })
  }

  resetInput() {
    this.setState({
      searchCharacter: ''
    })
  }

  renderCharacterDetails(props) {
    const urlId = props.match.params.id;
    const characters = this.state.data;
    for (let character of characters) {
      if (character.id === parseInt(urlId)) {
        return <CharacterDetails character={character} />
      }
    } return <NotFound />
  }

  render() {
    const {data, searchCharacter, sortCharacters, isSortChecked, specie} = this.state;
    // console.log(this.state.specie)

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <header className="header">
              <h1>Rick and Morty characters</h1>
              <a href="/" className="logo" title="Home"><img src={logo} alt="Rick and Morty logo"/></a>
              <div className="filters">
                <Filters 
                  handleSearchCharacter={this.handleSearchCharacter} 
                  searchCharacter={searchCharacter} 
                  resetInput={this.resetInput} 
                  handleSortCharacters={this.handleSortCharacters} 
                  sortCharacters={sortCharacters}
                  isSortChecked={isSortChecked}
                  // characterSpecies={specie} 
                  // handleSpecie={this.handleSpecie} 
                  /> 
              </div>
            </header>

            <main className="main">
              {!data ? <Loader /> : 
              <CharacterList 
                characters={data} 
                searchCharacter={searchCharacter} />
              }
            </main>
            </Route>

            <Route path="/character/:id" render={this.renderCharacterDetails} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
