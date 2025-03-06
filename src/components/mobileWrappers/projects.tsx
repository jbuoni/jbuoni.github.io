import { isMobile } from 'react-device-detect'

import { NavigationBar, NavigationMobile } from "../navigationBar";
import { Projects, ProjectsMobile } from "../projects";
import Footer from '../footer';

const ProjectsWrapped = () => {
    document.body.style.overflow = 'auto';
    if(isMobile) {
        document.body.style.overflowX = 'hidden';
        return (
            <>
                <NavigationMobile />
                <ProjectsMobile />
                <>
                    <div className="footer">
                    </div>
                </>
            </>
        );
    }

    return (
        <>
            <div className="site-header">
                <NavigationBar />
            </div>
            <Projects />
            <Footer />
        </>
    )
}

export default ProjectsWrapped