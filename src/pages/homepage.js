import React from 'react' 
import sync from '../assets/sync5.svg'
import logo from '../assets/wfp.svg'
import { useHistory } from "react-router-dom"

import './homepage.css'

function Home() {

  const history = useHistory();
  const NTrip = () => history.push('/new_trip');
  const OTrip = () => history.push('/open_trip');
  const Parameters = () => history.push('/parameters');


  return (
    <div>
            <img src={logo} className="Wfp-logo" alt="logo" />
            <h1 className="Title">Volume calculator</h1>
            <hr className="titleLine"></hr>
            <div>
                <button className="b1" onClick={NTrip}>New trip</button>
                <button className="b1" onClick={OTrip}>Open trip</button>
                <button className="b1" onClick={Parameters}>Parameters</button>
            </div>
            <img src={sync} className="Sync-button" alt="sync" />
    </div>
  );
}


export default Home;