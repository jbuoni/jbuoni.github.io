import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    state = {
        menuIsOpen: false,
        currentTab: '',
        redirect: false,
        page: ''
    };

    componentDidMount() {
        const url = window.location.href;
        const currentTab = url.split('/').pop();
        this.setState({ currentTab });
    }


    toggleMenu() {
        this.setState({ menuIsOpen: !this.state.menuIsOpen })
    }

    redirect(page) {
        this.setState( { redirect: true, page })
    }

    render () {
        const { currentTab, redirect, page } = this.state;

        if(redirect) {
            return <Redirect push to={page} />;
        }

        return (
            <div className="nav-bar-mobile">
                <div className="navbar-link navbar-link-toggle" onClick={this.toggleMenu}>
                    <i className="fas fa-bars burger"></i>
                </div>
                {
                    this.state.menuIsOpen &&
                    <nav className="navbar-items">
                        <div className={`nav nav-link ${currentTab === 'landing' && 'nav-selected' || ''}`} onClick={() => this.redirect('/landing')}>Jason Buoni</div>
                        <div className={`nav nav-link ${currentTab === 'about' && 'nav-selected' || ''}`}onClick={() => this.redirect('/about')}>About</div>
                        <div className={`nav nav-link ${currentTab === 'proj' && 'nav-selected' || ''}`}onClick={() => this.redirect('/proj')}>Projects</div>
                    </nav>
                }
            </div>
        );
    }
}
