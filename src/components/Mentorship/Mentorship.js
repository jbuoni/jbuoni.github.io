import '../../styles/mentorship.less';

import React from 'react';
import Fade from 'react-reveal/Fade';

import amazon from '../../images/amazon.png';
import apple from '../../images/apple.png';
import bo from '../../images/bo.jpeg';
import carnegie from '../../images/carnegie.png';
import laura from '../../images/laura.jpeg';
import mastercard from '../../images/mastercard.png';
import parkmobile from '../../images/parkmobile.png';
import paul from '../../images/paul.jpeg';
import sandman from '../../images/sandman.jpeg';
import soha from '../../images/soha.jpeg';
import state from '../../images/state.png';
import tech from '../../images/tech.png';
import uga from '../../images/uga.png';
import vinny from '../../images/vinny.jpeg';
import warnermedia from '../../images/warnermedia.jpeg';
import TopHeader from '../TopHeader';
import { navigateToSite, Philosophy } from './mentorshipUtils';

// Peeps
// Companies
// Schools
const Profile = (props) => {
    const {
        name,
        title,
        pic,
        companyPic,
        website,
        schoolPic,
        companyWebsite,
        isWebsite = false
    } = props;

    const fontAwesomeClass = isWebsite && 'fas fa-laptop laptop' || 'fab fa-linkedin';

    return (
        <div className="profile col sm-col-7">
            <img className="profile-pic" src={pic} />
            <div className="profile-content">
                <div className="overview">
                    <div className="info">
                        <h4>{name} &nbsp;
                            <i className={`${fontAwesomeClass} hover`} onClick={() => navigateToSite(website)} ></i>
                        </h4>
                        <div className="title"><h5><i>{title}</i></h5></div>
                        <div className="org-container">
                            <img className="pic hover" src={companyPic} onClick={() => navigateToSite(companyWebsite)} />
                            <img className="pic school-pic" src={schoolPic} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Mentees = () => {
    return (
        <>
            <div className="top">
                <div className="header-container">
                    <TopHeader text="Mentorship" lineWidth="mentorship-line"/>
                </div>
            </div>
            <main className="container p3 ">
                <div className="mentee-content">
                    <Philosophy />
                    <Fade bottom>
                        <div className="mentee-container">
                            <Profile
                                name="Sanford Leach"
                                pic={sandman}
                                title="Senior Software Developer"
                                website={'https://sanfordleach.com/'}
                                isWebsite={true}
                                company="Warner Media"
                                companyPic={warnermedia}
                                companyWebsite="https://www.warnermediagroup.com/"
                                school="University of Georgia"
                                schoolPic={uga}
                            />
                            <Profile
                                name="Soha Jiwani"
                                pic={soha}
                                title="Software Developer"
                                website={'https://www.linkedin.com/in/soha-jiwani/'}
                                company="Apple"
                                companyPic={apple}
                                companyWebsite="https://www.apple.com/"
                                school="Carnegie Mellon University"
                                schoolPic={carnegie}
                            />
                        </div>
                        <div className="mentee-container">
                            <Profile
                                name="Vinny Kapil"
                                pic={vinny}
                                title="Product Owner"
                                website={'https://vinnykapil.github.io'}
                                company="Warner Media"
                                isWebsite={true}
                                companyPic={warnermedia}
                                companyWebsite="https://www.warnermediagroup.com/"
                                school="Georgia Institute of Technology"
                                schoolPic={tech}
                            />
                            <Profile
                                name="Bojun Yang"
                                pic={bo}
                                title="Software Engineer"
                                website={'https://www.linkedin.com/in/bojun-yang-a181a5129/'}
                                company="Amazon"
                                companyPic={amazon}
                                companyWebsite="https://www.amazon.com/"
                                school="Georgia Institute of Technology"
                                schoolPic={tech}
                            />
                        </div>
                        <div className="mentee-container">
                            <Profile
                                name="Paul Dorsch"
                                pic={paul}
                                title="Software Developer"
                                isWebsite={true}
                                website={'https://pauldorsch.com/'}
                                company="Mastercard"
                                companyPic={mastercard}
                                companyWebsite="https://www.mastercard.us/en-us.html"
                                school="Georgia Institute of Technology"
                                schoolPic={tech}
                            />
                            <Profile
                                name="Laura Roesler"
                                pic={laura}
                                title="Software Engineer"
                                isWebsite={true}
                                website={'https://lroseler.github.io/'}
                                company="Park Mobile"
                                companyPic={parkmobile}
                                companyWebsite="https://parkmobile.io/"
                                school="Georgia State University"
                                schoolPic={state}
                            />
                        </div>
                    </Fade>
                </div>
            </main>
        </>
    );
};

export default Mentees;