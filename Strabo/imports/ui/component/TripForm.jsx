import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';
import { Trips } from '../../api/trips'
import Calendar from './Calendar';

const initialState = {
    name: "",
    location: ""
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


    handleClear = (e) => {
        e.preventDefault()
        this.setState(initialState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        Meteor.call('trips.insert', this.state.name, this.state.location)
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
                    <Input
                        onChange={(e) => this.handleInputChange(e)}
                        placeholder="Trip Location"
                        type="text"
                        value={this.state.location}
                        name="location"
                    />
                    <Calendar />
                    <button onClick={this.handleSubmit}> submit </button>
                    <button onClick={this.handleClear}> clear </button>
                </form>
            </div>
        )
    }
}
