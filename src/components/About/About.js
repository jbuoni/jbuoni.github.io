import React, { Component } from 'react';
import me from '../../images/me.jpg';
import Fade from 'react-reveal/Fade';
import '../../styles/about.less';
import Social from './Social';
import Experience from './Experience';
import TopHeader from '../TopHeader';

function Icon({ faIcon, title, exp}) {
    return (
        <div className="icon-container">
            <div className="circle">
                <i className={`${faIcon} fa-4x mid-icon`}></i>
            </div>
            <div className="middle-text">{title}</div>
            <div className="middle-exp">{exp}</div>
        </div>
    )
}

function Photo() {
    return (
        <div className="octo">
            <div className="octo1">
                <img src={me} width="320" height="316" />
            </div>
        </div>
    );
}

export default class About extends Component {
    constructor(props) {
        super(props);

        this.clickFarm = this.clickFarm.bind(this);

    }

    clickFarm(e) {
        const win = window.open('http://lachenbockfarm.com/', '_blank');
        win.focus();
    }

    render() {
        return (
            <div className="about-content">
                <TopHeader text="About"/>
                <Fade top>
                    <div className="about-middle">
                        <Icon faIcon="fas fa-chalkboard-teacher" title="Mentor" exp="I been fortunate enough to be able to give back to the development community through mentoring junior developers. Seeing their success has been the most rewarding part of my career."/>
                        <Icon faIcon="fas fa-piggy-bank" title="Ambitious" exp="I learned early on that while knowledge can get you far, hard work gets you further. In my role as a Senior Developer, I take a lead from the trenches approach and am never afraid to roll up my sleeves and get to work."/>
                        <Icon faIcon="fas fa-layer-group stack" title="Full Stack" exp="From UI to Databases, I like to be involved in the full process."/>
                        <Icon faIcon="fas fa-hat-wizard hat" title="Multiple Hats" exp="Context switching is one of my stronger skills. I prefer can do a bit of everything."/>
                    </div>
                </Fade>
                <div className="about-bottom">
                    <Fade left >
                        <div className="col sm-col-9 about-left">
                            <Photo/>
                            <div className="about-text">
                                <h3 className="about-h1">Who's This Guy?</h3>
                                Jason is a full stack developer who loves just about every language not named C.
                                After spending years in the Rochester tundra, Jason was able to receive his undergrad from RIT.
                                Once he moved to the tropics in Atlanta, Jason worked to receive his Masters from Georgia Tech.
                                Jason is also a pet enthusiast, who will always have multiple pets in his house at any given time.
                                Jason also have very loving parents who raise Nubian Goats and
                                Great Pyrenees puppies. One day Jason will redo their website, but for now you can see it
                                <span  className="item-hover" onClick={this.clickFarm}><i> here.</i></span>
                            </div>
                        </div>
                    </Fade>
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

}
