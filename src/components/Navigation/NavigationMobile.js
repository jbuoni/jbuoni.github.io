import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';

const url = window.location.href;

const init = () => {
    return { menuIsOpen: false, redirect: false, page: '' };
};

const reducer = (state, action) => {
    const { type, payload } = action;
    const { menuIsOpen } = state;

    switch (type) {
        case 'toggle':
            return { menuIsOpen: !menuIsOpen };
        case 'redirect':
            return { page: `/${payload}`, redirect: true, currentTab: payload };
        default:
            throw new Error(`Invalid action in MobileNav ${type}`);
    }
};

const NavigationMobile = () => {
    const [state, dispatch] = useReducer(reducer, null, init);

    const { page, redirect, menuIsOpen } = state;
    const mobileTab = url.split('/').pop();

    if (redirect) return <Redirect push to={page} />;

    return (
        <div className="nav-bar-mobile">
            <div className="navbar-link navbar-link-toggle" onClick={() => dispatch({ type: 'toggle' })}>
                <i className="fas fa-bars burger"></i>
            </div>
            {
                menuIsOpen &&
                <nav className="navbar-items">
                    <div className={`nav nav-link ${mobileTab === 'landing' && 'nav-selected' || ''}`} onClick={() => dispatch({ type: 'redirect', payload: 'landing' })}>Jason Buoni</div>
                    <div className={`nav nav-link ${mobileTab === 'about' && 'nav-selected' || ''}`} onClick={() => dispatch({ type: 'redirect', payload: 'about' })}>About</div>
                    <div className={`nav nav-link ${mobileTab === 'proj' && 'nav-selected' || ''}`} onClick={() => dispatch({ type: 'redirect', payload: 'proj' })}>Projects</div>
                </nav>
            }
        </div>
    );
};

export default NavigationMobile;