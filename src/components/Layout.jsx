import Header from './Header';
import Footer from './Footer';
import BackgroundMusic from './BackgroundMusic';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />
      <main className="w-full pt-[112px] bg-background flex-1 flex flex-col">
        <Outlet />
      </main>
      <BackgroundMusic />
      <Footer />
    </div>
  );
}