import './App.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/resume/Resume';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className = "appContainer">
        <Routes>
          <Route 
            path='/'
            element={ <AboutMe/> }
          />
          <Route 
            path ='/resume' 
            element={ <Resume />} 
          />

          <Route 
            path ='/projects' 
            element={ <Projects />} 
          />
          
            
          <Route
            path='/contact'
            element={ <Contact /> }
          />

          </Routes>
      </div>
    </div>

  );
}

export default App;
