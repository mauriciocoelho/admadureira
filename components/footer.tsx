import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";

interface MenuItem {
    name: string;
    link: string;
    subcategories?: MenuItem[];
  }
  
  interface FooterProps {
    menuItems: MenuItem[];
  }
  
  const Footer: React.FC<FooterProps> = ({ menuItems }) => {
    const currentYear = new Date().getFullYear();

    return (
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
                        {menuItems.map(item => (
                            <li key={item.name}>
                                <Link href={item.link} className="hover:underline">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-bold mb-4">Redes</h3>
                    <p></p>
                    <p></p>
                    <div className="text-sm flex space-x-4 mt-4">
                        <a href="https://www.youtube.com/@admadureira_portonacional" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={24} />
                        </a>
                        <a href="https://www.instagram.com/admadureira_portonacional" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
                <div>
                    <a href="https://conemadto.com.br/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/img/logo_conemad_to.png" 
                            alt="Conemad-TO Logo" 
                            width={100} 
                            height={100} 
                            quality={100}
                            className="object-contain" 
                        />
                    </a>
                </div>
            </div>
            <div className="text-xs text-center mt-8 text-white">
                <hr className="my-4 border-orange-800" />
                <p>© {currentYear} AD Madureira Porto Nacional. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
