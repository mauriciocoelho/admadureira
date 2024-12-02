"use client";
import React, { ReactNode, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Chat from './Chat';
import PoliticaPrivacidade from './PoliticaPrivacidade';
import ScrollButton from './ScrollButton';
import googleAnalytics from '../mixins/googleAnalytics';

interface LayoutProps {
  children: ReactNode;
}
interface MenuItem {
  name: string;
  link: string;
  subcategories?: MenuItem[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {  
  const MenuItems: MenuItem[] = [
    { name: 'Quem Somos', link: '/quem-somos' },
    { name: 'Onde Estamos', link: '/onde-estamos' },
    {
      name: 'Departamentos',
      link: '',
      subcategories: [
        { name: 'ADM Kids', link: '/departamento/admkids' },
        { name: 'CIBE', link: '/departamento/cibe' },
        { name: 'Deafa', link: '/departamento/deafa' },
        { name: 'EDB', link: '/departamento/ebd' }, 
        { name: 'Mocidade', link: '/departamento/mocidade' }
      ]
    },
    { name: 'ADM News', link: '/admnews' },
    { name: 'Dizimos e Ofertas', link: '/dizimos-ofertas' },
    {
      name: 'Batismo',
      link: '',
      subcategories: [
        { name: '01/12/2024', link: 'https://drive.google.com/drive/folders/1-NCRWhM-Ih93JWR_AE46ZJC2hClj5Vpb' }
      ]
    }
  ]; 

  useEffect(() => {
    const googleAnalyticsId = 'G-RRCVLDT76T';
    googleAnalytics.initialize(googleAnalyticsId);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header menuItems={MenuItems} />

      <main className="flex-grow">
        {children}
      </main>

      <Footer menuItems={MenuItems} />

      <ScrollButton />

      <Chat />  

      <PoliticaPrivacidade />
      
    </div>
  );
}

export default Layout;
