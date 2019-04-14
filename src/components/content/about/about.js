import React, { Component } from 'react';
import posed from 'react-pose';
import styles from './about.css';

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
const IMG = posed.img({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

class About extends Component {
    render() {
        return(
          <Container className="about-content">
            <div className="media">    
              <IMG src="/assets/me.jpg" alt="Shazin Ramji"/>     
            </div>          
            <div className="text">
              <P>I am a web developer specializing in Front End web applications, who loves all things web!</P>
              <P>The start of my web development career began five years ago when I performed a simple Google search. Little did I know this one search would open my eyes to a whole other side of the world wide web, setting my career trajectory on a new path. I realized how valuable of a skill it is to know how to develop websites online.</P>
              <P>I love what the web can do and its future potential to help advance us in our everyday lives. The consistent learning of all the different programming languages used to create online experiences, and being involved with the emergence of new technologies.</P>
            </div>
          </Container>
        );
    }
}

export default About;