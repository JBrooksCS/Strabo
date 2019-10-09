import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Trips } from '../../api/trips';
import DayItem from './DayItem';

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, endDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= endDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}


function TripView(props) {
    if (props.trip) {

        const startDate = new Date(props.trip.startDate)
        const endDate = new Date(props.trip.endDate)
        const dateArray = getDates(startDate, endDate)

        return (
            <div>
                <h2>{props.trip.name}</h2>
                <h3>{props.trip.location}</h3>
                {dateArray.map((trip, index) => {
                    return <DayItem key={index} {...props} />
                })}
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

