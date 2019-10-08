import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Auth } from "./Auth";
import TripDashboard from './TripDashboard';
import { Meteor } from 'meteor/meteor';
import { Landing } from "./Landing";
import TripForm from './TripForm';
import TripView from './TripView';



class AppViews extends Component {


    render() {
        // console.log("MeteorUser : ", Meteor.user())
        return (

            <div className="Wrapper-AppViews">

                <Route exact path="/" render={props => {
                    if (window.localStorage.getItem("Meteor.userId")) {
                        return <Redirect to="/dashboard" />
                    } else {
                        return <Redirect to="/landing" />
                    }
                }} />


                <Route exact path="/landing" render={props => {
                    if (window.localStorage.getItem("Meteor.userId")) {
                        return <Redirect to="/dashboard" />
                    } else {
                        return <Landing />
                    }
                }} />

                <Route exact path="/dashboard" render={props => {
                    if (window.localStorage.getItem("Meteor.userId")) {
                        return <TripDashboard />
                    } else {
                        return <Redirect to="/landing" />
                    }
                }} />
                <Route exact path="/tripform" render={(props) => {
                    if (window.localStorage.getItem("Meteor.userId")) {
                        return <TripForm {...props} />
                    } else {
                        return <Redirect to="/landing" />
                    }
                }} />
                <Route path="/trip/:tripId" render={(props) => {
                    if (window.localStorage.getItem("Meteor.userId")) {
                        return <TripView {...props} />
                    } else {
                        return <Redirect to="/landing" />
                    }
                }} />
            </div>
        )
    }
}

export default withRouter(AppViews);
