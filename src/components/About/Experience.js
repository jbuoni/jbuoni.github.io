import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function CustomBar({ language, years }) {
    return (
        <div className="exp-bar-label">
            <span>{language}</span>
            <ProgressBar now={years} label={`${language}: ${years} %`} />
        </div>
    )
}

export default function Experience() {
    return(
        <div className="about-panel">
            <h3 className="home-h3">Experience</h3>
            <div className="exp">
                <CustomBar language={'JavaScript'} years={90}/>
                <CustomBar language={'Java'} years={60}/>
                <CustomBar language={'Python'} years={40}/>
                <CustomBar language={'NodeJS'} years={50}/>
                <CustomBar language={'React'} years={30}/>
                <CustomBar language={'C#'} years={40}/>
                <CustomBar language={'Scala'} years={50}/>
            </div>
        </div>
    )
}