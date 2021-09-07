import '../styles/resume.less';

import React from 'react';

import resume from '../files/resume.pdf';
import foundations from '../images/foundations.png';
import georgiastate from '../images/georgiastate.png';
import houstons from '../images/houstons.jpeg';
import kennesaw from '../images/kennesaw.png';
import pimpact from '../images/pimpact.png';
import wellspring from '../images/wellspring.png';

// Company images
// College Images

const ContentWithFontAwesome = ({ text, faClass }) => {
    return (
      <>
          <i className={`${faClass} fa-1x resume-icon`}></i>{text}
      </>
    );
}

const ResumeHeader = ({ title }) => {
    return (
        <>
            <h3 className="resume-header">{title}</h3>
            <div className="resume-line"></div>
        </>
    );
}

const ResumeRow = ({ image, line1, line2, date, info}) => {
    info = info && info.split('<b>');
    return (
        <div className="resume-item-container">
            <img className="resume-image" src={image} />
            <div className="resume-item">
                <div className="resume-date">{date}</div>
                <div className="resume-line1">{line1}</div>
                <div className="resume-line2"><i>{line2}</i></div>
                {info &&
                <div className="resume-info">
                    <ul>
                        {info.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                </div>
                }
            </div>
        </div>
    );
}

const viewPdf = () => window.open(resume, '_blank');


const SkillsContainer = ({ skill, stars }) => {
    return (
        <div className="skill-container">
            <div className="skill-span">{skill}:</div>
            { stars.map((star, idx) => <i key={idx} className="fas fa-star star"></i>)}
        </div>
    );
}

const CertificationsContainer = ({ certType, certDate, certFrom}) => {
    return (
        <div className="cert-div">
            <span className="cert-date">{certDate}</span>
            < br/>
            <span className="cert-type"><b>{certType}</b></span>
            < br/>
            <span className="cert-from"><i>{certFrom}</i></span>
        </div>
    )
}

const Resume = () => {
    return (
        <>
            <div className="resume">
                <div className="resume-top">
                    <div className="resume-top-left">
                        <div className="resume-name">Jennifer Wellborn</div>
                        <div className="resume-title">Master of Social Work</div>
                    </div>
                </div>
                <div className="resume-content">
                    <div className="resume-content-right">
                        <div className="about">
                            <h3 className="resume-header">Who am I?</h3>
                            <div className="about-text">
                            I am a clinical LMSW. I have utilized SFBT and CBT techniques in my experience working with minors, the HIV population, and addictions.
                            I would like to become a Licensed Clinical Social Worker.
                            </div>
                        </div>
                        <div className="personal">
                            <h3 className="resume-header">Personal</h3>
                            <div className="resume-content-item"><ContentWithFontAwesome faClass="fas fa-mobile-alt phone" text="708-846-7561"/></div>
                            <div className="resume-content-item"><ContentWithFontAwesome faClass="fas fa-envelope-open-text" text="jennifer.corkle@gmail.com"/></div>
                            <div className="resume-content-item"><ContentWithFontAwesome faClass="fab fa-linkedin" text="linkedin.com/in/jennifer-corkle-3b77951a8"/></div>
                        </div>

                        <div>
                            <ResumeHeader title="Education" />
                            <ResumeRow
                                line1="Kennesaw State University"
                                line2="Master of Social Work, 3.85 GPA"
                                date="August 2018"
                                image={kennesaw}
                            />
                            <ResumeRow
                                line1="Georgia State University"
                                line2="Bachelor of Science, Psychology"
                                date="May 2013"
                                image={georgiastate}
                            />
                        </div>

                        <div className="skills">
                            <h3 className="resume-header">Skills</h3>
                            <SkillsContainer skill="Empathy" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Teamwork" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Communication" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Critical Thinking" stars={[1,2,3]}/>
                            <SkillsContainer skill="Active Listening" stars={[1,2,3]}/>
                            <SkillsContainer skill="Crisis Intervention" stars={[1,2,3]}/>
                            <SkillsContainer skill="Organization" stars={[1,2,3]}/>
                            <SkillsContainer skill="Active Learning" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Problem Solving" stars={[1,2,3]}/>
                            <SkillsContainer skill="Service Orientation" stars={[1,2,3,4]}/>
                        </div>
                        <div className="skills">
                            <h3 className="resume-header">Technical Proficiency</h3>
                            <SkillsContainer skill="Microsoft Word" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Microsoft Excel" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Adobe" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Cerner" stars={[1,2,3]}/>
                            <SkillsContainer skill="Client Track" stars={[1,2,3]}/>
                        </div>
                    </div>
                    <div className="resume-mid">
                        <div className="resume-section">
                            <ResumeHeader title="Experience" />
                            <ResumeRow
                                line1="Positive Impact Health Centers, Atlanta GA" line2="Housing Case Manager" date="August 2020 - Present"
                                info={` Provide clinical support by using evidence based practice, included to, but not limited to: person-centered perspectives, using a strengths-based approach, crisis interventions, harm reduction strategies, and motivational interviewing.
                                <b> Assess client’s individual needs and barriers to care, then create and execute treatment goals.
                                <b> Maintained meaningful contact with clients to monitor goals and resolve barriers to care.
                                <b> Document all client encounters appropriately and in a timely manner in electronic medical record systems.
                                <b> Collaborate with the multidisciplinary team regularly and attend meetings and trainings to enhance service delivery.
                                <b> Make referrals to supportive services in the community.
                                <b> Participate in creating and maintaining workplace that values diversity and increases collaborative teamwork, and is free of discrimination practices to best achieve agency’s mission..
                                `}
                                image={pimpact}
                            />
                            <ResumeRow
                                line1="Positive Impact Health Centers, Atlanta GA" line2="Medical Case Manager Intern" date="August 2019 - March 2020"
                                info={`Provided comprehensive HIV care to patients who are uninsured.
                                <b> Assessed and resolved patient’s barriers to care by providing education, resources, and referrals.
                                <b> Offered patients support of emotional services and resources.
                                <b> Completed biopsychosocial assessment with patients.
                                <b> Created Individualized Service Plan for caseload and followed up with each patient regarding goals and treatment adherence.
                                <b> Aided in crisis intervention for patients who were diagnosed with HIV within the first seventy-two hours of diagnosis.
                                <b> Provided treatment adherence counseling to ensure patients maintain a healthy lifestyle.
                                <b> Collaborated with interdisciplinary team daily to advocate and provide the best care for patients.
                                `}
                                image={pimpact}
                            />
                            <ResumeRow
                                line1="Wellspring Living, Atlanta GA" line2="Case Management Intern" date="August 2018 - May 2019"
                                info={` Attended group therapy sessions.
                                <b> Completed assessments with participants.
                                <b> Attended cultural competency training.
                                <b> Participated in weekly clinical team review meetings.
                                <b> Managed and streamlined PSSF Grant.
                                <b> Scheduled psychological and medical appointments for participants and maintained electronic medical records.
                                `}
                                image={wellspring}
                            />
                            <ResumeRow
                                line1="Talbott Recovery Center, Atlanta GA" line2="Resident Assistant" date="July 2017 – December 2017"
                                info={` Supervised a maximum of fourteen patients at one time.
                                <b> Helped patients integrate everyday life activities into their schedule.
                                <b> Managed financial aspect of all patient activities.
                                <b> Administered medication to patients.
                                <b> Provided direction and encouragement for patients.
                                <b> Overnight supervisor which included checking on patients hourly to ensure safety of patients.
                                <b> Provided detailed reports of activities and mental and emotional status of patients to managers and coworkers.
                                `}
                                image={foundations}
                            />
                            <ResumeRow
                                line1="Houston’s Restaurant, Hillstone Restaurant Group, Atlanta GA" line2="Server" date="June 2011 – October 2019"
                                info={``}
                                image={houstons}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;


