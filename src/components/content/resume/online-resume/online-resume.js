import React, { Component } from 'react';
import posed from 'react-pose';
import { findDOMNode } from 'react-dom';
import styles from './online-resume.css';

const Container = posed.div({
    enter: { staggerChildren: 50 }
  });
  
const DIV = posed.div({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
});

class OnlineResume extends Component {
    constructor(props) {
        super(props);
        this.clickOffModal = this.clickOffModal.bind(this);
    }    
    componentDidMount() {        
        document.addEventListener('click', this.clickOffModal, true);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.clickOffModal, true);
    }
    clickOffModal(event) {
        let modalRef = findDOMNode(this.setModalRef);
        const { toggleResume } = this.props;
        if(modalRef && !modalRef.contains(event.target)) {            
            toggleResume();
        }
    }
    
    render() {
        const {
            toggleResume,
        } = this.props;

        // remove scrollbar on resume page
        var showParticles = null;
        var particlesOn = window.location.href;
        if(particlesOn.match('resume')) {
            var root = document.getElementById('root');
            root.style.overflowY = 'hidden';
        } else {
            root.style.overflowY = 'auto';
        }

        return(
            <Container>            
            <DIV className="resume" ref={(node) => { this.setModalRef = node; }}>
                <div className="header">
                    <h1>SHAZIN RAMJI</h1>                    
                    <button className="close" value="close" onClick={() => toggleResume()}>X</button>
                </div>
                <div className="info">
                    <p><a href="tel:647-535-9276" target="_blank">(647) 535 - 9276</a></p>
                    <p><a href="https://shaz.dev" target="_blank">shaz.dev</a></p>
                    <p><a href="mailto:shazin.rr@gmail.com" target="_blank">shazin.rr@gmail.com</a></p>
                </div>
                <div className="summary">
                    <h3>Summary</h3>
                    <p>A dedicated and motivated web developer focused on continuously advancing technical skillsets used in building front end applications, with a keen interest in the full stack.</p>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <div>
                        <h4>Technical</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3/LESS</li>
                            <li>JavaScript/<span className="spacing"></span>jQuery</li>
                            <li>Bootstrap</li>
                            <li>React, Angular</li>
                            <li>PHP, WordPress</li>
                            <li>SVN, TFS, GIT</li>
                            <li>Photoshop</li>
                            <li>Visual Studio, Jira, SharePoint</li>                        
                        </ul>                        
                    </div>
                    <div>
                        <h4>Online</h4>
                        <ul>
                            <li>Search engine optimization</li>
                            <li>Digital marketing & advertising</li>
                            <li>User website testing</li>
                            <li>Content management</li>
                            <li>Writing</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Soft </h4>
                        <ul>
                            <li>Innovative problem solver</li>
                            <li>Technologically inquisitive</li>
                            <li>Detail oriented</li>
                            <li>Quick learner</li>
                            <li>Highly analytical</li>
                        </ul>
                    </div>                    
                </div>
                <div className="career-history">
                    <h3>Career History</h3>
                    <div>
                        <p>Bond Brand Loyalty ‐ Front End Developer & eLearning Specialist</p>
                        <p>FEB 2017 – PRESENT</p>
                        <ul>
                            <li>Develop interactive eLearning modules for Ford’s internal training campaigns on the SCORM platform using a proprietary framework, HTML5, CSS3, jQuery and Bootstrap</li>
                            <li>Design innovative mockups, create new screen layouts and source/edit images using Photoshop and Illustrator</li>
                            <li>Liaise with backend developers to build responsive websites with Umbraco and the ASP.NET MVC framework, using mockups provided on Zeplin, Invision or Photoshop</li>
                            <li>Assist project managers in coordinating with the creative team and QA to ensure successful and timely delivery of multiple projects running simultaneously</li>
                            <li>Troubleshoot and test for bugs, cross browser compatibility and web/mobile responsiveness</li>
                            <li>Increased efficiency and decreased timelines by 25%, which resulted in decreased project budgets and higher revenue for the company</li>
                        </ul>                        
                    </div>
                    <div className="position">
                        <p>Self‐Employed ‐ Web Developer, Digital Marketer, Transcriptionist</p>
                        <p>OCT 2013 – PRESENT</p>
                        <ul>
                            <li>Create mockups and build customized, responsive and mobile friendly websites to ensure a positive user experience</li>
                            <li>Market company products and services through research and written content via WordPress</li>
                            <li>Manage online SEO for websites using various <span className="no-wrap">on‐page</span> and <span className="no-wrap">off‐page</span> techniques</li>
                            <li>Manually convert audio recordings into MS Word documents</li>
                        </ul>
                    </div>
                    <div className="jobs">
                        <p>Pareto Marketing ‐ Promotional Representative</p>
                        <p>JUNE 2012 – JULY 2013</p>
                        <span className="line"></span>
                        <p>LVG Auctions ‐ Marketing Coordinator/Inside Sales </p>
                        <p>NOV 2011 – APR 2012</p>
                        <span className="line"></span>
                        <p>M&S Exclusive Entertainment ‐ <span className="no-wrap">Co‐Owner</span>/Choreographer/Dancer  </p>
                        <p>SEPT 2004 – DEC 2012</p>
                        <span className="line"></span>
                        <p>CIBC ‐ Financial Services/Sales Representative</p>
                        <p>NOV 2010 – APR 2011</p>
                        <span className="line"></span>
                    </div>
                    <div className="education">
                        <h3>Education/Certificates</h3>
                        <p>2017 ‐ Google Mobile Site Developer, AdWords & Analytics Certified</p>
                        <p>2014 ‐ Post Graduate Certificate in Webmaster Content Site Design, Seneca College, 4.0 GPA</p>
                        <p>2011 ‐ Bachelor of Arts, Undergraduate Degree, English, York University</p>
                    </div>
                    <p className="references">REFERENCES AVAILABLE UPON REQUEST</p>
                </div>
            </DIV>                
            </Container>
        );
    }
}

export default OnlineResume;