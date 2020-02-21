import React from 'react';
import { Philosophy } from './menteeUtils';
import TopHeader from '../TopHeader';
import Fade from 'react-reveal/Fade';
import '../../styles/mentees.less';
// Peeps
import bo from '../../images/bo.jpeg';
import laura from '../../images/laura.jpeg';
import vinny from '../../images/vinny.jpeg';
import sandman from '../../images/sandman.jpeg';
import soha from '../../images/soha.jpeg';
import paul from '../../images/paul.jpeg';
// Companies
import mastercard from '../../images/mastercard.png';
import amazon from '../../images/amazon.png';
import warnermedia from '../../images/warnermedia.jpeg';
import slack from '../../images/slack.png';
import parkmobile from '../../images/parkmobile.png';
// Schools
import tech from '../../images/tech.png';
import state from '../../images/state.png';
import uga from '../../images/uga.png';


const navigateToSite = (site) => {
    const win = window.open(site, '_blank');
    win.focus();
};

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
                        <h4>{name}  <i className={`${fontAwesomeClass}`} onClick={() => navigateToSite(website)}></i></h4>
                        <div className="title"><h5><i>{title}</i></h5></div>
                        <div className="org-container">
                            <img className="pic" src={companyPic} onClick={() => navigateToSite(companyWebsite)} />
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
                                title="Systems/Software Developer"
                                website={'https://www.linkedin.com/in/sanford-leach/'} 
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
                                company="Slack"
                                companyPic={slack} 
                                companyWebsite="https://slack.com/"
                                school="Georgia Institute of Technology"
                                schoolPic={tech}
                            />
                        </div>
                        <div className="mentee-container">
                            <Profile 
                                name="Vinny Kapil"
                                pic={vinny} 
                                title="Systems/Software Developer"
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