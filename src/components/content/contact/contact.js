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
                <P><a href="https://github.com/IamShaz" target="_blank"><svg className="connect-icon" width="48" height="48" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a></P>
            </Container>
        );
    }
}

export default Contact;