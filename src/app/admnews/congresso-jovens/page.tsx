"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ConferenciaFamilia = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main className="relative">
            {/* Banner com Imagem */}
            <section className="relative w-full h-[60vh] overflow-hidden bg-emerald-950"> 
                <Link href="/" className="block">
                    <Image
                        src={isMobile ? "/midia/admnews/467649457_18055073281917705_8731660460177381492_n_1080.jpg" : "/midia/admnews/467649457_18055073281917705_8731660460177381492_n_1080.jpg"}
                        alt="congresso jovens"
                        layout="fill"
                        objectFit={isMobile ? 'cover' : 'contain'}
                        quality={100}
                        className="object-center"
                    />
                </Link>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    {/*<h2 className="text-4xl font-bold text-white font-poppins">Conferência da Família</h2>*/}
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <h3 className="items-center text-center text-2xl text-black-600 font-poppins font-semibold mb-4">
                            Congresso de Jovens
                        </h3>
                        <p className="text-lg text-gray-800 max-w-7xl mb-4">
                            Ainda estamos absorvendo tudo o que vivemos nesses últimos dois dias — um tempo de preparo para tudo o que Deus fará através de nós.

                            E isso é só o começo... O PRÓXIMO NÍVEL de Deus está apenas começando!

                            Confira um pouco do que rolou e te aguardamos no próximo congresso.
                        </p>

                        <div className="flex justify-center">
                            <video
                                controls
                                className="w-full max-w-sm sm:max-w-sm max-w-64 rounded-lg shadow-lg"
                            >
                                <source src="/midia/admnews/Snapinsta.app_video_3343F3BC432D7CDBCD8D71028FEA20AC_video_dashinit.mp4" type="video/mp4" />
                                Seu navegador não suporta vídeos.
                            </video>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default ConferenciaFamilia;
