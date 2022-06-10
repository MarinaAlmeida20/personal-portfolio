import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<ProjectDisplay />}/>
          <Route path="/experience" element={<Experience />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
