import React, { Component } from 'react';
import me from '../../images/me.jpg';
import python from '../../images/python.png';
import java from '../../images/java.png';
import node from '../../images/node.png';
import android from '../../images/android.png';
import react from '../../images/postgres.png';
import postgres from '../../images/react.png';
import csharp from '../../images/csharp.png';
import mongo from '../../images/mongo.png';
import scala from '../../images/scala.png';

export default class Me extends Component {
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
                <h3 className="me content-text">Who am I?</h3>
                <div className="me me-top">
                    <img src={me} className="me-img" />
                    <div className="me content-text">
                        Ambitious driven, and awesome. I like to do a little bit of everything. From UI to DevOps, if it exists, I probably have at least looked at it once. I
                        spend most of my time doing full stack web developement, but I am always open to try new things, such as security focused or devops focused opportunities.
                        I have used many different langauges and tools over the years, but here are a few. Either I like their logo, or my recruiter friend told me to showcase them.
                        <div className="logos">
                            <img src={python} className="me-logo" />
                            <img src={java} className="me-logo" />
                            <img src={node} className="me-logo" />
                            <img src={android} className="me-logo" />
                            <img src={react} className="me-logo" />
                            <img src={csharp} className="me-logo" />
                            <img src={scala} className="me-logo" />
                            <img src={postgres} className="me-logo" />
                            <img src={mongo} className="me-logo" />
                        </div>
                        And before you ask, those are not my goats. My parents own a farm and raise and sell goats and Great Pyraneese. If you want a new pet check out <span  className="farm" onClick={this.clickFarm}> their farm here!</span>
                    </div>
                </div>

            </>
    );
    }

}
