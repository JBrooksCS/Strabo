import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';


export class GooglePlaces extends Component {
    render() {
        return (
            <div>
                <Geosuggest />
            </div>
        );
    }
}

export default GooglePlaces;
