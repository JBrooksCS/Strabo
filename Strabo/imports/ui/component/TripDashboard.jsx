import React, { Component } from 'react';
import Trip from './TripItem';
import { Trips } from '../../api/trips'
import { withTracker } from 'meteor/react-meteor-data';
export class TripDashboard extends Component {
    render() {
        // console.log("TripDashboard Rendering")
        console.log(this.props.trips)
        return (
            <div className="Wrapper-Dashboard">
                <h1>Trip Dashboard</h1>
                {/* <Geocode /> */}
                <button onClick={() => { this.props.history.push(`/trip`) }}>+</button>
                <ul>
                    {
                        this.props.trips.map((trip, index) =>
                            <Trip key={index} trip={trip} />
                        )
                    }
                </ul>
            </div>

        );
    }
}

export default withTracker(() => {
    return {
        trips: Trips.find({}).fetch(),
        currentUser: Meteor.user(),
    };
})(TripDashboard);

