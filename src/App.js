import React from 'react'
import "./index.css"

import Homepage from './pages/homepage.js'
import Param from './pages/Parameters.js'
import nTrip from './pages/NewTrip.js'
import oTrip from './pages/OpenTrip.js'


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/parameters' component={Param} />
            <Route path='/new_trip' component={nTrip} />
            <Route path='/open_trip' component={oTrip} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;