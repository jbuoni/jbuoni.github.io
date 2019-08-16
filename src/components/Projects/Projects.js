import React, { Component } from 'react';
import python from '../../images/python.png';
import java from '../../images/java.png';
import node from '../../images/node.png';
import android from '../../images/android.png';
import react from '../../images/postgres.png';
import postgres from '../../images/react.png';
import csharp from '../../images/csharp.png';
import mongo from '../../images/mongo.png';
import scala from '../../images/scala.png';

export default class Projects extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <div className="top">
                    <div className="top-image-wrapper">
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
                    </div>
                    <div className="top-text">
                        <h2 className="top-h2">Projects</h2>
                        <span className="top-title">Most of Jason's projects are in private repos, but what he can show is below.</span>
                    </div>
                </div>
            </>
        );
    }

}
