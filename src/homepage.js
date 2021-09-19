import React from 'react' 
import sync from './assets/sync.svg'
import logo from './assets/wfp.svg'

import './homepage.css'

function NTrip() {
    alert('to be continued')
}

function OTrip() {
    alert('I love opening trip')
}

function Parameters() {
    alert('We need parameters, Louis !')
}

function Home() {
  return (
    <div>
            <img src={logo} className="Wfp-logo" alt="logo" />
            <h1 className="Title">Volume calculator</h1>
            <div>
                <p><button className="b1" onClick={NTrip}>New trip</button></p>
                <p><button className="b2" onClick={OTrip}>Open trip</button></p>
                <p><button className="b3" onClick={Parameters}>Parameters</button></p>
            </div>
            <img src={sync} className="Sync-button" alt="sync" />
    </div>
  );
}

export default Home;