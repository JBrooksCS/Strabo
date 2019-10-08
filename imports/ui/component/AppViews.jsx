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
        // console.log(Meteor.user() )
        // console.log(this.props)

        return (

            <div className="Wrapper-AppViews">

                <Route exact path="/" render={props => {
                    if (Meteor.user()) {
                        return <Redirect to="/dashboard" />
                    } else {
                        return <Redirect to="/landing" />
                    }
                }} />

                <Route exact path="/landing" component={Landing} />

                <Route exact path="/dashboard" component={TripDashboard} />

                <Route exact path="/tripform" render={(props) =>

                    <TripForm {...props} />} />

                <Route path="/trip/:tripId" render={(props) =>

                    <TripView {...props} />} />

            </div>
        )
    }
}

export default withRouter(AppViews);
