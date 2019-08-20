import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.closeMenu = this.closeMenu.bind(this);
    }

    state = {
        menuIsOpen: false
    };

    closeMenu() {
        this.setState({ menuIsOpen: !this.state.menuIsOpen })
    }

    render () {
        return (
            <div className="Navbar">
                <div className="navbar-link navbar-link-brand">
                    <Link to="/#landing">Jason Buoni</Link>
                </div>
                <div className="navbar-link navbar-link-toggle">
                    <i className="fas fa-bars"></i>
                </div>
                <nav className="navbar-items">
                    <div className="navbar-link">
                        <Link to="/#about">About</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/#algo">Algorithms</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/#proj">Projects</Link>
                    </div>
                </nav>
            </div>
        );
    }
}
