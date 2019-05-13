import React from 'react';
import './App.css';
import FormMovies from './components/FormMovies'
import FormMoviesAxios from './components/FormMoviesAxios'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <FormMovies image="https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png"/>
        <FormMoviesAxios/>
    </div>
  );
}

export default App;
