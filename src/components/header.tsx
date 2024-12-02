"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuMenu, LuX } from 'react-icons/lu';
import AudioButton from './AudioButton';

interface MenuItem {
  name: string;
  link: string;
  subcategories?: MenuItem[];
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <header className="relative bg-gradient-to-r from-white to-white py-4">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/img/logo_compacta_color.png"
                alt="AdMadureira Logo"
                width={150}
                height={150}
                quality={100}
                className="object-contain"
                fetchPriority="high"
              />
            </a>
          </Link>
          {!isMobile && (
            <nav className="ml-10 flex pace-y-1">
              {menuItems && menuItems.map((item) => (
                <div className="relative group" key={item.name}>
                  <Link href={item.link} legacyBehavior>
                    <a className="text-gray-600 px-4 py-2">
                      {item.name}
                    </a>
                  </Link>
                  {item.subcategories && (
                    <div className="absolute left-0 mt-2 w-48 border rounded bg-white shadow-lg z-10 hidden group-hover:block">
                      {item.subcategories.map((sub) => (
                        <Link key={sub.name} href={sub.link} legacyBehavior>
                          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            {sub.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}          
        </div>
        <AudioButton />      
        {/*<div className="flex items-center space-x-2">
          <a
            href="http://app.admadureiraportonacional.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:space-x-2 text-gray-800 px-4 py-2 rounded-lg focus:outline-none transform transition-transform duration-200 hover:scale-110"
          >
            Login
          </a>

        </div> */}

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
            <div className="flex items-center justify-between p-4">
              <button className="text-white text-3xl" onClick={onClose}>
                <LuX />
              </button>
              <Link href="/" legacyBehavior>
                <a onClick={handleLinkClick}>
                  <Image
                    src="/img/logo_compacta_branca.png"
                    alt="Logo"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </a>
              </Link>
            </div>
            <hr className="my-1 border-orange-800" />
            {menuItems && menuItems.map((item) => (
              <div key={item.name}>
                <div className="block">
                  <div className="flex items-center justify-between px-5 py-2 border-b border-orange-800 text-white cursor-pointer" onClick={() => toggleSubmenu(item.name)}>
                    <div className="flex items-center">
                      <Link href={item.link} legacyBehavior>
                        <a onClick={handleLinkClick}>
                          <span>{item.name}</span>
                        </a>
                      </Link>
                      {item.subcategories && (
                        <span className="ml-2">
                          {openSubmenus[item.name] ? '-' : '+'}
                        </span>
                      )}
                    </div>
                  </div>
                  {item.subcategories && openSubmenus[item.name] && (
                    <div className="pl-5">
                      {item.subcategories.map((sub) => (
                        <Link key={sub.name} href={sub.link} legacyBehavior>
                          <a className="block text-white" onClick={handleLinkClick}>
                            {sub.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
