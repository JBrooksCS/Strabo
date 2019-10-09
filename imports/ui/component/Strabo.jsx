import React, { Component } from 'react';
import NavBar from './Navbar';
import AppViews from './AppViews';
import { withTracker } from 'meteor/react-meteor-data';
import { Trips } from '../../api/trips';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';




class Strabo extends Component {
    render() {
        console.log("Strabo Rendering")
        return (
            <div className="Wrapper-Strabo">
                <NavBar />
                <AppViews {...this.props} />
            </div>
        )
    }
}
// export default Strabo;
export default Strabo;
