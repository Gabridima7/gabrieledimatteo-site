import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import GlobalBackground from './GlobalBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <GlobalBackground />
      <Navbar />
      <main className="pt-[72px]">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
