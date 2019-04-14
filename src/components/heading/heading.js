import React, { Component } from 'react';
import styles from './heading.css';
import { NavLink } from 'react-router-dom';

class Heading extends Component {
    render() {
        return(
            <div className="header-container">
              <NavLink to="/">
                <h1>Shaz</h1>
                <h2>Front End <span className="block">Developer</span></h2>
              </NavLink>
            </div>
        );
    }
}

export default Heading;