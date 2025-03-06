import { useEffect, useState } from 'react';
import { Link } from 'react-router'

import { Fade } from 'react-awesome-reveal'

import './landing.less';
import './animate.less';

const Landing = () => {
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)

    const updateWindowDimensions = () => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    useEffect(()=> {
        window.addEventListener('resize', updateWindowDimensions)
        console.log(height, width)
        return function cleanup() {
            window.removeEventListener('resize', updateWindowDimensions)
        }
    }, [height, width])


    return (
        <>
            <div className="landing-image" style={{ height, width }}></div>
            <Fade>
                <div className="landing-container">
                    <h2 className="top-h2">Jason Buoni</h2>
                    <span >Software Developer.<br/>Pet Enthusiast.<br/>Mentor.<br/></span>
                    <div className="col-md-3 col-sm-3 col-xs-6 landing-link-container">
                        <Link to="/about" className="btn btn-sm animated-button victoria-one">View More</Link>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Landing