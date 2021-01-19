import React, { useState } from 'react';
import './App.css';

import { Router } from '@reach/router';
import Home from './components/Home';
import Value from './components/Hello';
import Color from './components/helloColor'


function App() {

    return (
        <div className="App">

            <Router>
                <Home path="/home" exact />
                <Value path="/:value" />
                <Color path="/:word/:color/:backgroundcolor" />
            </Router>
        </div>
    );
}

export default App;