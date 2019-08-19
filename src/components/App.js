import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import About from './About';
import Algo from './Algo';
import Projects from './Projects';
import Landing from './Landing';
import NavigationBar from './Navigation';
import Footer from './Footer';

function HomeWrapped() {
    document.body.style.overflow = 'auto';
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

function ProjectsWrapped() {
    document.body.style.overflow = 'auto';
    return (
        <>
            <div className="site-header">
                <NavigationBar />
            </div>
            <Projects/>
            <Footer />
        </>
    );
}

function LandingWrapped() {
    document.body.style.overflow = 'hidden';
    return <Landing/>
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
                    <Route path="/landing" component={() => <LandingWrapped />} />
                    <Route render={() => <Redirect to="/landing" />} />
                </Switch>
            </div>
        </HashRouter>
    );
}
