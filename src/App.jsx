import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Events from './pages/Events';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Cookies from './pages/Cookies';
import ScrollToTop from './components/ScrollToTop';

const Placeholder = ({ title }) => (
  <div className="flex-1 flex items-center justify-center p-20">
    <h1 className="text-4xl font-bold text-primary">{title} Page Coming Soon</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="events" element={<Events />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund" element={<Refund />} />
          <Route path="cookies" element={<Cookies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}