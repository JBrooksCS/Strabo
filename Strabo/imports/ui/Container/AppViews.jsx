import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AppViews extends Component {
    render() {
        return (
            <div className="Wrapper-AppViews">
                <p>Appviews wooo</p>
            </div>
        )
    }
}

export default withRouter(AppViews);
