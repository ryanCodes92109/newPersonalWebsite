import './App.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path ='/resume' element={<Resume />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
