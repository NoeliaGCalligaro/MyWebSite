import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Presentation from './components/Presentation';

const AppContent = () => {
  const location = useLocation();

  return (
    <main>
      {location.pathname !== '/' && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
