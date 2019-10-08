import React, { Component } from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';


export class Auth extends Component {


    render() {

        // console.log("Auth Rendering")

        // console.log(Meteor.user() )

        return (
            <div>
                {/* <h1>AUTH PAGE</h1> */}
                <AccountsUIWrapper />
            </div>
        );
    }
}

export default Auth;
