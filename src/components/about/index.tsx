import { Reveal } from 'react-awesome-reveal'

import Icon from './icon'
import Experience from './experience'
import Social from './social'
import TopHeader from '../topHeader'

import './about.less'

import me from '../../assets/me.jpg'

const About = () => {
    const clickFarm = () => {
        const win = window.open('http://lachenbockfarm.com/', '_blank')
        win?.focus()
    }
    
    return (
        <div className="about-content">
            <Reveal><TopHeader text="About"/></Reveal>
            <Reveal className="about-middle-fade">
                <div className="about-middle">
                    <Icon faIcon="fas fa-chalkboard-teacher" title="Mentor" exp="I've been fortunate enough to be able to give back to the development community through mentoring junior developers. Seeing their success has been the most rewarding part of my career."/>
                    <Icon faIcon="fas fa-piggy-bank" title="Ambitious" exp="I learned early on that while knowledge can get you far, hard work gets you further. In my role as a Senior Developer, I take a lead from the trenches approach and am never afraid to roll up my sleeves and get to work."/>
                    <Icon faIcon="fas fa-layer-group stack" title="Full Stack" exp="From creating features to deployment and everything in between, I like to be involved in the full development process. By looking at the big-picture, I can anticipate potential problems and continuously improve projects on the fly."/>
                    <Icon faIcon="fas fa-robot robot" title="Extracurriculars" exp="In addition to the core CS skill set and high-level development design that I utilize in my day-to-day,through personal projects I have become well versed in the facets of cutting-edge concepts such as machine-learning, cyber-security, and cloud computing."/>
                </div>
            </Reveal>
            <div className="about-bottom">
                    <div className="col sm-col-9 about-left">
                        <Reveal>
                            <div className="octo">
                                <div className="octo1">
                                    <img className="photo" src={me}/>
                                </div>
                            </div>
                            <div className="about-text">
                                <h3 className="about-h1">Who's This Guy?</h3>
                                I am a full stack developer who loves just about every language not named C. 
                                After spending years in the Rochester tundra, I was able to earn my undergrad from RIT. 
                                Once I moved to the tropics in Atlanta, I worked to obtain my Masters from Georgia Tech. 
                                I am also a pet enthusiast, and will always have multiple pets in my house at any given time. 
                                My parents raise Nubian Goats and Great Pyrenees puppies. One day I'll redo their website, but for now you can see it
                                <span  className="item-hover" onClick={clickFarm}><i> here.</i></span> 
                            </div>
                        </Reveal>
                    </div>
                <div className="col about-right">
                    <Reveal>
                        < Experience />
                    </Reveal>
                    <Reveal>
                        < Social />
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default About
