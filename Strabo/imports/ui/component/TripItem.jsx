import React, { Component } from 'react'
import { Trips } from '../../api/trips';
import { withTracker } from 'meteor/react-meteor-data';

export default class Trip extends Component {
    DeleteThisTrip() {
        Meteor.call('trips.remove', this.props.trip._id);
    }

    render() {
        console.log(this.props)
        return (
            <li>
                <p>{this.props.trip.name}</p>
                <button onClick={() => {
                    this.DeleteThisTrip()
                }} >&times;</button>
            </li>
        )
    }
}

