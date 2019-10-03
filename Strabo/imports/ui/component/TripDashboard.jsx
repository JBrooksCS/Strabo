import React, { Component } from 'react';
import Place_Search from "./Place_Search"





export class TripDashboard extends Component {
    render() {
        console.log("TripDashboard Rendering")

        return (
            <div>
                <h1>Trip Dashboard</h1>
                {/* <Geocode /> */}
                <Place_Search />

          
            </div>
        );
    }
}

export default TripDashboard;
