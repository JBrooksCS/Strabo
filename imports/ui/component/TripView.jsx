import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Trips } from '../../api/trips';
import DayItem from './DayItem';

function TripView(props) {
    console.log(props)
    if (props.trip) {
        return (
            <div>
                <h2>{props.trip.name}</h2>
                <h3>{props.trip.location}</h3>
                {/* <DayItem {...props} /> */}
            </div>
        );
    } else {
        return null
    }
}
export default withTracker((props) => {
    const tripId = props.match.params.tripId
    return {
        trip: Trips.findOne({ _id: `${tripId}` })
    };
})(TripView);

