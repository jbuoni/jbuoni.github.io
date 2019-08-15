import React, { Component } from 'react';
import { onBitbucketClick, onFacebookClick, onGithubClick, onLinkedInClick } from '../utils/navUtils';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.onEmailButtonClick = this.onEmailButtonClick.bind(this);
    }

    onEmailButtonClick(e) {
        const link = 'https://mail.google.com/mail/?view=cm&fs=1&to=buoni.jason@gmail.com';
        window.open(link, 'Mailer');
        return false;
    }

    render() {
        return (
            <>
                <div className="footer">
                    <span onClick={this.onEmailButtonClick}><i className="far fa-envelope-open fa-2x icon"></i></span>
                    <span onClick={onFacebookClick}><i className="fab fa-facebook fa-2x icon"></i></span>
                    <span onClick={onLinkedInClick}><i className="fab fa-linkedin-in fa-2x icon"></i></span>
                    <span onClick={onGithubClick}><i className="fab fa-github-alt fa-2x icon" aria-hidden="true"></i></span>
                    <span onClick={onBitbucketClick}><i className="fab fa-bitbucket fa-2x icon" aria-hidden="true"></i></span>
                </div>
            </>
        );
    }
}
