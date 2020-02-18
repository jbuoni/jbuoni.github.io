import React, { Component } from 'react';
import '../styles/projects.less';
import Fade from 'react-reveal/Fade';
// Project Images
import mosaic1 from '../images/mosaic1.png';
import mosaic2 from '../images/mosaic2.png';
import list from '../images/list.png';
import exp1 from '../images/exp1.png';
import bbplot from '../images/bbpplot.png';
// Video
import project3 from '../images/project3.mp4';
import TopHeader from './TopHeader';

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

export const MobileProjects = () => {
    return (
        <>
            <div className="top">
                <div className="header-container">
                    <TopHeader text="Projects" lineWidth="line"/>
                </div>
                <Fade right>
                    <div className="top-image-wrapper">
                        <div className="logos">
                            <div className="circle-mobile">
                                <i className="fab fa-python fa-5x python"></i>
                            </div>
                            <div className="circle-mobile">
                                <i className="fab fa-java fa-5x java"></i>
                            </div>
                            <div className="circle-mobile">
                                <i className="fab fa-react fa-5x react"></i>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <main className="container p3">
                <div className="project-content-mobile">
                    <Fade left>
                        <div className="col sm-col-7 mosaic col-border">
                            <div className="project-title">
                                <h5>Mosaic Python</h5>
                                <RepoLink link='https://github.com/jbuoni/MosaicPython' repoType='github'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-python fa-2x python icon-mobile"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description-mobile">
                                    Mosaic Python is a mosaic photo generator. The application will generate mosaic photos using a series if inputted patch images. Using Python as well as computational photography principals, the applications take in a series of images as well as a final image to generate, creates a quick mapping of images to their histograms, and for each pixel group, maps the histogram of that
                                    the portion of the final image to the best image inputted.
                                </div>
                                <div className="project-image-container-mobile">
                                    <img src={mosaic1} className="project-image" />
                                    <img src={mosaic2} className="project-image" />
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="col sm-col-7 strategy col-border">
                            <div className="project-title">
                                <h5>Strategy Learner</h5>
                                <RepoLink link='https://bitbucket.org/JasonBuoni25/strategy-learner/src/master/' repoType='bitbucket'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-python fa-2x python icon-mobile"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description-mobile">
                                    Using a bagged random tree learner, created a market simulation on a specific stock. Learner would buy and sell stock
                                    based on specific parameters rolling means, Bollinger Bands, and sma. On average, the learner greatly outperformed the
                                    benchmark.
                                </div>
                                <div className="project-image-container-mobile">
                                    <img src={exp1} className="project-image" />
                                    <img src={bbplot} className="project-image" />
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="col sm-col-7 android-list col-border">
                            <div className="project-title">
                                <h5>Georgia Tech Scheduler</h5><RepoLink link='https://github.com/jbuoni/GeorgiaTechScheduler' repoType='github'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-python fa-2x python icon-mobile"></i>
                                    <i className="fab fa-js fa-2x python icon-mobile"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description-mobile">
                                    Creates a scheduler app that can be used (via web browser) to schedule student courses. Below is actually a video,
                                    there is just some talking up front which is muted by default.
                                </div>
                                <div className="project-image-container-mobile">
                                    <video className="video-container video-container-overlay" autoPlay muted
                                           data-reactid=".0.1.0.0" height="170em">
                                        <source type="video/mp4" data-reactid=".0.1.0.0.0" src={project3} />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="col sm-col-7 android-list col-bottom">
                            <div className="project-title">
                                <h5>Shopping List</h5><RepoLink link='https://github.com/jbuoni/Android-Grocery-List' repoType='github'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-java fa-2x icon-mobile"></i>
                                    <i className="fab fa-android fa-2x icon-mobile"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description-mobile">
                                    The Android Grocery List application allows users to store a shopping list. I really just put this in here because I do
                                    Java stuff, even though it isn't on my resume a ton.
                                </div>
                                <div className="project-image-container-mobile">
                                    <img src={list} className="project-image-full" />
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </main>
        </>
    );
}

export const Projects = () => {
    return (
        <>
            <div className="top">
                <div className="header-container">
                    <TopHeader text="Projects" lineWidth="line"/>
                </div>
                <Fade right>
                    <div className="top-image-wrapper">
                        <div className="logos">
                            <div className="circle">
                                <i className="fab fa-python fa-6x python"></i>
                            </div>
                            <div className="circle">
                                <i className="fab fa-java fa-6x java"></i>
                            </div>
                            <div className="circle">
                                <i className="fab fa-node fa-5x node"></i>
                            </div>
                            <div className="circle">
                                <i className="fab fa-react fa-6x react"></i>
                            </div>
                            <div className="circle">
                                <i className="fab fa-js fa-5x js"></i>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <main className="container p3 ">
                <div className="project-content">
                    <Fade left>
                        <div className="col sm-col-7 mosaic col-border">
                            <div className="project-title">
                                <h2>Mosaic Python</h2>
                                <RepoLink link='https://github.com/jbuoni/MosaicPython' repoType='github'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-python fa-2x python"></i>
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
                    </Fade>
                    <Fade left>
                        <div className="col sm-col-7 strategy col-border">
                            <div className="project-title">
                                <h2>Strategy Learner</h2>
                                <RepoLink link='https://bitbucket.org/JasonBuoni25/strategy-learner/src/master/' repoType='bitbucket'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-python fa-2x python"></i>
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
                    </Fade>
                    <Fade left>
                        <div className="col sm-col-7 android-list col-border">
                            <div className="project-title">
                                <h2>Georgia Tech Scheduler</h2><RepoLink link='https://github.com/jbuoni/GeorgiaTechScheduler' repoType='github'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-python fa-2x python"></i>
                                    <i className="fab fa-js fa-2x python"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description">
                                    Creates a scheduler app that can be used (via web browser) to schedule student courses. Below is actually a video,
                                    there is just some talking up front which is muted by default.
                                </div>
                                <div className="project-image-container">
                                    <video className="video-container video-container-overlay" autoPlay muted
                                           data-reactid=".0.1.0.0" height="400">
                                        <source type="video/mp4" data-reactid=".0.1.0.0.0" src={project3} />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="col sm-col-7 android-list col-bottom">
                            <div className="project-title">
                                <h2>Shopping List</h2><RepoLink link='https://github.com/jbuoni/Android-Grocery-List' repoType='github'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-java fa-2x"></i>
                                    <i className="fab fa-android fa-2x"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description">
                                    The Android Grocery List application allows users to store a shopping list.
                                </div>
                                <div className="project-image-container">
                                    <img src={list} className="project-image-full" />
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </main>
        </>
    );
}
