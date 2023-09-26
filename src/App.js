import './App.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/resume/Resume';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


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
        
  
          </Routes> 
      </div>
    </div>

  );
}

export default App;
