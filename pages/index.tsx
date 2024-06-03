import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuMenu, LuX } from 'react-icons/lu';
import { FaArrowUp, FaInstagram, FaYoutube } from 'react-icons/fa';


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const MenuItems = [
    { name: 'Quem Somos', link: '#planos' },
    { name: 'Nossa Missão', link: '' },
    { name: 'Onde Estamos', link: ''},
    { name: 'Departamentos', link: ''},
    { name: 'Ofertas', link: ''}
  ];

  const cultos = [
    {
      diaSemana: 'Terça-feira',
      descricaoCulto: 'Culto de Ensino',
    },
    {
      diaSemana: 'Sexta-feira',
      descricaoCulto: 'Culto da CIBE',
    },
    {
      diaSemana: 'Sabado',
      descricaoCulto: 'Culto dos Jovens',
    },
    {
      diaSemana: 'Domingo',
      descricaoCulto: 'Manhã: Escola Biblica Dominical (EBD) Noite: Evangelistico',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    const checkCookieConsent = () => {
      const consent = localStorage.getItem('modal-lgpd');
      if (consent) {
        setShowCookieBanner(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleResize();
    checkCookieConsent();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  const togglecultos = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleCookieConsent = () => {
    localStorage.setItem('modal-lgpd', 'true');
    setShowCookieBanner(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen relative">
      <header className="relative bg-gradient-to-r from-white to-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/img/logo_compacta_color.png" 
              alt="CoelhoVendas Logo" 
              width={150} 
              height={150}
              quality={100}
              className="object-contain"  
            />
            {!isMobile && (
              <nav className="ml-10 space-x-4">
                {MenuItems.map(item => (
                  <Link 
                    key={item.name} 
                    href={item.link} 
                    className="text-gray-600 px-4 py-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            )}
          </div>
          <div className="flex items-center">
            {isMobile && (
              <button onClick={() => setIsOpen(true)} className="text-gray-600 text-3xl">
                <LuMenu />
              </button>
            )}
          </div>
        </div>
        {isMobile && (
          <div className={`fixed inset-0 z-50 bg-orange-700 overflow-y-auto transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col">
              <div className="flex items-center">
                <button className="p-4 text-white text-3xl" onClick={onClose}>
                  <LuX />
                </button>
                <img src="/img/logo_compacta_branca.png" alt="Logo" className="h-12" />
              </div>
              <hr className="my-1 border-orange-800" />
              {MenuItems.map(item => (
                <div key={item.name}>
                  <a href={item.link} onClick={handleLinkClick} className="block">
                    <div className={`flex items-center justify-between px-5 py-2 border-b border-orange-800 text-white cursor-pointer`}>
                      <div className="flex items-center">
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}              
            </div>
          </div>
        )}
      </header>

      <main className="relative">
        <div className="relative h-screen">
          <Image
            src="/img/culto_ensino.png"
            alt="culto ensino"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-b from-transparent to-black p-8">
            <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">Pastor Walter Luiz</h1>
            <p className="text-white text-lg mb-6 animate-slide-up">
              Seu estilo eloquente, franco, direto e questionador são <br />
              características que marcam a sua trajetória ao longo <br />
              de vários anos como defensor da fé cristã.
            </p>
            <button className="px-4 py-2 bg-white text-black rounded-full">Confira</button>
          </div>
        </div>
        <style jsx>{`
          .animate-slide-up {
            animation: slide-up 1s ease-in-out forwards;
          }

          @keyframes slide-up {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </main>

      <section className="relative bg-gradient-to-r from-orange-950 to-orange-800 py-20 text-white text-center" id="cta-2">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Deseja aceitar a Jesus Cristo como seu salvador?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <Link href="/cadastro" className="bg-transparent border border-orange-600 text-white px-6 py-3 rounded-md text-md mb-4 sm:mb-0 sm:mr-4 transition-transform transform hover:scale-110 hover:shadow-xl flex items-center">
              Sim! Eu Desejo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20" id="cultos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Nosso Cultos</h2>
          <p className="mt-4 text-gray-500 text-center">Se não encontrar a resposta abaixo, entre em contato</p>
          <div className="mt-10">
            {cultos.map((cultos, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button
                  className="flex justify-between items-center w-full text-left text-gray-700 focus:outline-none"
                  onClick={() => togglecultos(index)}
                >
                  <span className="text-lg font-medium"><b>{cultos.diaSemana}</b></span>
                  <span className="text-2xl">
                    {openIndex === index ? '-' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{cultos.descricaoCulto}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative bg-gradient-to-r from-orange-900 to-orange-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          <div>
            <Image 
              src="/img/logo_compacta_branca.png" 
              alt="CoelhoVendas Logo" 
              width={200} 
              height={200} 
              quality={100}
              className="object-contain" 
            />
          </div>
          <div>
            <h3 className="text-md font-bold mb-4">Menu</h3>
            <ul className="text-sm space-y-2">
              {MenuItems.map(item => (
                <li key={item.name}>
                  <Link href={item.link} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-bold mb-4">Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/politica-de-privacidade" className="hover:underline">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:underline">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/codigo-de-etica" className="hover:underline">
                  Código de ética e conduta
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-bold mb-4">Contato</h3>
            <p></p>
            <p></p>
            <div className="text-sm flex space-x-4 mt-4">
              <a href="https://www.youtube.com/@admadureira_portonacional" className="hover:text-gray-300">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.instagram.com/admadureira_portonacional" className="hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-xs text-center mt-8 text-white">
          <hr className="my-4 border-orange-800" />
          <p>© {currentYear} AD Madureira Porto Nacional. Todos os direitos reservados.</p>
        </div>
      </footer>     

      {showScrollTopButton && (
        <>
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-orange-700 text-white p-3 rounded-full shadow-lg hover:bg-orange-800 focus:outline-none"
          >
            <FaArrowUp className="text-xl" />
          </button>
        </>
      )}

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
          <p className="text-sm">
            Nosso site utiliza cookies para oferecer a você uma melhor experiência. Ao clicar em "Entendi", você declara estar ciente com nossa{' '}
            <Link href="/politica-de-privacidade" className="underline">
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

export default Home;