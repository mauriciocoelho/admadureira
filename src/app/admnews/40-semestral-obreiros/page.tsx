"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const QuadragesimaSemestralObreiros = () => {
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
                        src={isMobile ? "/midia/admnews/40_semestral_mobile.jpeg" : "/midia/admnews/40_semestral.jpeg"}
                        alt="semetral de obreiros"
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
                            40° Semestral de Obreiros
                        </h3>
                        <p className="text-lg text-gray-800 max-w-7xl mb-4">
                        Nos dias 1 e 2 de dezembro, a Matriz foi palco de um evento inesquecível: a 40ª Semestral de Obreiros. Foram dois dias de comunhão, celebração e renovação espiritual, marcados pela presença poderosa de Deus.

O evento contou com a participação especial do Evangelista Geovane Leite, que trouxe mensagens edificantes e inspiradoras, além da presença abençoada do cantor Dennisson Sacramento, que ministrou louvores que tocaram profundamente os corações.

Momentos especiais incluíram o batismo de novos irmãos, um marco de fé e compromisso, e a consagração de obreiros, reafirmando o chamado e o propósito de servir ao Senhor com dedicação.

Foi um tempo de avivamento, união e crescimento espiritual que ficará marcado na memória e no coração de todos os presentes. Deus operou grandes coisas em nosso meio!
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">                                                      
                            <video
                                src="/midia/admnews/274C4EE3128105EACE5BCE28BE45BEBF_video_dashinit.mp4"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                muted
                                loop
                                autoPlay
                                onClick={() => openModal(<video src="/midia/admnews/274C4EE3128105EACE5BCE28BE45BEBF_video_dashinit.mp4" className="w-full h-auto" controls />)}
                            />
                            <video
                                src="/midia/admnews/994B0FD9EF53C02D80794611DCDE248B_video_dashinit.mp4"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                muted
                                loop
                                autoPlay
                                onClick={() => openModal(<video src="/midia/admnews/994B0FD9EF53C02D80794611DCDE248B_video_dashinit.mp4" className="w-full h-auto" controls />)}
                            />
                            <video
                                src="/midia/admnews/B34FD5F856F8D856FD7C7A1D9BB1F9A2_video_dashinit.mp4"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                muted
                                loop
                                autoPlay
                                onClick={() => openModal(<video src="/midia/admnews/B34FD5F856F8D856FD7C7A1D9BB1F9A2_video_dashinit.mp4" className="w-full h-auto" controls />)}
                            />
                            <video
                                src="/midia/admnews/2044301269722C9239CEA265D8706485_video_dashinit.mp4"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                muted
                                loop
                                autoPlay
                                onClick={() => openModal(<video src="/midia/admnews/2044301269722C9239CEA265D8706485_video_dashinit.mp4" className="w-full h-auto" controls />)}
                            />
                            <video
                                src="/midia/admnews/DE46A8486DD41AC093E7B0CD883739AC_video_dashinit.mp4"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                muted
                                loop
                                autoPlay
                                onClick={() => openModal(<video src="/midia/admnews/DE46A8486DD41AC093E7B0CD883739AC_video_dashinit.mp4" className="w-full h-auto" controls />)}
                            />
                            <video
                                src="/midia/admnews/9449483A72E3809C52BBAF1230C3BE84_video_dashinit.mp4"
                                className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                                muted
                                loop
                                autoPlay
                                onClick={() => openModal(<video src="/midia/admnews/9449483A72E3809C52BBAF1230C3BE84_video_dashinit.mp4" className="w-full h-auto" controls />)}
                            />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default QuadragesimaSemestralObreiros;
