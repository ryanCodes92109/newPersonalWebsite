import './App.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/resume/Resume';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';

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
            element={<Contact />}
          />
          
        </Routes>
    </div>
  );
}

export default App;
