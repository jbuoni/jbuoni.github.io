// Libs
import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import { isIE, isMobile } from 'react-device-detect';
// Regular
import { About, AboutMobile } from './About';
import { Mentees, MenteesMobile } from './Mentees';
import Algo from './Algo';
import { Projects, ProjectsMobile } from './Projects';
import Landing from './Landing';
import Resume from './Resume';
import { NavigationBar, NavigationMobile } from './Navigation';
import Footer from './Footer';

function HomeWrapped() {
    document.body.style.overflow = 'auto';

    if(isMobile) {
        return (
            <>
                <NavigationMobile />
                <AboutMobile />
                <>
                    <div className="footer">
                    </div>
                </>
            </>
        );
    }
    return (
        <>
            <div className="site-header">
                <NavigationBar />
            </div>
            <About/>
            <Footer />
        </>
    );
}

function AlgoWrapped() {
    document.body.style.overflow = 'auto';
    return (
        <>
            <div className="site-header">
                <NavigationBar />
            </div>
            <Algo/>
            <Footer />
        </>
    );
}

function MenteesWrapped() {
    document.body.style.overflow = 'auto';
    if(isMobile) {
        document.body.style.overflowX = 'hidden';
        return (
            <>
                <NavigationMobile />
                <MenteesMobile />
                <>
                    <div className="footer">
                    </div>
                </>
            </>
        );
    }

    return (
        <>
            <div className="site-header">
                <NavigationBar />
            </div>
            <Mentees />
            <Footer />
        </>
    );
}

function ProjectsWrapped() {
    document.body.style.overflow = 'auto';

    if(isMobile) {
        document.body.style.overflowX = 'hidden';
        return (
            <>
                <NavigationMobile />
                <ProjectsMobile />
                <>
                    <div className="footer">
                    </div>
                </>
            </>
        );
    }

    return (
        <>
            <div className="site-header">
                <NavigationBar />
            </div>
            <Projects />
            <Footer />
        </>
    );
}

function LandingWrapped() {
    document.body.style.overflow = 'hidden';
    return <Landing />
}

export default function App() {
    return (
        <HashRouter>
            <div className='site-content'>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/landing" />} />
                    <Route path="/about" component={() => <HomeWrapped />}/>
                    <Route path="/algo" component={() => <AlgoWrapped />}/>
                    <Route path="/proj" component={() => <ProjectsWrapped />}/>
                    <Route path="/mentees" component={() => <MenteesWrapped />}/>
                    <Route path="/landing" component={() => <LandingWrapped />} />
                    <Route path="/resume" component={() => <Resume />} />
                    <Route render={() => <Redirect to="/landing" />} />
                </Switch>
            </div>
        </HashRouter>
    );
}
