import React, { Component, Fragment } from 'react';
import styles from './home.css';
import SplitText from 'react-pose-text';
import ReactDom from 'react-dom';

  const charPoses = {
    exit: { y: 20, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
      transition: ({ charInWordIndex }) => ({
        type: 'spring',
        delay: charInWordIndex * 80,
        stiffness: 700 + charInWordIndex * 50,
        damping: 15 - charInWordIndex * 1
      })
    }
  };

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };

    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 250);
    }

    render() {
      const { isLoading } = this.state;
        return(
          <div className="home">
            <div className="home-intro">
              <div>Making the Web</div>
              <div><span className="bg-accent">
                { 
                  isLoading 
                  ? null 
                  : <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>cooler,</SplitText>
                }
                </span> one Site</div>
              <div>at a time.</div>
            </div>            
          </div>
        );
    }
}

export default Home;