import Algo from "../algorithms"
import Footer from "../footer"
import { NavigationBar } from "../navigationBar"

const AlgoWrapped = () => {
    document.body.style.overflow = 'auto'
    return (
        <>
            <div className="site-header">
                <NavigationBar />
            </div>
            <Algo/>
            <Footer />
        </>
    )
}

export default AlgoWrapped