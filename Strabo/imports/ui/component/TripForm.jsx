import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';
import Calendar from './Calendar';
import { Trips } from '../../api/trips';
import Place_Search from "./Place_Search";


const initialState = {
    name: "",
    location: "",
    country: "",
    latitude: "",
    longitude: "",
    startDate: "",
    endDate: ""
}

const Input = (props) => <input style={{ background: "pink", color: "brown" }} {...props} />


export default class TripForm extends Component {

    state = initialState

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
    handleLocationSelect = (newLocation, newCountry, newLatitude, newLongitude) => {
        this.setState({
            location: newLocation,
            country: newCountry,
            latitude: newLatitude,
            longitude: newLongitude,
        })

    }

    handleCalendarOnChange = (startDate, endDate) => this.setState({ startDate, endDate });


    handleClear = (e) => {
        e.preventDefault()
        this.setState(initialState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // validations run before this ?
        // const trip = this.state;
        // Trips.insert(trip)
        Meteor.call('trips.insert',
            this.state.name,
            this.state.location,
            this.state.country,
            this.state.latitude,
            this.state.longitude,
            this.state.startDate,
            this.state.endDate
        )
    }

    render() {
        console.log(Meteor.userId())
        console.log(this.state)
        return (
            <div>
                <h1>Plan Trip</h1>
                <form>
                    <Input
                        onChange={(e) => this.handleInputChange(e)}
                        placeholder="Trip Name"
                        type="text"
                        value={this.state.name}
                        name="name"
                    />
                    <Place_Search updateLocation={this.handleLocationSelect} />
                    <Calendar startDate={this.state.startDate} endDate={this.state.endDate} calendarOnChange={this.handleCalendarOnChange} />
                    <button onClick={this.handleSubmit}> submit </button>
                    <button onClick={this.handleClear}> clear </button>
                </form>
            </div>
        )
    }
}
