import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

/**
 * This is absolutley painful using useState due to the challagnes forcing a rerender. Just use
 * the old way
 */
const NavigationBar = () => {

    const location = useLocation()
    const [currentTab, setCurrentTab] = useState('')

    useEffect(() => {
        const url = window.location.href
        const newCurrentTab = url.split('/').pop()
        setCurrentTab(newCurrentTab || '')
    }, [location])
    

   const onHackerRankClick = () => {
    setCurrentTab('hack')
    window.location.href = 'https://www.hackerrank.com/JBuoni?hr_r=1'
   }

   return (
    <>
        <div className="nav-bar">
            <div className="nav nav-brand" >
                <Link onClick={() => setCurrentTab('home')} to="/landing" >Jason Buoni</Link>
            </div>
            <div className="nav-right">
                <span className={`nav nav-link ${currentTab === 'about' && 'nav-selected' || ''}`}>
                    <Link onClick={() => setCurrentTab('algo')} to="/about" >About</Link>
                </span>
                <span className={`nav nav-link ${currentTab === 'algo' && 'nav-selected' || ''}`}>
                    <Link onClick={() => setCurrentTab('algo')} to="/algo" >Algorithms</Link>
                </span>
                <span className={`nav nav-link ${currentTab === 'projects' && 'nav-selected' || ''}`}>
                    <Link onClick={() => setCurrentTab('projects')} to="/projects" >Projects</Link>
                </span>
                <span className={`nav nav-link ${currentTab === 'mentees' && 'nav-selected' || ''}`}>
                    <Link onClick={() => setCurrentTab('mentees')} to="/mentees" >Mentorship</Link>
                </span>
                <span className={`nav nav-link ${currentTab === 'hack' && 'nav-selected' || ''}`} onClick={onHackerRankClick}>HackerRank</span>
                <span className={`nav nav-link ${currentTab === 'resume' && 'nav-selected' || ''}`}>
                    <Link onClick={() => setCurrentTab('proj')} to="/resume" >Resume</Link>
                </span>
            </div>
        </div>
    </>
)
}

export default NavigationBar