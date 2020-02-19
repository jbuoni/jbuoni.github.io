import React from 'react';
import me from '../../images/me.jpg';
import '../../styles/about.less';

export const Icon = ({ faIcon, title, exp}) => {
    return (
        <div className="icon-container">
            <div className="circle">
                <i className={`${faIcon} fa-4x mid-icon`}></i>
            </div>
            <div className="middle-text">{title}</div>
            <div className="middle-exp">{exp}</div>
        </div>
    )
};

export const Photo = () => {
    return (
        <div className="octo">
            <div className="octo1">
                <img src={me} width="320" height="316" />
            </div>
        </div>
    );
};

export const clickFarm = (e) => {
    const win = window.open('http://lachenbockfarm.com/', '_blank');
    win.focus();
};
