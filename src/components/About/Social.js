import React from 'react';
import {
    onBitbucketClick,
    onFacebookClick,
    onGithubClick,
    onLinkedInClick,
    onStackOverflowClick,
    onInstagramClick
} from '../../utils/outsideSiteUtils';

const Social = ({ mobile=false }) => {
    return (
        <div className="about-panel">
            <h3 className="home-h3">Social</h3>
            <div className="links">
                <div className="item-hover" onClick={onLinkedInClick}>
                    <i className={`fab fa-linkedin-in ${mobile && 'fa-2x' || 'fa-3x icon-about'} icon`} aria-hidden="true"></i>
                </div>
                <div className="item-hover" onClick={onGithubClick}>
                    <i className={`fab fa-github-alt ${mobile && 'fa-2x' || 'fa-3x icon-about'} icon`} aria-hidden="true"></i>
                </div>
                <div className="item-hover" onClick={onBitbucketClick}>
                    <i className={`fab fa-bitbucket ${mobile && 'fa-2x' || 'fa-3x icon-about'} icon`} aria-hidden="true"></i>
                </div>
                <div className="item-hover" onClick={onStackOverflowClick}>
                    <i className={`fab fa-stack-overflow ${mobile && 'fa-2x' || 'fa-3x icon-about'} icon`} aria-hidden="true"></i>
                </div>
                <div className="item-hover" onClick={onFacebookClick}>
                    <i className={`fab fa-facebook ${mobile && 'fa-2x' || 'fa-3x icon-about'} icon`} aria-hidden="true"></i>
                </div>
                { !mobile &&
                    <div className="item-hover" onClick={onInstagramClick}>
                        <i className={`fab fa-instagram ${mobile && 'fa-2x' || 'fa-3x icon-about'} icon`} aria-hidden="true"></i>
                    </div>
                }
            </div>
        </div>
    );
};

export default Social;
