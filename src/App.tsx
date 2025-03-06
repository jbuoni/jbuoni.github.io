import { HashRouter, Routes, Route } from 'react-router'

import { AboutWrapped, AlgoWrapped, LandingWrapped, MenteesWrapped, ProjectsWrapped } from './components/mobileWrappers'

import 'bootstrap/dist/css/bootstrap.css'
import './App.less'
import Resume from './components/resume'

export default function App() {
  return (
      <HashRouter>
          <div className='site-content'>
              <Routes>
                  <Route path="/about" element={<AboutWrapped />}/>
                  <Route path="/algo" element={<AlgoWrapped />}/>
                  <Route path="/projects" element={<ProjectsWrapped />}/>
                  <Route path="/mentees" element={<MenteesWrapped />}/>
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/landing" element={<LandingWrapped />} />
                  <Route path="/" element={ <LandingWrapped />} />
              </Routes>
          </div>
      </HashRouter>
  )
}
