import React from 'react';
import '../scss/App.scss';
import { Route, Switch } from 'react-router-dom';
import fetchCharacters from '../services/FetchData';
import CharacterList from './CharacterList';
import FilterSearch from './FilterSearch';
import CharacterDetails from './CharacterDetails';
import Loader from './Loader';
import logo from '../images/logo.png';
import NotFound from './NotFound';
import PaginationSort from './SortAlphabetically';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchCharacter = this.handleSearchCharacter.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.state = {
      data: [],
      searchCharacter: '',
      isChecked: false,
    }
  }

  componentDidMount() {
    fetchCharacters()
    .then(data => {
      this.setState({
        data: data.results,
      })
    });
  }

  handleSearchCharacter(value) {
    this.setState({
      searchCharacter: value
    })
  }

  // sortCharacters() {
  //   if (isChecked === true) {
  //   this.setState({
  //     data: data.sort((a, b) => a.name.localeCompare(b.name))
  //   })} else if (isChecked === false) {
  //     this.setState({
  //       data: []
  //     })
  //   }
  // }

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
    const {data, searchCharacter} = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <header className="header">
              <h1>Rick and Morty characters</h1>
              <a href="/" className="logo"><img src={logo} alt="Rick and Morty logo"/></a>
              <div className="filters">
                <FilterSearch handleSearchCharacter={this.handleSearchCharacter} searchCharacter={searchCharacter} resetInput={this.resetInput} /> 
              </div>
            </header>

            <main className="main">
              {!data ? <Loader /> : 
              <CharacterList characters={data} searchCharacter={searchCharacter} />
              }
              
            </main>
            </Route>

            <Route path="/character/:id" render={this.renderCharacterDetails} />
        </Switch>
        <footer className="footer">'Rick and Morty' characters app created with React. Repository. </footer>
      </div>
    );
  }
}

export default App;
