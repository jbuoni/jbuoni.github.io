import React from 'react';
import Fade from 'react-reveal/Fade';

const TopHeader = ({ text, lineWidth }) => {
    return (
        <Fade top>
            <div className="header-top">
                <h1 className="header-h3">{text}</h1>
                <div className={`header-bar ${lineWidth}`}></div>
            </div>
        </Fade>
    );
};

export default TopHeader;

