import { isMobile } from "react-device-detect"
import { NavigationBar, NavigationMobile } from "../navigationBar"
import { Mentorship, MentorshipMobile } from "../mentorship"
import Footer from "../footer"

const MenteesWrapped = () => {
    document.body.style.overflow = 'auto'
    if(isMobile) {
        document.body.style.overflowX = 'hidden'
        return (
            <>
                <NavigationMobile />
                <MentorshipMobile />
                <>
                    <div className="footer">
                    </div>
                </>
            </>
        )
    }

    return (
        <>
            <div className="site-header">
                <NavigationBar />
            </div>
            <Mentorship />
            <Footer />
        </>
    )
}


export default MenteesWrapped