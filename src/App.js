import React from 'react'
import "./index.css"

import Homepage from './pages/homepage/homepage.js'
import Param    from './pages/parameters/Parameters.js'
import nTrip    from './pages/newTrip/NewTrip.js'
import volume   from './pages/newTrip/volume.js'
import oTrip    from './pages/openTrip/OpenTrip.js'
import {locations, vehicles} from './pages/parameters/options.js'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/parameters' component={Param} />
            <Route exact path='/new_trip' component={nTrip} />
            <Route path='/open_trip' component={oTrip} />
            <Route path='/new_trip/enter_volume' component={volume} />
            <Route path='/parameters/locations' component={locations}/>
            <Route path='/parameters/vehicles' component={vehicles}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;