import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}
interface MenuItem {
  name: string;
  link: string;
  subcategories?: MenuItem[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true); 

  const MenuItems: MenuItem[] = [
    { name: 'Quem Somos', link: '/quem-somos' },
    { name: 'Onde Estamos', link: '/onde-estamos' },
    {
      name: 'Departamentos',
      link: '',
      subcategories: [
        { name: 'CIBE', link: '#cibe' },
        { name: 'Deafa', link: '#deafa' },
        { name: 'EDB', link: '#edb' },
        { name: 'Infantil', link: '#infantil' },
        { name: 'Mídia', link: '#mocidade' },
        { name: 'Mocidade', link: '#mocidade' }
      ]
    },
    { name: 'Ofertas', link: '/ofertas' }
  ];  

  useEffect(() => {
    const cookieConsent = localStorage.getItem('modal-lgpd');
    if (cookieConsent === 'true') {
      setShowCookieBanner(false);
    }
  }, []);

  const handleCookieConsent = () => {
    localStorage.setItem('modal-lgpd', 'true');
    setShowCookieBanner(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <Header menuItems={MenuItems} />

      {children}

      <Footer menuItems={MenuItems} />

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-700 text-white p-3 rounded-full shadow-lg hover:bg-orange-800 focus:outline-none"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
          <p className="text-sm">
            Nosso site utiliza cookies para oferecer a você uma melhor experiência. Ao clicar em "Entendi", você declara estar ciente com nossa{' '}
            <Link href="#">
              Política de Privacidade
            </Link>.
          </p>
          <button
            onClick={handleCookieConsent}
            className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
          >
            Entendi
          </button>
        </div>
      )}
    </div>
  );
}

export default Layout;
