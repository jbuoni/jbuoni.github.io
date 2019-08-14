import React, { Component } from 'react';
import { Navbar, Nav }  from 'react-bootstrap';
import resume from '../files/resume.pdf';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.onHackerRankClick = this.onHackerRankClick.bind(this);
        this.onBitbucketClick = this.onBitbucketClick.bind(this);
        this.onResumeClick = this.onResumeClick.bind(this);
    }

    onHackerRankClick(e) {
        const win = window.open('https://www.hackerrank.com/JBuoni?hr_r=1', '_blank');
        win.focus();
    }

    onBitbucketClick(e) {
        const win = window.open('https://bitbucket.org/JasonBuoni25/', '_blank');
        win.focus();
    }

    onResumeClick(e) {
        var link = document.createElement('a');
        link.href = resume;
        link.download = 'JasonBuoniResume';
        link.click();
    }


    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#me">Me</Nav.Link>
                            <Nav.Link href="#algos">Algos</Nav.Link>
                            <Nav.Link href="#home" onClick={this.onHackerRankClick}>HackerRank</Nav.Link>
                            <Nav.Link href="#home" onClick={this.onBitbucketClick}>Bitbucket</Nav.Link>
                            <Nav.Link href="#home" onClick={this.onResumeClick}>Download My Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}
