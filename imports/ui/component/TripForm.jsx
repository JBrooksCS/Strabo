import React, { Component, useCallback } from 'react'
import { useState } from 'react'
import { Meteor } from 'meteor/meteor';
import Calendar from './Calendar';
import { Trips } from '../../api/trips';
import Place_Search from "./Place_Search";
import { withTracker } from 'meteor/react-meteor-data';
import { func } from 'prop-types';



const Input = (props) => <input style={{ background: "pink", color: "brown" }} {...props} />

//////////////////////////////// export default class TripForm extends Component {
export default function TripForm(props) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [country, setCountry] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    handleLocationSelect = (newLocation, newCountry, newLatitude, newLongitude) => {
        // this.setState({
        //     location: newLocation,
        //     country: newCountry,
        //     latitude: newLatitude,
        //     longitude: newLongitude,
        // })
        setLocation(newLocation);
        setCountry(newCountry);
        setLatitude(newLatitude);
        setLongitude(newLongitude);
    }
    handleCalendarOnChange = (startDate, endDate) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };
    handleClear = (e) => {
        e.preventDefault()
        setName("")
        setLocation("")
        setCountry("")
        setLatitude("")
        setLongitude("")
        setStartDate("")
        setEndDate("")
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const readOut = Meteor.call('trips.insert',
            name,
            location,
            country,
            latitude,
            longitude,
            startDate,
            endDate,
            function (err, res) {
                if (err) {
                    console.log(err);
                    throw new Meteor.Error('It did not work!')
                } else {
                    console.log("RESULT: ", res);
                }
            }
        )
    }
    // console.log(Meteor.userId())
    console.log({ name })
    return (
        <div>
            <h1>Plan Trip</h1>
            <form>
                <Input
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Trip Name"
                    type="text"
                    value={name}
                    name="name"
                />
                <Place_Search updateLocation={this.handleLocationSelect} />
                <Calendar startDate={startDate} endDate={endDate} calendarOnChange={this.handleCalendarOnChange} />
                <button onClick={this.handleSubmit}> submit </button>
                <button onClick={this.handleClear}> clear </button>
            </form>
        </div>
    )
}

