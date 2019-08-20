import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom'
import '../styles/landing.less';
import '../styles/animate.less';


export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    state = {
        height: 0,
        width: 0
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <>
                <div className="landing-image" style={{ height: this.state.height, width: this.state.width }}></div>
                <Typist>
                    <div className="landing-container">

                        <h2 className="top-h2">Jason Buoni</h2>
                        <Typist.Delay ms={500} />
                        <span >Software developer <br/> Avid mentor <br/> Pet enthusiast <br/></span>
                        <div className="col-md-3 col-sm-3 col-xs-6 landing-link-container"
                             onMouseEnter={this.toggleButtonHover} onMouseLeave={this.toggleButtonHover}>
                            <Link to="/about" className="btn btn-sm animated-button victoria-one">View More</Link>
                        </div>
                    </div>
                </Typist>
            </>
        )
    }
}
