import Experience from './experience'
import TopHeader from '../topHeader'
import Social from './social'
import Reveal from 'react-awesome-reveal'

import me from '../../assets/me.jpg'

import '../../mobile.less'

const AboutMobile = () => {
    const clickFarm = () => {
        const win = window.open('http://lachenbockfarm.com/', '_blank')
        win?.focus()
    }
    
    return (
        <div className="about-content-mobile">
            <TopHeader text="About"/>
            <div className="about-bottom">
                <div className="col sm-col-9">
                    <Reveal >
                        <div className="octo">
                            <div className="octo1">
                                <img className="photo" src={me}/>
                            </div>
                        </div>
                        <div className="about-text">
                            <h3 className="about-h1">Who's This Guy?</h3>
                            I am a full stack developer who loves just about every language not named C. 
                            After spending years in the Rochester tundra, I was able to earn my undergrad from RIT. 
                            Once I moved to the tropics in Atlanta, I worked to obtain my Masters from Georgia Tech. 
                            I am also a pet enthusiast, and will always have multiple pets in my house at any given time. 
                            My parents raise Nubian Goats and Great Pyrenees puppies. One day I'll redo their website, but for now you can see it
                            <span  className="item-hover" onClick={clickFarm}><i> here.</i></span> 
                        </div>
                    </Reveal>
                </div>
                <div className="col">
                    <Reveal>
                        < Experience />
                    </Reveal>
                    <Reveal>
                        < Social mobile={true} />
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default AboutMobile
