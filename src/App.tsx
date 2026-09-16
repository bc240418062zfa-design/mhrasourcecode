import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Engineering from './pages/Engineering';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Company from './pages/Company';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // If there is a hash in the current location or query
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return;
      }
    }
    // Default to top of viewport on path change without hash
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="engineering" element={<Engineering />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="industries" element={<Industries />} />
          <Route path="company" element={<Company />} />
          <Route path="insights" element={<Insights />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
