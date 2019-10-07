import React, { Component } from 'react';
import {Auth} from "./Auth"

export default class NavBar extends Component {
    render() {
        return (
            <div className="Wrapper-NavBar">


                <h1>Strabo</h1>
                <Auth />

            </div>
        )
    }
}
