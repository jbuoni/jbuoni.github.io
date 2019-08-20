import React from 'react';
import { onBitbucketClick, onFacebookClick, onGithubClick, onLinkedInClick, onStackOverflowClick } from '../../utils/navUtils';

export default function Social() {
    return (
        <div className="about-panel">
            <h3 className="home-h3">Social</h3>
            <div className="links">
                <div className="item-hover" onClick={onLinkedInClick}>
                    <i className="fab fa-linkedin-in fa-2x icon"></i>
                    <span className="h5 header-font social-link">LinkedIn</span>
                </div>
                <div className="item-hover" onClick={onGithubClick}>
                    <i className="fab fa-github-alt fa-2x icon" aria-hidden="true"></i>
                    <span className="h5 header-font social-link">Github</span>
                </div>
                <div className="item-hover" onClick={onBitbucketClick}>
                    <i className="fab fa-bitbucket fa-2x icon" aria-hidden="true"></i>
                    <span className="h5 header-font social-link">Bitbucket</span>
                </div>
                <div className="item-hover" onClick={onStackOverflowClick}>
                    <i className="fab fa-stack-overflow fa-2x icon"></i>
                    <span className="h5 header-font social-link">Stack Overflow</span>
                </div>
                <div className="item-hover" onClick={onFacebookClick}>
                    <i className="fab fa-facebook fa-2x icon"></i><
                    span className="h5 header-font social-link">Facebook</span>
                </div>
            </div>
        </div>
    );
}
