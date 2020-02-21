import React from 'react';
import me from '../../images/me_new.jpg';
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

export const WhoAmI = () => {
    return (
        <div className="about-text">
            <h3 className="about-h1">Who's This Guy?</h3>
            I am a full stack developer who loves just about every language not named C. 
            After spending years in the Rochester tundra, I was able to earn my undergrad from RIT. 
            Once I moved to the tropics in Atlanta, I worked to obtain my Masters from Georgia Tech. 
            I am also a pet enthusiast, and will always have multiple pets in my house at any given time. 
            My parents raise Nubian Goats and Great Pyrenees puppies. One day I'll redo their website, but for now you can see it
            <span  className="item-hover" onClick={clickFarm}><i> here.</i></span> 
            The baby's name is David and he is not mine, but is like a nephew to me. 
            He currently loves keys, dinosaurs, and his fish tank.
        </div>
    );
}

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
