import React from 'react';
import '../styles/resume.less';
import resume from '../files/resume.pdf';

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
            <h7 className="resume-date">{date}</h7>
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

function viewPdf() {
    window.open(resume, '_blank');
}


function SkillsContainer({ skill, stars }) {
    return (
        <div className="skill-container">
            <div className="skill-span">{skill}:</div>
            { stars.map((star) => <i className="fas fa-star star"></i>)}
        </div>
    );
}

export default function Resume() {
    return (
        <>
            <div className="resume-overlay"></div>
            <div className="resume">
                <div className="resume-top">
                    <div class="resume-top-left">
                        <div className="resume-name">Jason Buoni</div>
                        <div className="resume-title">Software Engineer</div>
                    </div>
                    <button className="resume-download-button" onClick={viewPdf}>View PDF</button>
                </div>
                <div className="resume-content">
                    <div className="resume-content-right">
                        <div className="about">
                            <h3 className="resume-header">Who am I?</h3>
                            <div className="about-text">
                                I am a polyglot developer with a Masters in Computer Science. I focus on full-stack development and enjoy learning about cyber security principles and machine learning.
                            </div>
                        </div>
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
                            <h3 className="resume-header">Languages and Tools</h3>
                            <SkillsContainer skill="JavaScript" stars={[1,2,3,4,5]}/>
                            <SkillsContainer skill="Python" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="NodeJS" stars={[1,2,3,5]}/>
                            <SkillsContainer skill="Java" stars={[1,2,3]}/>
                            <SkillsContainer skill="C#" stars={[1,2,3]}/>
                            <SkillsContainer skill="Scala" stars={[1,2,3]}/>
                            <SkillsContainer skill="React" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="SQL" stars={[1,2,3]}/>
                            <SkillsContainer skill="PostgreSQL" stars={[1,2,3]}/>
                            <SkillsContainer skill="MongoDB" stars={[1,2]}/>
                            <SkillsContainer skill="Ruby" stars={[1,2]}/>
                            <SkillsContainer skill="AWS" stars={[1]}/>
                            <SkillsContainer skill="Backbone" stars={[1]}/>
                            <SkillsContainer skill="Angular" stars={[1]}/>
                            <SkillsContainer skill="C++" stars={[1]}/>
                            <SkillsContainer skill="jQuery" stars={[1,2,3,4]}/>
                        </div>
                        <div className="skills">
                            <h3 className="resume-header">Soft Skills</h3>
                            <SkillsContainer skill="Mentorship" stars={[1,2,3,4,5]}/>
                            <SkillsContainer skill="Leadership" stars={[1,2,3]}/>
                            <SkillsContainer skill="Collaboration" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Communication" stars={[1,2,3]}/>
                        </div>
                        <div className="certifications" >
                            <h3 className="resume-header">Certifications</h3>
                            <div className="cert-div"><b>Scrum Certification, 2016</b> Scrum Alliance</div>
                        </div>
                    </div>
                    <div className="resume-mid">
                        <div className="resume-section">
                            <ResumeHeader title="Experience" />
                            <ResumeRow line1="Turner Broadcasting Inc., Atlanta GA" line2="Senior Software Developer" date="May 2015 - Present"
                                       info={` Developed backend and frontend services used to transfer video files and metadata to CNN and Turner internal systems around the world.
                                    <b> Worked as a member of a scrum team for multiple high visibility projects including the Elections System and Content Supply Chain.
                                    <b> Worked with mulitple languages and frameworks throughout the day such as NodeJS, React, Scala, Java, Python, and MongoDB.
                                    <b> Assisted in DevOps related tasks using Chef, AWS, and Jenkins.
                                    <b> Created a new tracking system as a side project using Scala and Akka. Project was deployed internally and replaced multiple legacy systems.
                                    <b> Spearheaded mentorship program for my department, which was incorporated to all intern positions for the GTO Tech Intern program.
                                `}
                            />
                            <ResumeRow line1="Westat, Atlanta GA​" line2="Programmer Analyst" date="June 2013 - May 2015"
                                       info={`Developed backend and front end services used to monitor and analyze large amounts of data.
                                    <b> Worked with multiple languages and databases including C#, Java, Android, JavaScript, JQuery, SQL, PostgreSQL, MySQL, and SQLite.
                                    <b> Created data visualization user interfaces using tools such as Google Charts and Google Maps.
                                `}
                            />
                            <ResumeRow line1="Mary Cariola Children’s Center, Rochester New York" line2="Website Developer" date="December 2012 – May 2013" />
                            <br/>
                            <ResumeRow line1="Verivo Software, Waltham Massachusetts" line2="Product Manager" date="February 2011 – September 2011" />
                            <br/>
                            <ResumeRow line1="Brand Networks Inc., Rochester NY​" line2="Software Developer" date="March 2012 – November 2012" />
                        </div>
                        <div className="resume-section">
                            <ResumeHeader title="Education" />
                            <ResumeRow line1="Georgia Institute of Technology" line2="Masters of Science, Computer Science" date="August 2018"
                                       info={` Graduated with a 3.8 GPA.
                                    <b> Specialized in Computing Systems with a focus on cybersecurity.
                                    <b> Took classes related to security, machine learning, computational photography, and HCI.
                                    <b> Primary languages used were Python and Java.
                                `}
                            />
                            <ResumeRow line1="Rochester Institute of Technology" line2="Bachelors of Science, Software Engineering, Economics Minor" date="May 2013"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


