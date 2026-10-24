import { useLayoutEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackgroundMusic from './BackgroundMusic';
import BackToTop from './BackToTop';
import { Outlet, useLocation } from 'react-router-dom';
import {
  getPendingNetworkRequests,
  networkActivityEvent,
} from '../utils/networkActivity';

function NetworkLoader() {
  const [isNetworkSlow, setIsNetworkSlow] = useState(false);

  useLayoutEffect(() => {
    let pendingRequests;
    let showTimeoutId;

    const scheduleLoader = () => {
      if (!showTimeoutId) {
        showTimeoutId = window.setTimeout(() => {
          if (pendingRequests > 0) setIsNetworkSlow(true);
          showTimeoutId = undefined;
        }, 700);
      }
    };

    const handleNetworkActivity = (event) => {
      pendingRequests = Math.max(0, pendingRequests + event.detail);

      if (pendingRequests > 0) {
        scheduleLoader();
      } else if (pendingRequests === 0) {
        window.clearTimeout(showTimeoutId);
        showTimeoutId = undefined;
        setIsNetworkSlow(false);
      }
    };

    window.addEventListener(networkActivityEvent, handleNetworkActivity);
    pendingRequests = getPendingNetworkRequests();
    if (pendingRequests > 0) scheduleLoader();

    return () => {
      window.removeEventListener(networkActivityEvent, handleNetworkActivity);
      window.clearTimeout(showTimeoutId);
    };
  }, []);

  if (!isNetworkSlow) return null;

  return (
    <div
      className="network-loading-overlay"
      role="status"
      aria-live="polite"
      aria-label="Loading data. The network is taking longer than usual."
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
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  useLayoutEffect(() => {
    const updateVisibility = () => setIsBackToTopVisible(window.scrollY > 300);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />
      <main className="w-full pt-[112px] bg-background flex-1 flex flex-col">
        <div key={pathname} className="page-transition-enter flex flex-1 flex-col">
          <Outlet />
        </div>
      </main>
      <div className={`floating-controls ${isBackToTopVisible ? 'has-back-to-top' : ''}`}>
        <BackToTop isVisible={isBackToTopVisible} />
        <BackgroundMusic />
      </div>
      <Footer />
      <NetworkLoader />
    </div>
  );
}