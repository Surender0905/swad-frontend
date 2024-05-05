import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Header from '@/components/header';
import { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
  showHero?: boolean;
}

export const Layout: FC<layoutProps> = ({ children, showHero = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};
