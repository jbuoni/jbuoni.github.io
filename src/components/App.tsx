// Libs
import React, { ReactElement } from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import { isIE, isMobile } from 'react-device-detect';
// Regular
import About from './About';
import Algo from './Algo';
import Projects from './Projects';
import Landing from './Landing';
import Resume from './Resume';
import NavigationBar from './Navigation';
import Footer from './Footer';
// Mobile
import MobileAbout from './MobileAbout';
import MobileNav from './MobileNav';
import MobileProjects from './ProjectsMobile';

function HomeWrapped(): ReactElement  {
	document.body.style.overflow = 'auto';

	if (isMobile) {
		return (
			<>
				<MobileNav />
				<MobileAbout/>
				<>
					<div className='footer'>
					</div>
				</>
			</>
		);
	}
	return (
		<>
			<div className='site-header'>
				<NavigationBar />
			</div>
			<About/>
			<Footer />
		</>
	);
}

function AlgoWrapped(): ReactElement {
	document.body.style.overflow = 'auto';

	if (isMobile) {
		return (
			<>
				<MobileNav />
				<MobileAbout/>
				<>
					<div className='footer'>
					</div>
				</>
			</>
		);
	}

	return (
		<>
			<div className='site-header'>
				<NavigationBar />
			</div>
			<Algo/>
			<Footer />
		</>
	);
}

function ProjectsWrapped(): ReactElement {
	document.body.style.overflow = 'auto';

	if (isMobile) {
		document.body.style.overflowX = 'hidden';
		return (
			<>
				<MobileNav />
				<MobileProjects/>
				<>
					<div className='footer'>
					</div>
				</>
			</>
		);
	}

	return (
		<>
			<div className='site-header'>
				<NavigationBar />
			</div>
			<Projects/>
			<Footer />
		</>
	);
}

function LandingWrapped(): ReactElement {
	document.body.style.overflow = 'hidden';
	return <Landing/>;
}

export default function App(): ReactElement {
	return (
		<HashRouter>
			<div className='site-content'>
				<Switch>
					<Route exact path='/' render={() => <Redirect to='/landing' />} />
					<Route path='/about' component={() => <HomeWrapped />}/>
					<Route path='/algo' component={() => <AlgoWrapped />}/>
					<Route path='/proj' component={() => <ProjectsWrapped />}/>
					<Route path='/landing' component={() => <LandingWrapped />} />
					<Route path='/resume' component={() => <Resume />} />
					<Route render={() => <Redirect to='/landing' />} />
				</Switch>
			</div>
		</HashRouter>
	);
}