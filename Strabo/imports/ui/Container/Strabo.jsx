import React, { Component } from 'react';
import NavBar from './Navbar';
import AppViews from './AppViews';

class Strabo extends Component {
    render() {
        return (
            <div className="Wrapper-Strabo">
                <NavBar />
                <AppViews />
            </div>
        )
    }
}


export default Strabo;