import React from 'react'
import { useHistory } from 'react-router';

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
            <form>
                <p>Lenght</p>
                <p>Width</p>
                <p>Height</p>
            </form>
            <button>Add another volume</button>
            <p>Total Volume {total} m3</p>
            <button>Destination summary</button>
            <button onClick={tripSum}>Trips summary</button>
        </div>
    )
}

export default Volume;