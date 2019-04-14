import React, { Component } from 'react';
import posed from 'react-pose';
import OnlineResume from './online-resume/online-resume';
import styles from './resume.css';

const Container = posed.div({
    enter: { staggerChildren: 50 }
  });
  
const DIV = posed.div({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
});

class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = {toggleResume: true};
        this.toggleResume = this.toggleResume.bind(this);
    }

    toggleResume() {
        this.setState(state => ({
            toggleResume: !state.toggleResume
        }));
    }

    render() {
        return !this.state.toggleResume
            ? <OnlineResume toggleResume={this.toggleResume} /> 
            : (
                <Container className="resume-container">
                    <DIV className="resume-type">
                        <button className="resume-btn" onClick={this.toggleResume}>ONLINE</button>                            
                    </DIV>
                    <DIV className="resume-type">
                        <a href="\assets\resources\Resume-Shazin_Ramji.pdf" target="_blank">PDF</a>
                    </DIV>
                    <DIV className="resume-type">
                        <a href="\assets\resources\Resume-Shazin_Ramji.doc" target="_blank">DOC</a>
                    </DIV>
                </Container>
              )
    }
}

export default Resume;