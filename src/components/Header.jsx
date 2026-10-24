import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SiteSearch from './SiteSearch';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check initial state from local storage or OS preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };
  
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Helper to apply active state styles to the current page
  const navClass = (targetPath, isMobile = false) => {
    const baseStyle = isMobile 
      ? "w-full py-3 px-4 rounded-lg flex items-center transition-colors font-label-lg text-label-lg"
      : "h-full flex items-center transition-colors font-label-lg text-label-lg";
      
    const activeStyle = isMobile
      ? "bg-primary/10 text-primary font-bold border-l-4 border-primary"
      : "text-primary font-bold border-b-2 border-primary";
      
    const inactiveStyle = "text-on-surface-variant hover:text-primary hover:bg-surface-container-low";

    return `${baseStyle} ${path === targetPath ? activeStyle : inactiveStyle}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.06)] bg-surface-container-lowest">
      
      {/* Educational Banner */}
      <div className="w-full bg-primary-container text-on-primary-container px-margin-mobile lg:px-margin py-1.5 flex items-center justify-center gap-space-sm font-label-md text-label-md uppercase tracking-wider text-center">
        <span className="material-symbols-outlined text-[16px]">warning</span>
        <span>NOTICE: THIS WEBSITE IS FOR EDUCATIONAL PURPOSES ONLY</span>
      </div>
      
      {/* Main Navbar */}
      <div className="h-20 bg-surface-container-lowest/95 backdrop-blur-md px-margin-mobile lg:px-margin flex items-center justify-between relative">
        
        {/* UPPER LEFT LOGO WITH KINETIC ENERGY */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
          className="flex items-center gap-space-md group"
          aria-label="Galóng Galínda home and back to top"
        >
          
          {/* Animated Spinning Icon Container */}
          <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
            {/* Spinning Rings */}
            <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] transition-all duration-300" fill="none" viewBox="0 0 400 400">
              <circle className="text-primary/50" cx="200" cy="200" r="185" stroke="currentColor" strokeDasharray="20 15" strokeWidth="12" />
              <circle className="text-tertiary/40" cx="200" cy="200" r="145" stroke="currentColor" strokeDasharray="10 20" strokeWidth="8" />
            </svg>
            
            {/* Inner Red Glow on Hover */}
            <div className="absolute inset-2 rounded-full bg-primary/20 blur-[4px] group-hover:animate-pulse"></div>
            
            {/* Physical Logo */}
            <div className="relative z-10 w-10 h-10 overflow-hidden rounded-full">
              <img
                alt="Galóng Galínda Logo"
                className="block h-full w-full rounded-full object-contain"
                src="/gallery/galong-galinda-logo-clean.png"
              />
            </div>
          </div>

          {/* Text Container (Title + Motto) */}
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight leading-tight group-hover:text-tertiary transition-colors duration-300">
              GALÓNG GALÍNDA
            </span>
            <span className="font-label-badge text-label-badge text-secondary font-semibold uppercase tracking-wider">
              Patinikang Gâlo, Ipákit Ing Galíng Da
            </span>
          </div>

        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-lg h-full">
          <Link to="/" className={navClass('/')}>Home</Link>
          <Link to="/about" className={navClass('/about')}>About Us</Link>
          <Link to="/products" className={navClass('/products')}>Products</Link>
          <Link to="/services" className={navClass('/services')}>Services</Link>
          <Link to="/events" className={navClass('/events')}>Gallery & Events</Link>
          <Link to="/faq" className={navClass('/faq')}>FAQs</Link>
          <Link to="/contact" className={navClass('/contact')}>Contact Us</Link>
        </nav>
        
        {/* Right Side Icons */}
        <div className="flex items-center gap-space-md">
          <button
            type="button"
            onClick={() => {
              setIsSearchOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center justify-center rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
            aria-label="Search website"
            aria-haspopup="dialog"
            aria-expanded={isSearchOpen}
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">search</span>
          </button>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface-variant transition-colors flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          {/* Mobile Hamburger Button */}
          <button 
            aria-label="Toggle Menu" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface focus:outline-none transition-colors"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div> {/* <-- This is the correct placement for the closing div! */}

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className="xl:hidden absolute top-full left-0 w-full bg-surface-container-lowest border-t border-surface-container-highest shadow-xl flex flex-col p-4 gap-2 pb-6">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={navClass('/', true)}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={navClass('/about', true)}>About Us</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className={navClass('/products', true)}>Products</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={navClass('/services', true)}>Services</Link>
          <Link to="/events" onClick={() => setIsMobileMenuOpen(false)} className={navClass('/events', true)}>Gallery & Events</Link>
          <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className={navClass('/faq', true)}>FAQs</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={navClass('/contact', true)}>Contact Us</Link>
        </nav>
      )}
      {isSearchOpen && <SiteSearch onClose={() => setIsSearchOpen(false)} />}
    </header>
  );
}
