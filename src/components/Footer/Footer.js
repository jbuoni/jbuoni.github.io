import React, { Component } from 'react';
// import { SocialIcon } from 'react-social-icons';
import EmailModal from './EmailModal';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.onEmailButtonClick = this.onEmailButtonClick.bind(this);
        this.onFacebookClick = this.onFacebookClick.bind(this);
        this.onLinkedInClick = this.onLinkedInClick.bind(this);
    }

    state = { showModal: false };

    onEmailButtonClick(e) {
        this.setState({ showModal: !this.state.showModal });
    }

    onFacebookClick(e) {
        const win = window.open('https://www.facebook.com/jason.buoni', '_blank');
        win.focus();
    }

    onLinkedInClick(e) {
        const win = window.open('https://www.linkedin.com/in/jason-buoni-33684451/', '_blank');
        win.focus();
    }

    render() {
        return (
            <>
                <div className="footer">
                    <span onClick={this.onEmailButtonClick}><i className="far fa-envelope-open fa-2x icon"></i></span>
                    <span onClick={this.onFacebookClick}><i className="fab fa-facebook fa-2x icon"></i></span>
                    <span onClick={this.onLinkedInClick}><i className="fab fa-linkedin-in fa-2x icon"></i></span>
                </div>
                <EmailModal show={this.state.showModal} onHide={this.onEmailButtonClick} />
            </>
        );
    }
}
