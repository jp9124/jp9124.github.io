import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Interests from './pages/Interests';
import Projects from './pages/Projects';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="layout">
          <Sidebar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
