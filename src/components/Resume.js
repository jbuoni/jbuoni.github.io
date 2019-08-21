import React from 'react';
import '../styles/resume.less';

function ContentWithFontAwesome({ text, faClass }) {
    return (
      <>
          <i className={`${faClass} fa-1x resume-icon`}></i>{text}
      </>
    );
}

function ResumeHeader({ title }) {
    return (
        <>
            <h3 className="resume-header">{title}</h3>
            <div className="resume-line"></div>
        </>
    );
}

function ResumeRow({ line1, line2, date, info}) {
    info = info && info.split('<b>');
    return (
        <div className="resume-item">
            <h8 className="resume-date">{date}</h8>
            <h5 className="resume-line1">{line1}</h5>
            <h6 className="resume-line2"><i>{line2}</i></h6>
            {info &&
            <div className="resume-info">

                <ul>
                    {info.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </div>
            }
        </div>
    );
}

export default function Resume() {
    return (
        <div className="resume">
            <div className="resume-top">
                <div className="resume-name">Jason Buoni</div>
                <div className="resume-title">Software Engineer</div>
            </div>
            <div className="resume-content">
                <div className="resume-content-right">
                    <div className="personal">
                        <h3 className="resume-header">Personal</h3>
                        <div className="resume-content-item"><ContentWithFontAwesome faClass="fas fa-laptop laptop" text="buoni.github.io"/></div>
                        <div className="resume-content-item"><ContentWithFontAwesome faClass="fas fa-mobile-alt phone" text="678-596-2815"/></div>
                        <div className="resume-content-item"><ContentWithFontAwesome faClass="fas fa-envelope-open-text" text="buoni.jason@gmail.com"/></div>
                        <div className="resume-content-item"><ContentWithFontAwesome faClass="fab fa-linkedin" text="linkedin.com/in/jason-buoni-33684451"/></div>
                        <div className="resume-content-item"><ContentWithFontAwesome faClass="fab fa-github-alt" text="https://github.com/jbuoni"/></div>
                        <div className="resume-content-item"><ContentWithFontAwesome faClass="fab fa-bitbucket" text="https://bitbucket.org/JasonBuoni25"/></div>
                    </div>
                    <div className="skills">

                    </div>
                </div>
                <div className="resume-mid">
                    <div className="resume-section">
                        <ResumeHeader title="Experience" />
                        <ResumeRow line1="Turner Broadcasting Inc., Atlanta GA" line2="Senior Software Developer" date="May 2015 - Present"
                                   info={` Developed backend and frontend services used to transfer video files and metadata to CNN and Turner internal systems around the world.
                                <b> Worked with mulitple languages and frameworks throughout the day such as NodeJS, React, Scala, Java, Python, and MongoDB
                                <b> Assisted in DevOps related tasks using Chef, AWS, and Jenkins.
                                <b> Created a new tracking system as a side project using Scala and Akka. Project was deployed internally and replaced multiple legacy systems.
                                <b> Spearheaded mentorship program for my department, which was incorporated to all intern positions for the GTO Tech Intern program.
                            `}
                        />
                        <ResumeRow line1="Rochester Institute of Technology" line2="Bachelors of Science, Software Engineering, Economics Minor"/>
                    </div>
                    <div className="resume-section">
                        <ResumeHeader title="Education" />
                        <ResumeRow line1="Georgia Institute of Technology" line2="Masters of Science, Computer Science" date="August 2018"
                        info={` Graduated with a 3.8 GPA.
                                <b> Specialized in Computing Systems with a focus on cyber security.
                                <b> Took classes related to security, machine learning, computational photography, and HCI.
                                <b> Primary languages used were Python and Java.
                            `}
                        />
                        <ResumeRow line1="Rochester Institute of Technology" line2="Bachelors of Science, Software Engineering, Economics Minor" date="May 2013"/>
                    </div>
                </div>
                <div className="resume-bottom">
                </div>
            </div>
        </div>
    );
}


