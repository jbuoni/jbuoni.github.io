import React, { Component } from 'react';
import '../../styles/projects.less';
// Logos
import python from '../../images/python.png';
import java from '../../images/java.png';
import node from '../../images/node.png';
import android from '../../images/android.png';
import react from '../../images/react.png';
import csharp from '../../images/csharp.png';
import mongo from '../../images/mongo.png';
import js from '../../images/js.png';
// Project Images
import mosaic1 from '../../images/mosaic1.png';
import mosaic2 from '../../images/mosaic2.png';
import list from '../../images/list.png';
import exp1 from '../../images/exp1.png';
import bbplot from '../../images/bbpplot.png';
// Video
import project3 from '../../images/project3.mp4';

function RepoLink({ repoType, link }) {
    const onClick = () => {
        const win = window.open(link, '_blank');
        win.focus();
    };

    const className = repoType === 'github' ? 'fa-github-alt' : 'fa-bitbucket';


    return (
        <div className="project-link item-hover" onClick={onClick}>
            <i className={`fab ${className} fa-2x icon`} aria-hidden="true"></i>
        </div>
    );
}

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
                            <img src={mongo} className="me-logo" />
                        </div>
                    </div>
                    <div className="top-text">
                        <h2 className="top-h2">Projects</h2>
                        <span className="top-title">Most of Jason's projects are in private repos, but what he can show is below.</span>
                    </div>
                </div>
                <main className="container p3 ">
                    <div className="project-content">
                        <div className="col sm-col-7 mosaic col-border">
                            <div className="project-title">
                                <h2>Mosaic Python</h2><RepoLink link='https://github.com/jbuoni/MosaicPython' repoType='github'/>
                                <div className="project-tool-container">
                                    <img src={python} className="project-tool" />
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description">
                                    Mosaic Python is a mosaic photo generator. The application will generate mosaic photos using a series if inputted patch images. Using Python as well as computational photography principals, the applications take in a series of images as well as a final image to generate, creates a quick mapping of images to their histograms, and for each pixel group, maps the histogram of that
                                    the portion of the final image to the best image inputted.
                                </div>
                                <div className="project-image-container">
                                    <img src={mosaic1} className="project-image" />
                                    <img src={mosaic2} className="project-image" />
                                </div>
                            </div>
                        </div>
                        <div className="col sm-col-7 strategy col-border">
                            <div className="project-title">
                                <h2>Strategy Learner</h2><RepoLink link='https://bitbucket.org/JasonBuoni25/strategy-learner/src/master/' repoType='bitbucket'/>
                                <div className="project-tool-container">
                                    <img src={python} className="project-tool" />
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description">
                                    Using a bagged random tree learner, created a market simulation on a specific stock. Learner would buy and sell stock
                                    based on specific parameters rolling means, Bollinger Bands, and sma. On average, the learner greatly outperformed the
                                    benchmark.
                                </div>
                                <div className="project-image-container">
                                    <img src={exp1} className="project-image" />
                                    <img src={bbplot} className="project-image" />
                                </div>
                            </div>
                        </div>
                        <div className="col sm-col-7 android-list col-border">
                            <div className="project-title">
                                <h2>Georgia Tech Scheduler</h2><RepoLink link='https://github.com/jbuoni/GeorgiaTechScheduler' repoType='github'/>
                                <div className="project-tool-container">
                                    <img src={python} className="project-tool" />
                                    <img src={js} className="project-tool" />
                                    <img src={mongo} className="project-tool" />
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description">
                                    Creates a scheduler app that can be used (via web browser) to schedule student courses.
                                </div>
                                <div className="project-image-container">
                                    <video className="video-container video-container-overlay" autoPlay muted
                                           data-reactid=".0.1.0.0" height="400">
                                        <source type="video/mp4" data-reactid=".0.1.0.0.0" src={project3} />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="col sm-col-7 android-list col-bottom">
                            <div className="project-title">
                                <h2>Shopping List</h2><RepoLink link='https://github.com/jbuoni/Android-Grocery-List' repoType='github'/>
                                <div className="project-tool-container">
                                    <img src={java} className="project-tool" />
                                    <img src={android} className="project-tool" />
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description">
                                    The Android Grocery List application allows users to store a shopping list. I really just put this in here because I do
                                    Java stuff, even though it isn't on my resume a ton.
                                </div>
                                <div className="project-image-container">
                                    <img src={list} className="project-image-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }

}