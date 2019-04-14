import React, { Component } from 'react';
import posed from 'react-pose';
import styles from './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
 
const Container = posed.div({
    enter: { staggerChildren: 50 }
  });
  
const P = posed.div({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
});


class Contact extends Component {

    render() {
        return(
            <Container className="connect">
                <P><a href="mailto:shazin.rr@gmail.com"><FontAwesomeIcon className="connect-icon" icon={faEnvelope} /></a></P>
                <P><a href="tel:647-535-9276"><FontAwesomeIcon className="connect-icon" icon={faPhone} /></a></P>
                <P><a href="https://www.linkedin.com/in/shazinr/" target="_blank"><svg className="connect-icon" width="48" height="48" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a></P>
            </Container>
        );
    }
}

export default Contact;