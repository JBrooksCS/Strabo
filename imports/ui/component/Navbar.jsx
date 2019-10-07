import React, { Component } from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

export default class NavBar extends Component {
    render() {
        return (
            <div className="Wrapper-NavBar">
                <h1>Strabo</h1>
                <AccountsUIWrapper />
            </div>
        )
    }
}
