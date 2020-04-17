import React from 'react';
import Fade from 'react-reveal/Fade';
import '../../styles/mobile.less';
import Experience from './Experience';
import TopHeader from '../TopHeader';
import Social from './Social'
import { WhoAmI, Photo } from './aboutUtils';

const AboutMobile = () => {
    return (
        <div className="about-content-mobile">
            <TopHeader text="About"/>
            <div className="about-bottom">
                <div className="col sm-col-9">
                    <Fade left >
                        <Photo/>
                    </Fade>
                    <Fade bottom>
                        <WhoAmI />
                    </Fade>
                </div>
                <div className="col">
                    <Fade right>
                        < Experience />
                    </Fade>
                    <Fade bottom>
                        < Social mobile={true} />
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default AboutMobile;
