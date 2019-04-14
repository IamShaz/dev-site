import React, { Component } from 'react';
import Heading from './components/heading/heading';
import NavContent from './components/nav-content/nav-content';
import Home from './components/home/home';
import Favicon from 'react-favicon';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      [
        <Favicon url="/assets/me.jpg" />,
        <Heading key="Header"/>,
        <NavContent key="NavContent"/>
      ]
    );
  }
}

export default App;
