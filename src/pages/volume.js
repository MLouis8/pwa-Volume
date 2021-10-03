import React from 'react'
import { useHistory } from 'react-router';

import "./volume.css"

function Volume() {

    const history = useHistory();
    //const destSum = () => history.push('/n');
    const tripSum = () => history.push('/new_trip');

    const total =  0;
    return (
        <div>
            <h1>Volume per destination</h1>
            <p>here will be displayed date and vehicle immatriculation</p>
            <p>here the destination name</p>
            <form className = "volumeForm">
                <p><label className = "fromLabel">Lenght: </label><input type = "number" /></p>
                <p><label className = "fromLabel">Width: </label><input type = "number" /></p>
                <p><label className = "fromLabel">Height: </label><input type = "number" /></p>
            </form>
            <button>Add another volume</button>
            <p>Total Volume {total} m3</p>
            <button>Destination summary</button>
            <button onClick={tripSum}>Trips summary</button>
        </div>
    )
}

export default Volume;