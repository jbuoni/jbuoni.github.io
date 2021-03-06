import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function CustomBar({ language, years }) {
    return (
        <div className="exp-bar-label">
            <ProgressBar now={years} label={`${language}`} />
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
                <CustomBar language={'Python'} years={70}/>
                <CustomBar language={'NodeJS'} years={70}/>
                <CustomBar language={'TypeScript'} years={70}/>
                <CustomBar language={'React'} years={50}/>
                <CustomBar language={'Angular'} years={50}/>
                <CustomBar language={'C#'} years={40}/>
                <CustomBar language={'Scala'} years={50}/>
                <CustomBar language={'Mongo'} years={40}/>
                <CustomBar language={'Docker'} years={20}/>
                <CustomBar language={'SQL'} years={60}/>
                <CustomBar language={'Postgres'} years={30}/>
                <CustomBar language={'CSS'} years={40}/>
                <CustomBar language={'Ruby'} years={50}/>
                <CustomBar language={'Kubernetes'} years={20}/>
                <CustomBar language={'JQuery'} years={70}/>
            </div>
        </div>
    )
}
