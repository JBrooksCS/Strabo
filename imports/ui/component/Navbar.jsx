import React, { Component } from 'react';
import {Auth} from "./Auth"
import { Link } from "react-router-dom"


export default class NavBar extends Component {
    render() {
        return (
            <div className="Wrapper-NavBar">


                <Link to="/" style={{ textDecoration: 'none'}}>
                    <h1>Strabo</h1>
                </Link>
                
                <Auth />

            </div>
        )
    }
}
