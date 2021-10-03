import React from 'react'
import { useHistory } from "react-router-dom"
import '../pages/NewTrip.css'

export default function Return() {
    const history =  useHistory();
    const tBack = () => history.push('/');
    return (
        <button className="returnB" onClick={tBack}>return</button>
    );
}