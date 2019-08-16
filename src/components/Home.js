import React, { Component } from 'react';
import me from '../images/me.jpg';
import { onBitbucketClick, onFacebookClick, onGithubClick, onLinkedInClick } from '../utils/navUtils';
import '../styles/home.less';
// import python from '../images/python.png';
// import java from '../images/java.png';
// import node from '../images/node.png';
// import android from '../images/android.png';
// import react from '../images/postgres.png';
// import postgres from '../images/react.png';
// import csharp from '../images/csharp.png';
// import mongo from '../images/mongo.png';
// import scala from '../images/scala.png';

export default class Home extends Component {
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
            <>
                <div className="home-top">
                    <div className="home-image-wrapper">
                        <img src={me} className="me-img" />
                    </div>
                    <div className="home-top-text">
                        <h2 className="home-h2">Jason Buoni</h2>
                        <span className="home-title">Software developer <br/> Avid mentor <br/> Pet enthusiast</span>
                    </div>
                </div>
                <main className="container p3 ">
                    <div className="home-content">
                        <div className="col sm-col-9">
                            <h3 className="home-h3">About Jason</h3>
                            <span>
                                Jason is a full stack developer who loves just about every language not named C.
                                After spending years in the Rochester tundra, Jason was able to receive his undergrad from RIT.
                                Once he moved to the tropics in Atlanta, Jason worked to receive his masters from Georgia Tech.
                                Jason is also a pet enthusiast, who will always have 2 - 5 pets in his house at any given time.
                                In his free time, Jason also likes to pick up heavy objects and put them back down, and run to
                                the same place he started at. Jason also have very loving parents who raise Nubian Goats and
                                Great Pyrenees puppies. One day Jason will redo their website, but for now you can see it
                                <span  className="item-hover" onClick={this.clickFarm}><i> here.</i></span>
                            </span>
                            {/*<div className="logos">*/}
                                {/*<img src={python} className="me-logo" />*/}
                                {/*<img src={java} className="me-logo" />*/}
                                {/*<img src={node} className="me-logo" />*/}
                                {/*<img src={android} className="me-logo" />*/}
                                {/*<img src={react} className="me-logo" />*/}
                                {/*<img src={csharp} className="me-logo" />*/}
                                {/*<img src={scala} className="me-logo" />*/}
                                {/*<img src={postgres} className="me-logo" />*/}
                                {/*<img src={mongo} className="me-logo" />*/}
                            {/*</div>*/}
                        </div>
                        <div className="col sm-col-3">
                            <h3 className="home-h3">Contact</h3>
                            <div className="links">
                                <div className="item-hover" onClick={onFacebookClick}>
                                    <i className="fab fa-facebook fa-2x icon"></i><
                                    span className="h5 header-font home-link">Facebook</span>
                                </div>
                                <div className="item-hover" onClick={onLinkedInClick}>
                                    <i className="fab fa-linkedin-in fa-2x icon"></i>
                                    <span className="h5 header-font home-link">LinkedIn</span>
                                </div>
                                <div className="item-hover" onClick={onGithubClick}>
                                    <i className="fab fa-github-alt fa-2x icon" aria-hidden="true"></i>
                                    <span className="h5 header-font home-link">Github</span>
                                </div>
                                <div className="item-hover" onClick={onBitbucketClick}>
                                    <i className="fab fa-bitbucket fa-2x icon" aria-hidden="true"></i>
                                    <span className="h5 header-font home-link">Bitbucket</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </>
        );
    }

}
