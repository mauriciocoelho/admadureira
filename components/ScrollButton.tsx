import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => { 
    const [isMobile, setIsMobile] = useState(false);
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

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
    
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
        };
    
    }, []);      
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showScrollTopButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-orange-700 text-white p-3 rounded-full shadow-lg hover:bg-orange-800 focus:outline-none"
                >
                    <FaArrowUp className="text-xl" />
                </button>
            )}
        </>
    );
};

export default ScrollButton;