import React, { Component } from 'react';
import resume from '../files/resume.pdf';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.onHackerRankClick = this.onHackerRankClick.bind(this);
        this.onBitbucketClick = this.onBitbucketClick.bind(this);
        this.onResumeClick = this.onResumeClick.bind(this);
    }

    onHackerRankClick(e) {
        window.location = 'https://www.hackerrank.com/JBuoni?hr_r=1';
    }

    onBitbucketClick(e) {
        window.location = 'https://bitbucket.org/JasonBuoni25/';
    }

    onResumeClick(e) {
        window.location = resume;
    }


    render() {
        return (
            <>
                <div className="nav-bar">
                    <div className="nav nav-brand">Jason Buoni</div>
                    <div className="nav-right">
                        <span className="nav nav-link">Algos</span>
                        <span className="nav nav-link" onClick={this.onHackerRankClick}>HackerRank</span>
                        <span className="nav nav-link" onClick={this.onResumeClick}>Resume</span>
                    </div>
                </div>
            </>
        );
    }
}
