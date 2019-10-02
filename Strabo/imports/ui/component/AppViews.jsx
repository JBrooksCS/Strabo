import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {Auth} from "./Auth"
import TripDashboard from './TripDashboard';
import { Meteor } from 'meteor/meteor';
import {Landing} from "./Landing"


class AppViews extends Component {
    render() {
        // console.log(Meteor.user() )
        console.log("AppViews Rendering")

        return (
            
            <div className="Wrapper-AppViews">

                <Route path="/" render={props => {
                    if (Meteor.user()) {
                        return <Redirect to="/dashboard"  />
                    } else{
                        return <Redirect to="/landing" />
                    }
                }} />

                <Route exact path="/landing" component={Landing} />

                <Route exact path="/dashboard" component={TripDashboard} />

            </div>
        )
    }
}

export default withRouter(AppViews);
