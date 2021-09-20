import React from 'react'

import { useHistory } from "react-router-dom"

import "./Parameters.css"

function Parameters() {

    const history = useHistory();
    const tBack = () => history.push('/');

    return (
        <div>
        <h1>Parameters</h1>
        <h3>Locations</h3>
        <h3>Vehicles</h3>
        <button onClick={tBack}>return</button>

        </div>
    )
}

export default Parameters;