import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParallaxBackground from './components/ParallaxBackground';
import Home from './pages/Home';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-DEFAULT text-white selection:bg-accent-blue selection:text-white">
        <ParallaxBackground />
        <Navbar />

        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-dark-100 relative z-10">
          <p>© {new Date().getFullYear()} Haider Jehangir Mirza. Crafted with <span className="text-red-500">♥</span></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
