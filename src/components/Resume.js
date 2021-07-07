import '../styles/resume.less';

import React from 'react';

import resume from '../files/resume.pdf';
import bn from '../images/bn.png';
import callrail from '../images/callrail.png';
import gtech from '../images/gtech.png';
import honeywell from '../images/honeywell.jpeg';
import mary from '../images/mary.png';
import rit from '../images/rit.png';
import verivo from '../images/verivo.jpeg';
import warnerresume from '../images/warnerresume.jpeg';
import westat from '../images/westat.png';

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

const Resume = () => {
    return (
        <>
            <div className="resume-overlay"></div>
            <div className="resume">
                <div className="resume-top">
                    <div className="resume-top-left">
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
                                I am a polyglot developer with a Masters in Computer Science.
                                I focus on full-stack development and enjoy learning about cyber security principles and machine learning.
                                I also have experience with big data as well as DevOps.
                            </div>
                        </div>
                        <div className="personal">
                            <h3 className="resume-header">Personal</h3>
                            <div className="resume-content-item"><ContentWithFontAwesome faClass="fas fa-laptop laptop" text="jbuoni.github.io"/></div>
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
                            <SkillsContainer skill="TypeScript" stars={[1,2,3,4,5]}/>
                            <SkillsContainer skill="Java" stars={[1,2,3]}/>
                            <SkillsContainer skill="C#" stars={[1,2,3]}/>
                            <SkillsContainer skill="Scala" stars={[1,2,3]}/>
                            <SkillsContainer skill="React" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Angular" stars={[1,2,3]}/>
                            <SkillsContainer skill="Ruby" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Rails" stars={[1,2]}/>
                            <SkillsContainer skill="SQL" stars={[1,2,3]}/>
                            <SkillsContainer skill="PostgreSQL" stars={[1,2,3]}/>
                            <SkillsContainer skill="MongoDB" stars={[1,2]}/>
                            <SkillsContainer skill="Docker" stars={[1,2]}/>
                            <SkillsContainer skill="Kubernetes" stars={[1,2]}/>
                            <SkillsContainer skill="Elasticsearch" stars={[1,2]}/>
                            <SkillsContainer skill="AWS" stars={[1,2]}/>
                            <SkillsContainer skill="Amazon EKS" stars={[1,2]}/>
                            <SkillsContainer skill="Backbone" stars={[1]}/>
                            <SkillsContainer skill="C++" stars={[1]}/>
                            <SkillsContainer skill="jQuery" stars={[1,2,3,4]}/>
                        </div>
                        <div className="skills">
                            <h3 className="resume-header">Concepts</h3>
                            <SkillsContainer skill="Front-end" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Back-end" stars={[1,2,3,4,5]}/>
                            <SkillsContainer skill="Databases" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="DevOps" stars={[1,2,3]}/>
                            <SkillsContainer skill="Security" stars={[1,2]}/>
                            <SkillsContainer skill="UI/UX" stars={[1]}/>
                        </div>
                        <div className="skills">
                            <h3 className="resume-header">Soft Skills</h3>
                            <SkillsContainer skill="Mentorship" stars={[1,2,3,4,5]}/>
                            <SkillsContainer skill="Leadership" stars={[1,2,3]}/>
                            <SkillsContainer skill="Collaboration" stars={[1,2,3,4]}/>
                            <SkillsContainer skill="Communication" stars={[1,2,3,4]}/>
                        </div>
                        <div className="certifications" >
                            <h3 className="resume-header">Certifications</h3>
                            <div className="cert-div"><b>Scrum Certification, 2016</b> Scrum Alliance</div>
                        </div>
                    </div>
                    <div className="resume-mid">
                        <div className="resume-section">
                            <ResumeHeader title="Experience" />
                            <ResumeRow
                                line1="CallRail, Atlanta GA" line2="Senior Software Engineer" date="March 2020 - Present"
                                info={` Working as a member of a scrum team to maintain CallRail related billing code in Ruby, Rails, and Angular.
                                <b> Participate in the mentorship program by helping mentor coworkers in Kubernetes, Angular, and SQL.
                                <b> Presented on XXS and IDOR attacks and prevention during CallRail security tech talks.
                                <b> Developed Typescript TypeORM prototype to help developers deploy and manage local Amazon EKS services and configurations.
                                <b> Migrated rake tasks to Kubernetes k8 cron jobs to help with company shift to Amazon EKS.
                                `}
                                image={callrail}
                            />
                            <ResumeRow
                                line1="Honeywell, Atlanta GA" line2="Senior Cloud Developer" date="September 2019 - March 2020"
                                info={` Used TypeScript to develop and maintain Honeywell Forge Platform APIs and CLI tools used to produce IoT applications.
                                       <b> Used Typescript, TypeORM to create a command-line tool to allow front-end developers to create, publish, and update NPM packages.
                                       <b> Used Openshift, Rancher, and Octopus Deploy to release development code into production.
                                       <b> Used Docker and Kubernetes to update Forge Platform to deploy using Honeywell's pipeline instead of through GitHub.
                                `}
                                image={honeywell}
                            />
                            <ResumeRow
                                line1="Turner Broadcasting Inc., Atlanta GA" line2="Senior Software Developer" date="May 2015 - September 2019"
                                info={` Worked as a member of a scrum team for multiple high visibility projects including the Elections System and Content Supply Chain.
                                    <b> Worked with mulitple languages and frameworks throughout the day such as NodeJS, React, Scala, Java, Python, and MongoDB.
                                    <b> Created a new tracking system as a side project using Scala and Akka which replaced multiple legacy systems.
                                    <b> Spearheaded mentorship program for my department, which was incorporated to all intern positions for the GTO Tech Intern program.
                                `}
                                image={warnerresume}
                            />
                            <ResumeRow
                                line1="Westat, Atlanta GA​" line2="Programmer Analyst" date="June 2013 - May 2015"
                                image={westat}
                            />
                            <br/>
                            <ResumeRow
                                line1="Mary Cariola Children’s Center, Rochester New York"
                                line2="Website Developer" date="December 2012 – May 2013"
                                image={mary}
                            />
                            <br/>
                            <ResumeRow
                                line1="Verivo Software, Waltham Massachusetts"
                                line2="Product Manager" date="February 2011 – September 2011"
                                image={verivo}
                            />
                            <br/>
                            <ResumeRow
                                line1="Brand Networks Inc., Rochester NY​"
                                line2="Software Developer" date="March 2012 – November 2012"
                                image={bn}
                            />
                        </div>
                        <div className="resume-section">
                            <ResumeHeader title="Education" />
                            <ResumeRow
                                line1="Georgia Institute of Technology"
                                line2="Masters of Science, Computer Science, 3.8 GPA"
                                date="August 2018"
                                image={gtech}
                            />
                            <ResumeRow
                                line1="Rochester Institute of Technology"
                                line2="Bachelors of Science, Software Engineering, Economics Minor"
                                date="May 2013"
                                image={rit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;


