import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackgroundMusic from './BackgroundMusic';
import { Outlet, useLocation } from 'react-router-dom';

function PageLoader() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsPageLoading(false), 450);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!isPageLoading) return null;

  return (
    <div
      className="page-loading-overlay"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="page-loader-mark">
        <span className="page-loader-ring" aria-hidden="true" />
        <img
          src="/gallery/galong-galinda-logo-clean.png"
          alt=""
          className="page-loader-logo"
        />
      </div>
      <span className="page-loader-text">Loading</span>
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />
      <main className="w-full pt-[112px] bg-background flex-1 flex flex-col">
        <div key={pathname} className="page-transition-enter flex flex-1 flex-col">
          <Outlet />
        </div>
      </main>
      <BackgroundMusic />
      <Footer />
      <PageLoader key={pathname} />
    </div>
  );
}