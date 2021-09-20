import React from 'react'
import NumberForm from "../components/numberForm.js"
import DayPicker from "../components/day-picker.js"

import { useHistory } from "react-router-dom"

import './NewTrip.css'

function New_trip() {

    const history = useHistory();
    const tBack = () => history.push('/');

    return (
    <div>
        <h1>New Trip</h1>
        <p>Plate Number</p>
        <label classname='datePick'>
            Departure date 
            <DayPicker/>
        </label>
        <NumberForm/>
        <button onClick={tBack}>return</button>
    </div>
    );
}
export default New_trip;