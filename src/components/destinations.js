import React from 'react'
import { useHistory } from "react-router-dom"

import "./destinations.css"

function Destinations(props) {
    
    const history = useHistory();
    const Volume = () => history.push('/new_trip/enter_volume');

    const nbDestinations = props.number;
    const listDestinations = [];
    for (let i=1 ; i <= nbDestinations ; i++)
        listDestinations.push(i);

    const listItems = listDestinations.map((number, i) =>
        <div className="destLine">
            <p key={i.toString()} className="destText">Destination {number}</p>
            <button className="Vbutton" onClick={Volume}>Enter volume</button>
        </div>
    );
    
    return (
        <div>{listItems}</div>
    );
}

export default Destinations;