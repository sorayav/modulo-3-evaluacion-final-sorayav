import React from 'react';
import '../scss/App.scss';
import { Route, Switch } from 'react-router-dom';
import fetchCharacters from '../services/FetchData';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <CharacterList characters={data} />
      </div>
    );
  }
}

export default App;
