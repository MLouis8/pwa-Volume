import React, { Fragment } from 'react'
import "./index.css"
import Homepage from './homepage.js'
import NTrip from './NewTrip.js'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/' component={NTrip} />
          </Switch>
        </nav>
      </div>
    </Router>
  );
}

export default App;