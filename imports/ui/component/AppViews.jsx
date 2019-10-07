import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import TripDashboard from './TripDashboard';
import Landing from './Landing'
import TripForm from './TripForm';

class AppViews extends Component {
    render() {
        return (

            <div className="Wrapper-AppViews">

                <Route exact
                    path="/"
                    component={() => <Landing currentUser={this.props.currentUser} />}
                />

                <Route exact path="/dashboard" component={TripDashboard} />

                <Route exact path="/tripform" render={(props) =>

                    <TripForm {...props} />} >

                </Route>

            </div>
        )
    }
}

export default withRouter(AppViews);
