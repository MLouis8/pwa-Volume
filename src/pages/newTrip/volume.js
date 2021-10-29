import React, { useState } from 'react'
import { useHistory } from 'react-router';

import "./volume.css"

//import storedVolume from '../components/storedVolume.js'

function Volume() {

    const history = useHistory();
    //const destSum = () => history.push('/n');
    const tripSum = () => history.push('/new_trip');

    const [state, setState] = useState({
        length: 0,
        width: 0,
        height: 0,
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
        if (e.target.value < 0) {
            alert("Be careful, volume cannot be negative !")
            setState({
                ...state,
                [e.target.name]: 0,
            })
        }
    }

    const volume = state.lenght * state.width * state.height;

    const storedVolume = (vol) => {
        <div>
            <p className="stvolume">Volume {1}: {vol}m3</p>
        </div>
    }

    return (
        <div>
            <h1>Volume per destination</h1>
            <p className="temp">here will be displayed date and vehicle immatriculation</p>
            <p className="temp">here the destination name</p>
            <form className="volumeForm">
                <p>
                    <label className="vLabel">Lenght:</label>
                    <input type="number" name="lenght" value={state.lenght} onChange={handleChange} />
                </p>
                <p>
                    <label className="vLabel">Width:</label>
                    <input type="number" name="width" value={state.width} onChange={handleChange} />
                </p>
                <p>
                    <label className="vLabel">Height:</label>
                    <input type="number" name="height" value={state.height} onChange={handleChange} />
                </p>
            </form>
            <button onClick={storedVolume(volume)}>Add another volume</button>
            <p className="temp" >Total Volume {volume} m3</p>
            <button>Destination summary</button>
            <button onClick={tripSum}>Trips summary</button>
        </div>
    )
}

export default Volume;