import React, { Component } from 'react';
import me from '../../images/me.jpg';
import Fade from 'react-reveal/Fade';
import '../../styles/mobile.less';
import Social from './Social';
import Experience from './Experience';
import TopHeader from '../TopHeader';

function Photo() {
    return (
        <div className="octo">
            <div className="octo1">
                <img src={me} width="320" height="316" />
            </div>
        </div>
    );
}

export default class MobileAbout extends Component {
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
            <div className="about-content-mobile">
                <TopHeader text="About"/>
                <div className="about-bottom">
                    <div className="col sm-col-9">
                        <Fade left >
                            <Photo/>
                        </Fade>
                        <Fade bottom>
                            <div className="about-text">
                                <h3 className="about-h1">Who's This Guy?</h3>
                                I am a full stack developer who loves just about every language not named C. After spending years in the Rochester tundra, I was able to earn my undergrad from RIT. Once I moved to the tropics in Atlanta, I worked to obtain my Masters from Georgia Tech. I am also a pet enthusiast, and will always have multiple pets in my house at any given time. I also have very loving parents who raise Nubian Goats and Great Pyrenees puppies. One day I'll redo their website, but for now you can see it
                                <span  className="item-hover" onClick={this.clickFarm}><i> here.</i></span>
                            </div>
                        </Fade>
                    </div>
                    <div className="col">
                        <Fade right>
                            < Experience />
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }

}
