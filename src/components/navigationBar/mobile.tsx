import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router'

/**
 * This is absolutley painful using useState due to the challagnes forcing a rerender. Just use
 * the old way
 */
const NavigationMobile = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [currentTab, setCurrentTab] = useState ('')

    useEffect(() => {
        const url = window.location.href
        const newCurrentTab = url.split('/').pop()
        setCurrentTab(newCurrentTab || '')
    }, [location])
    

    const toggleMenu = () => setMenuIsOpen(!menuIsOpen )

    const redirectToPage = (page: string) => navigate(page)

    return (
        <div className="nav-bar-mobile">
            <div className="navbar-link navbar-link-toggle" onClick={toggleMenu}>
                <i className="fas fa-bars burger"></i>
            </div>
            {
                menuIsOpen &&
                <nav className="navbar-items">
                    <div className={`nav nav-link ${currentTab === 'landing' && 'nav-selected' || ''}`} onClick={() => redirectToPage('/landing')}>Jason Buoni</div>
                    <div className={`nav nav-link ${currentTab === 'about' && 'nav-selected' || ''}`}onClick={() => redirectToPage('/about')}>About</div>
                    <div className={`nav nav-link ${currentTab === 'proj' && 'nav-selected' || ''}`}onClick={() => redirectToPage('/projects')}>Projects</div>
                    <div className={`nav nav-link ${currentTab === 'mentees' && 'nav-selected' || ''}`}onClick={() => redirectToPage('/mentees')}>Mentorship</div>
                </nav>
            }
        </div>
    )
}

export default NavigationMobile