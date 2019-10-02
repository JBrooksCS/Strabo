import React, { Component } from 'react';
import Geocode from './Geocode';




export class TripDashboard extends Component {
    render() {
        console.log("TripDashboard Rendering")

        return (
            <div>
                <h1>Trip Dashboard</h1>
                <Geocode />
                
          
            </div>
        );
    }
}

export default TripDashboard;
