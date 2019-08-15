import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import Home from './Home';
import NavigationBar from './Navigation';
import Footer from './Footer';

export default function App() {
    return (
        <HashRouter>
            <div className="site-header">
                <NavigationBar />
            </div>
            <div className='site-content'>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="/home" component={Home} />
                    <Route render={() => <Redirect to="/home" />} />
                </Switch>
            </div>
            <Footer />
        </HashRouter>
    );
}
