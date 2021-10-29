import React from 'react'

import { useHistory } from "react-router-dom"

import "./OpenTrip.css"
function Open_trip() {

    const history = useHistory();
    const tBack = () => history.push('/');

    return (
        <div>
            <h1>Open trip</h1>
            <hr className="Hline"></hr>
            <button onClick={tBack}>return</button>
        </div>
    )
}

export default Open_trip;