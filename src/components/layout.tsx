import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import Chat from './Chat';
import PoliticaPrivacidade from './PoliticaPrivacidade';
import ScrollButton from './ScrollButton';

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
        //{ name: 'Mídia', link: '#mocidade' },
        { name: 'Mocidade', link: '/departamento/mocidade' }
      ]
    },
    { name: 'ADM News', link: '/admnews' },
    { name: 'Dizimos e Ofertas', link: '/dizimos-ofertas' }
    //{ name: 'Serviços', link: '/servicos' }
  ]; 

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
