import React, { Component } from 'react';
import me from '../../images/me.jpg';
import Fade from 'react-reveal/Fade';
import '../../styles/about.less';
import Social from './Social';
import Experience from './Experience';
import python from "../../images/python.png";
import java from "../../images/java.png";
import node from "../../images/node.png";
import android from "../../images/android.png";
import react from "../../images/react.png";
import csharp from "../../images/csharp.png";
import mongo from "../../images/mongo.png";

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
                <Fade top>
                    <div className="about-top">
                        <h1 className="about-h3">About</h1>
                        <div className="header-bar"></div>
                    </div>
                </Fade>
                {/*<div className="about-middle">*/}
                    {/*<div className="circle">*/}
                        {/*<i className="fas fa-layer-group fa-4x mid-icom"></i>*/}
                    {/*</div>*/}
                    {/*<div className="middle-text">*/}
                        {/*<span className="mid-title"></span>*/}
                        {/*<span className="mid-sub"></span>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div className="about-bottom">
                    <Fade left >
                        <div className="col sm-col-9 about-left">
                            <Photo/>
                            <div className="about-text">
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
