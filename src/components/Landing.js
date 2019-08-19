import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom'
import '../styles/landing.less';
import '../styles/animate.less';


export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggleButtonHover = this.toggleButtonHover.bind(this);
    }

    state = {
        height: 0,
        width: 0,
        hover: false,
        firstHover: true
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

    toggleButtonHover(){
        this.setState({
            hover: !this.state.hover,
            firstHover: true
        })
    }

    render() {
        const { hover, firstHover } = this.state;

        const transform = hover && 'rotateZ(90deg) !important' || !hover && !firstHover && 'rotateZ(-90deg) !important' || null;

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
                            <Link to="/about" className="btn btn-sm animated-button victoria-one">
                                View More <i className="fa fa-arrow-right landing-arrow"
                                             style={{transform: transform}}></i>
                            </Link>
                        </div>
                        <span className="hack">hack</span>
                    </div>
                </Typist>
            </>
        )
    }
}
