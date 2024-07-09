import Link from "next/link";
import { useEffect, useState } from "react";

const PoliticaPrivacidade = () => { 
    const [showCookieBanner, setShowCookieBanner] = useState(true); 

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

    return (
        <>
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
        </>
    );
};

export default PoliticaPrivacidade;