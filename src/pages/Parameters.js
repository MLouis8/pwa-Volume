import React from 'react'
import { useHistory } from "react-router-dom"

import "./Parameters.css"

function Parameters() {

    const history = useHistory();
    const tBack = () => history.push('/');

    return (
        <div>
            <h1>Parameters</h1>
            <hr class="Hline"></hr>
            <div className="options">
                <p>Vehicles</p>
                <p>Locations</p>
            </div>
            <button onClick={tBack}>return</button>
        </div>
    )
}

export default Parameters;