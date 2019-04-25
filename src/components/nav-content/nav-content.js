import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import About from '../content/about/about';
import Resume from '../content/resume/resume';
import Contact from '../content/contact/contact';
import styles from './nav-content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import posed, { PoseGroup } from 'react-pose';
import { fallDown as Menu } from 'react-burger-menu';
import Particles from 'react-particles-js';

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
});

class NavContent extends Component {
    showSettings (event) {
        event.preventDefault();
      }
    render() {
        
        var showParticles = null;
        var particlesOn = window.location.href;
        if(window.location.pathname === '/' || particlesOn.match('home')) {
            showParticles = 
            <Particles
            params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                },
                "color": {
                    "value": "#373737"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            }
            }} />;

        }
        return(
            <Route
            render={({ location }) => (
              <div className="bottom-container">
                <div className="side-bar">
                    <nav>
                        <ul>
                            <li>                        
                                <NavLink to="/" activeClassName="active"><FontAwesomeIcon className="home-icon" icon={faHome} /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName="active">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/resume" activeClassName="active">Resume</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="active">Connect</NavLink>
                            </li>                                    
                        </ul>                  
                    </nav>                    
                </div>
                <div className="side-bar-mobile">
                    <Menu width={ 200 } noOverlay right>
                            <li>                        
                                <NavLink to="/" activeClassName="active"><FontAwesomeIcon className="home-icon" icon={faHome} /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName="active">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/resume" activeClassName="active">Resume</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="active">Connect</NavLink>
                            </li>    
                    </Menu>                                    
                </div>
                { showParticles }
                <div className="content-wrapper">
                    <PoseGroup>
                        <RouteContainer key={location.pathname}>
                        <Switch location={location}>
                            <Route exact path="/" component={Home} key="/app" />
                            <Route path="/about" component={About} key="about" />
                            <Route path="/resume" component={Resume} key="resume" />
                            <Route path="/contact" component={Contact} key="contact" />
                        </Switch>
                        </RouteContainer>
                    </PoseGroup>    
                </div>                
              </div>
            )}
            />
        );
    }
}

export default NavContent;
