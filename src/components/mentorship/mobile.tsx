import TopHeader from '../topHeader'
import { navigateToSite, Philosophy, ProfileProps } from './shared'
import Reveal from 'react-awesome-reveal'

import amazon from '../../assets/amazon.png'
import apple from '../../assets/apple.png'
import bo from '../../assets/bo.jpeg'
import carnegie from '../../assets/carnegie.png'
import laura from '../../assets/laura.jpeg'
import mastercard from '../../assets/mastercard.png'
import parkmobile from '../../assets/parkmobile.png'
import paul from '../../assets/paul.jpeg'
import sandman from '../../assets/sandman.jpeg'
import soha from '../../assets/soha.jpeg'
import state from '../../assets/state.png'
import tech from '../../assets/tech.png'
import uga from '../../assets/uga.png'
import vinny from '../../assets/vinny.jpeg'
import warnermedia from '../../assets/warnermedia.jpeg'

import './mentorship.less'

const Profile = ({
    name,
    title,
    pic,
    companyPic,
    website,
    schoolPic,
    companyWebsite,
    isWebsite = false
}: ProfileProps) => {

    const fontAwesomeClass = isWebsite && 'fas fa-laptop laptop' || 'fab fa-linkedin'

    return (
        <div className="profile-mobile col sm-col-7">
            <img className="profile-pic" src={pic} />
            <div className="profile-content">
                <div className="overview">
                    <div className="info">
                        <h4>{name} &nbsp
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
    )
}

const MentorshipMobile = () => {
    return (
        <>
            <div className="top">
                <div className="header-container">
                    <TopHeader text="Mentorship" lineWidth="mentorship-line"/>
                </div>
            </div>
            <main className="container p3 ">
                <div className="mentee-content">
                    <Reveal>
                        <Philosophy/>
                    </Reveal>
                    <Reveal>
                        <Profile
                            name="Sanford Leach"
                            pic={sandman}
                            title="Systems/Software Developer"
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
                    </Reveal>
                </div>
            </main>
        </>
    )
}

export default MentorshipMobile