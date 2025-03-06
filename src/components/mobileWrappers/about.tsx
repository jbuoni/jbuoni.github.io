import { isMobile } from 'react-device-detect'

import { NavigationBar, NavigationMobile } from '../navigationBar'
import About from '../about'
import Footer from '../footer'
import AboutMobile from '../about/mobile'

const AboutWrapped = () => {
    document.body.style.overflow = 'auto';

    if(isMobile) {
        return (
            <>
                <NavigationMobile />
                <AboutMobile />
                <div className="footer"></div>
            </>
        )
    }
    return (
        <>
            <NavigationBar />
            <About/>
            <Footer />
        </>
    )
}

export default AboutWrapped