import React, { Component } from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';


export class Auth extends Component {


    render() {
        // console.log("Auth Rendering")
        return (
            <div>
                <AccountsUIWrapper />
            </div>
        );
    }
}

export default Auth;
