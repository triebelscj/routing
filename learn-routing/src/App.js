import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import Home from './components/home';
import Value from './components/Number';
import Color from './components/Color'


function App() {

  return (
    <div className="App">

      <Router>
        <Home path="/" />
        <Value path="/:value" />
        <Color path="/:word/:color/:backgroundcolor" />
      </Router>
    </div>
  );
}

export default App;