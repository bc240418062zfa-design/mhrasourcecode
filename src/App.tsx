import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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

export default function App() {
  return (
    <HelmetProvider>
      <Router>
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
    </HelmetProvider>
  );
}
