import './projects.less'
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

const ProjectsMobile = () => {
    return (
        <>
            <div className="top">
                <div className="header-container">
                    <TopHeader text="Projects" lineWidth="line"/>
                </div>
                <Reveal>
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
                </Reveal>
            </div>
            <main className="container p3">
                <div className="project-content-mobile">
                <Reveal>
                        <div className="col sm-col-7 angular col-border">
                            <div className="project-title">
                                <h5>Website in Angular</h5>
                                <RepoLink link='https://github.com/jbuoni/website_angular' repoType='github'/>
                                <div className="project-tool-container">
                                <i className="fab fa-2x fa-angular icon-mobile"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="project-description">
                                    The website you are looking at right now, but using Typescript and Angular 8.
                                </div>
                                <div className="project-image-container-mobile">
                                    <img src={angular1} className="project-image-lbf" />
                                    <img src={angular2} className="project-image-lbf image-height-mobile" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="col sm-col-7 farm col-border">
                            <div className="project-title">
                                <h5>Lachenbock Farm</h5>
                                <RepoLink link='https://bitbucket.org/JasonBuoni25/lachenbockfarm/src/master/' repoType='bitbucket'/>
                                <div className="project-tool-container">
                                    <i className="fab fa-react fa-2x icon-mobile"></i>
                                    <i className="fab fa-js fa-2x js icon-mobile"></i>
                                    <i className="fab fa-python fa-2x python icon-mobile"></i>
                                </div>
                            </div>
                            <div className="project-information">
                                <div className="pproject-description-mobile">
                                    Side project of mine. I am in the progress of redoing my parents farm website. It requires a backend and a UI which will allow for someone not techy to update it easily.
                                </div>
                                <div className="project-image-container-mobile">
                                    <img src={lbf1} className="project-image-lbf" />
                                    <img src={lbf2} className="project-image-lbf" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
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
                    </Reveal>
                    <Reveal>
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
                    </Reveal>
                    <Reveal>
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
                    </Reveal>
                    <Reveal>
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
                    </Reveal>
                </div>
            </main>
        </>
    )
}

export default ProjectsMobile
