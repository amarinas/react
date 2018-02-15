import React, { Component } from 'react';
import {Jumbotron, Grid} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Result from './components/result';


class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1> Search App</h1>
            <p> this is a simple Search App </p>
            <SearchForm />

          </Grid>
        </Jumbotron>
        <Result />

      </div>
    );
  }
}

export default App;
