import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <main className="pt-[72px]">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
