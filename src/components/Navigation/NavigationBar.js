import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * This is absolutley painful using useState due to the challagnes forcing a rerender. Just use
 * the old way
 */
export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.onHackerRankClick = this.onHackerRankClick.bind(this);
        this.onSelectedChanged = this.onSelectedChanged.bind(this);
    }

    state = { currentTab: '' };

    componentDidMount() {
        const url = window.location.href;
        const currentTab = url.split('/').pop();
        this.setState({ currentTab });
    }

    onHackerRankClick = (e) => this.setState({ currentTab: 'hack' }, () => window.location = 'https://www.hackerrank.com/JBuoni?hr_r=1' );

    onSelectedChanged = (currentTab) => this.setState({ currentTab });

    render() {
        const { currentTab } = this.state;

        return (
            <>
                <div className="nav-bar">
                    <div className="nav nav-brand" >
                        <Link onClick={() => this.onSelectedChanged('home')} to="/Landing" >Jason Buoni</Link>
                    </div>
                    <div className="nav-right">
                        <span className={`nav nav-link ${currentTab === 'about' && 'nav-selected' || ''}`}>
                            <Link onClick={() => this.onSelectedChanged('algo')} to="/about" >About</Link>
                        </span>
                        <span className={`nav nav-link ${currentTab === 'algo' && 'nav-selected' || ''}`}>
                            <Link onClick={() => this.onSelectedChanged('algo')} to="/algo" >Algorithms</Link>
                        </span>
                        <span className={`nav nav-link ${currentTab === 'proj' && 'nav-selected' || ''}`}>
                            <Link onClick={() => this.onSelectedChanged('proj')} to="/proj" >Projects</Link>
                        </span>
                        <span className={`nav nav-link ${currentTab === 'hack' && 'nav-selected' || ''}`} onClick={this.onHackerRankClick}>HackerRank</span>
                        <span className={`nav nav-link ${currentTab === 'resume' && 'nav-selected' || ''}`}>
                            <Link onClick={() => this.onSelectedChanged('proj')} to="/resume" >Resume</Link>
                        </span>
                    </div>
                </div>
            </>
        );
    }
}
