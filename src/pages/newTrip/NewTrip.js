import React from 'react'

import NumberForm from "../../components/numberForm.js"
import DayPicker from "../../components/day-picker.js"
import Destinations from '../../components/destinations.js'
import Return from '../../components/return.js';

import './NewTrip.css'

class New_trip extends React.Component {

    state = {
        number: 0,
    }

    handleCallback = (destNumber) => {
        this.setState({ number: destNumber})
    }

    render() {
        const {number} = this.state;
        return (
            <div>
                <h1>New Trip</h1>
                <hr className="Hline"></hr>

                <div className="NToptions">
                <p>Plate Number :</p>
                Departure date : <DayPicker/>
                <NumberForm parentCallback={this.handleCallback}/>
                </div>
                <Destinations number={number} />
                <Return/>
            </div>

        );
    }
}

export default New_trip;