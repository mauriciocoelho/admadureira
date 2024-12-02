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

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const openModal = (content: React.ReactNode) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };

    return (
        <main className="relative">
            {/* Banner com Imagem */}
            <section className="relative w-full h-[60vh] overflow-hidden bg-emerald-950"> 
                <Link href="/" className="block">
                    <Image
                        src={isMobile ? "/midia/admnews/468143562_1243384086874264_3644392121757687463_n_1080.jpg" : "/midia/admnews/468143562_1243384086874264_3644392121757687463_n_1080.jpg"}
                        alt="conferencia da familia"
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
                            Conferência da Família
                        </h3>
                        <p className="text-lg text-gray-800 max-w-7xl mb-4">
                            Neste final de semana, nos dias 24 e 25 de novembro, tivemos a alegria de realizar a nossa grande Conferência da Família. O evento contou com a presença do Pr. Elidiano Ribeiro, que trouxe uma poderosa ministração da Palavra de Deus, abençoando e edificando vidas e lares.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            <img
                                src="/midia/admnews/468339189_1088559326247400_4228792930099249194_n_1080.jpg"
                                alt="Imagem 2"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                onClick={() => openModal(<img src="/midia/admnews/468339189_1088559326247400_4228792930099249194_n_1080.jpg" alt="Imagem 2" className="w-full h-auto" />)}
                            />                            
                            <video
                                src="/midia/admnews/video_F04DE4B487DA0D35B0DF1A14A7253A82_video_dashinit.mp4"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                muted
                                loop
                                autoPlay
                                onClick={() => openModal(<video src="/midia/admnews/video_F04DE4B487DA0D35B0DF1A14A7253A82_video_dashinit.mp4" className="w-full h-auto" controls />)}
                            />
                            <img
                                src="/midia/admnews/468032142_1331420601354614_5014763627587231383_n_1080.jpg"
                                alt="Imagem 2"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                onClick={() => openModal(<img src="/midia/admnews/468032142_1331420601354614_5014763627587231383_n_1080.jpg" alt="Imagem 2" className="w-full h-auto" />)}
                            />
                            <img
                                src="/midia/admnews/468343823_1271332997442435_6814574558686490953_n_1080.jpg"
                                alt="Imagem 2"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                onClick={() => openModal(<img src="/midia/admnews/468343823_1271332997442435_6814574558686490953_n_1080.jpg" alt="Imagem 2" className="w-full h-auto" />)}
                            />
                            <img
                                src="/midia/admnews/468138244_1284569969242130_5663941907068494054_n_1080.jpg"
                                alt="Imagem 2"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                onClick={() => openModal(<img src="/midia/admnews/468138244_1284569969242130_5663941907068494054_n_1080.jpg" alt="Imagem 2" className="w-full h-auto" />)}
                            />
                            <img
                                src="/midia/admnews/468131221_1075263483918916_8516226083364457940_n_1080.jpg"
                                alt="Imagem 2"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                onClick={() => openModal(<img src="/midia/admnews/468131221_1075263483918916_8516226083364457940_n_1080.jpg" alt="Imagem 2" className="w-full h-auto" />)}
                            />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default ConferenciaFamilia;
