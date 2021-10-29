import React from 'react'
import { useHistory } from "react-router-dom"
import Return from '../../components/return.js'

import "./Parameters.css"

function Parameters() {

    const history = useHistory();
    const locations = () => history.push('/parameters/locations');
    const vehicles = () => history.push('/parameters/vehicles');

    return (
        <div>
            <h1>Parameters</h1>
            <hr className="Hline"></hr>
            <div className="options">
                <button className="paramButton" onClick={vehicles}>Vehicles</button>
                <button className="paramButton" onClick={locations}>Locations</button>
            </div>
            <Return/>
        </div>
    )
}

export default Parameters;