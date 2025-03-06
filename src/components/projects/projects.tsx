
import { Reveal } from 'react-awesome-reveal'
// Project Images
import mosaic1 from '../../assets/mosaic1.png'
import mosaic2 from '../../assets/mosaic2.png'
import list from '../../assets/list.png'
import exp1 from '../../assets/exp1.png'
import bbplot from '../../assets/bbpplot.png'
import angular1 from '../../assets/angular1.png'
import angular2 from '../../assets/angular2.png'
import lbf1 from '../../assets/lbf1.png'
import lbf2 from '../../assets/lbf2.png'
// Video
import project3 from '../../assets/project3.mp4'
import TopHeader from '../topHeader'
import RepoLink from './shared'

import './projects.less'

const Projects = () => {
    return (
        <>
            <div className="top">
                <div className="header-container">
                    <TopHeader text="Projects" lineWidth="line"/>
                </div>
                <Reveal>
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
                </Reveal>
            </div>
            <main className="container p3 ">
                <div className="project-content">
                <Reveal>
                        <div className="col sm-col-7 angular col-border">
                            <div className="project-title">
                                <h2>Website in Angular</h2>
                                <RepoLink link='https://github.com/jbuoni/website_angular' repoType='github'/>
                                <div className="project-tool-container">
                                <i className="fab fa-2x fa-angular"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description">
                                    The website you are looking at right now, but using Typescript and Angular 8.
                                </div>
                                <div className="project-image-container">
                                    <img src={angular1} className="project-image" />
                                    <img src={angular2} className="project-image" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="col sm-col-7 farm col-border">
                            <div className="project-title">
                                <h2>Lachenbock Farm</h2>
                                <RepoLink link='https://bitbucket.org/JasonBuoni25/lachenbockfarm/src/master/' repoType='bitbucket'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-react fa-2x"></i>
                                    <i className="fab fa-js fa-2x js"></i>
                                    <i className="fab fa-python fa-2x python"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description">
                                    Side project of mine. I am in the progress of redoing my parents farm website. It requires a backend and a UI which will allow for someone not techy to update it easily.
                                </div>
                                <div className="project-image-container">
                                    <img src={lbf1} className="project-image-lbf" />
                                    <img src={lbf2} className="project-image-lbf" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
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
                    </Reveal>
                    <Reveal>
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
                    </Reveal>
                    <Reveal>
                        <div className="col sm-col-7 android-list col-border">
                            <div className="project-title">
                                <h2>Georgia Tech Scheduler</h2>
                                <RepoLink link='https://github.com/jbuoni/GeorgiaTechScheduler' repoType='github'/>
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
                    </Reveal>
                    <Reveal>
                        <div className="col sm-col-7 android-list col-bottom">
                            <div className="project-title">
                                <h2>Shopping List</h2>
                                <RepoLink link='https://github.com/jbuoni/Android-Grocery-List' repoType='github'/>
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
                    </Reveal>
                </div>
            </main>
        </>
    )
}

export default Projects
