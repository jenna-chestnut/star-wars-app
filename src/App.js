import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import './sweepingstyles/error.css';
import Header from './Header';
import SearchInput from './SearchInputs/SearchInput';
import StoreContext from './StoreContext';
import Results from './Results';
import ResultsTop from './ResultsPage/ResultsTop';
import PeopleResults from './ResultsPage/PeopleResults';
import FilmResults from './ResultsPage/FilmResults';
import StarshipResults from './ResultsPage/StarshipResults';
import VehicleResults from './ResultsPage/VehicleResults';
import SpeciesResults from './ResultsPage/SpeciesResults';
import PlanetResults from './ResultsPage/PlanetResults';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: null,
      loading: false,
    };
  }

  fetchResults = (e, search, searchType) => {
    e.preventDefault();

    let url = `https://swapi-thinkful.herokuapp.com/api/${searchType}/?search=${search}`

    this.setState({ loading: true });

    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error()
        } else return resp.json()
      })
      .then(data => {
        if (data === undefined
          || data.results.length === 0) {
          throw new Error('Sorry!! Nothing was found.');
        } else {
          console.log(data.results);
          this.setState({
            loading: false,
            results: data.results,
            error: null
          });
        }
      })
      .then(() => this.props.history.push(`/${searchType}`))
      .catch(error => {
        this.setState({
          loading: false,
          error: error.message
        });
      })
  }

  clearError = () => {
    this.setState({
      error: null
    })
  }

  render() {
    const error = this.state.error ?
      <div className='error'>{this.state.error}
        <button onClick={this.clearError}>Clear</button>
      </div>
      : '';

    const loading = this.state.loading ?
      <div className='loading'><img src='https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-16.gif' alt='loading' />
      </div>
      : '';

    const contextValues = {
      ...this.state,
      fetchResults: this.fetchResults
    }

    return (
      <div className="App">

        <StoreContext.Provider value={contextValues}>

          <Header />
          <main className='main-seg'>
            <Route exact path='/' component={SearchInput} />
            <Route exact path='/:results' component={ResultsTop} />
            <hr />
            {error}
            {loading}

            <Results>
              <Route path='/people' component={PeopleResults} />
              <Route path='/films' component={FilmResults} />
              <Route path='/starships' component={StarshipResults} />
              <Route path='/vehicles' component={VehicleResults} />
              <Route path='/species' component={SpeciesResults} />
              <Route path='/planets' component={PlanetResults} />
            </Results>

          </main>
        </StoreContext.Provider>

      </div>
    );
  }
}

export default withRouter(App);
