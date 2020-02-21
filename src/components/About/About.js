import React from 'react';
import Fade from 'react-reveal/Fade';
import '../../styles/about.less';
import Social from '../Social';
import Experience from '../Experience';
import TopHeader from '../TopHeader';
import { WhoAmI, Photo, Icon } from './aboutUtils';

const About = () => {
    return (
        <div className="about-content">
            <TopHeader text="About"/>
            <Fade top>
                <div className="about-middle">
                    <Icon faIcon="fas fa-chalkboard-teacher" title="Mentor" exp="I've been fortunate enough to be able to give back to the development community through mentoring junior developers. Seeing their success has been the most rewarding part of my career."/>
                    <Icon faIcon="fas fa-piggy-bank" title="Ambitious" exp="I learned early on that while knowledge can get you far, hard work gets you further. In my role as a Senior Developer, I take a lead from the trenches approach and am never afraid to roll up my sleeves and get to work."/>
                    <Icon faIcon="fas fa-layer-group stack" title="Full Stack" exp="From Front-end to Back-end and everything in between, I like to be involved in the full development process. By looking at the big-picture, I can anticipate potential problems and continuously improve projects on the fly."/>
                    <Icon faIcon="fas fa-robot robot" title="Extracurriculars" exp="In addition to the core CS skill set and high-level development design that I utilize in my day-to-day,through personal projects I have become well versed in the facets of cutting-edge concepts such as machine-learning, cyber-security, and cloud computing."/>
                </div>
            </Fade>
            <div className="about-bottom">
                    <div className="col sm-col-9 about-left">
                        <Fade left >
                            <Photo/>
                        </Fade>
                        <Fade bottom>
                            <WhoAmI />
                        </Fade>
                    </div>
                <div className="col about-right">
                    <Fade right>
                        < Experience />
                    </Fade>
                    <Fade bottom>
                        < Social />
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default About;
