import React from 'react';
import { Philosophy } from './menteeUtils';
import TopHeader from '../TopHeader';
import Fade from 'react-reveal/Fade';

const MenteesMobile = () => {
    return (
        <>
            <div className="top">
                <div className="header-container">
                    <TopHeader text="Mentorship" lineWidth="mentorship-line"/>
                </div>
            </div>
            <main className="container p3 ">
                <div className="mentee-content">
                    <Fade top>
                        <Philosophy isDesktop={false} />
                    </Fade>
                </div>
            </main>
        </>
    );
};

export default MenteesMobile;