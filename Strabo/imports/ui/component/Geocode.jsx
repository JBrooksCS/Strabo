import React, { Component } from 'react';
// import Header from './Header';
import GeocodingForm from './GeocodingForm';
import GeocodingResults from './GeocodingResults';
import * as opencage from 'opencage-api-client';

// const apiKey = 'eba0c41748d847bb86281b5a57344363';



export class Geocode extends Component {

    state = {
        query: '',
        apikey: 'eba0c41748d847bb86281b5a57344363',
        isSubmitting: false,
        response: {},
    }

    handleChange = (key, value) => {
        this.setState({ [key]: value });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isSubmitting: true });
        opencage
            .geocode({ key: this.state.apikey, q: this.state.query })
            .then(response => {
                console.log(response);
                this.setState({ response, isSubmitting: false });
            })
            .catch(err => {
                console.error(err);
                this.setState({ response: {}, isSubmitting: false });
            });
    }

    render() {
        return (
            <div>

                <div className="columns">
                    <div className="column is-one-third-desktop">
                        <GeocodingForm
                            apikey={this.state.apikey}
                            query={this.state.query}
                            isSubmitting={this.state.isSubmitting}
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="column">
                        <GeocodingResults response={this.state.response} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Geocode;
