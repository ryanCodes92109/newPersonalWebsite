import './App.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/resume/Resume';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import AboutMe from './components/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route 
            path ='/resume' 
            element={ <Resume />} 
          />
        
          <Route
            path='/contact'
            element={ <Contact /> }
          />

          <Route 
            path='/about-me'
            element={ <AboutMe/> }
          />
          
        </Routes>
    </div>
  );
}

export default App;
