"use client";

import OpenMidia from '@/components/OpenMidia';
import React, { useState } from 'react';

const EBD = () => {

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
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center space-x-4">
                        <h2 className="text-3xl text-black-600 font-poppins font-semibold">EBD (Escola Biblica Dominical)</h2>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <div className="flex flex-col md:flex-row items-center md:items-start text-left space-y-8 md:space-y-0 md:space-x-8">
                            {/* Imagem com estilo Polaroide */}
                            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex-shrink-0">
                                <img
                                    src="/img/departamentos/ebd/logo.jpg"
                                    alt="Logo EBD"
                                    className="w-60 h-auto rounded-lg shadow-md"
                                />
                            </div>
                            {/* Texto ao lado (ou abaixo) da imagem */}
                            <div className="max-w-2xl">
                                <p className="mt-4">
                                    A Escola Bíblica Dominical (EBD) é o departamento de ensino bíblico da nossa igreja, com excelentes professores dedicados a transmitir o conhecimento das Escrituras de forma clara e inspiradora.
                                </p>
                                <p className="mt-4">
                                    Queremos proporcionar um aprendizado profundo e transformador da Palavra de Deus, com turmas organizadas por diferentes faixas etárias e categorias, para que todos possam crescer na fé e entender melhor os ensinamentos de Cristo.
                                </p>
                                <p className="mt-4">
                                    Através do estudo bíblico, debates e momentos de reflexão, a EBD oferece um ambiente acolhedor onde cada aluno é incentivado a fazer perguntas, compartilhar suas experiências e fortalecer seu relacionamento com Deus. A EBD é mais do que uma escola; é uma comunidade de aprendizado e fé que cresce junta.
                                </p>
                                
                                {/* Botão do Instagram */}
                                <div className="mt-4 flex items-center space-x-2">
                                    <a
                                        href="https://www.instagram.com/ebdadmadureirapna2021/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.8.2 4.9.3 4.2.5c-1 .2-1.9.6-2.6 1.3-.7.7-1.1 1.6-1.3 2.6-.2.7-.3 1.6-.4 2.8C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.2.2 2.1.4 2.8.2 1 .6 1.9 1.3 2.6.7.7 1.6 1.1 2.6 1.3.7.2 1.6.3 2.8.4 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.2-.1 2.1-.2 2.8-.4 1-.2 1.9-.6 2.6-1.3.7-.7 1.1-1.6 1.3-2.6.2-.7.3-1.6.4-2.8.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.2-.2-2.1-.4-2.8-.2-1-.6-1.9-1.3-2.6-.7-.7-1.6-1.1-2.6-1.3-.7-.2-1.6-.3-2.8-.4C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm6.8-10.6c-.8 0-1.5-.7-1.5-1.5S18 2.5 18.8 2.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
                                        </svg>
                                        Siga nosso Instagram
                                    </a>                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-t border-gray-300" />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                        <video
                            src="/img/departamentos/ebd/video_1.mp4"
                            className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                            muted
                            loop
                            autoPlay
                            onClick={() => openModal(<video src="/img/departamentos/ebd/video_1.mp4" className="w-full h-auto" controls />)}
                        />
                        <img
                            src="/img/departamentos/ebd/image_1.jpg"
                            alt="Imagem 2"
                            className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                            onClick={() => openModal(<img src="/img/departamentos/ebd/image_1.jpg" alt="Imagem 2" className="w-full h-auto" />)}
                        />
                        <video
                            src="/img/departamentos/ebd/video_2.mp4"
                            className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                            muted
                            loop
                            autoPlay
                            onClick={() => openModal(<video src="/img/departamentos/ebd/video_2.mp4" className="w-full h-auto" controls />)}
                        />
                        <video
                            src="/img/departamentos/ebd/video_3.mp4"
                            className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                            muted
                            loop
                            autoPlay
                            onClick={() => openModal(<video src="/img/departamentos/ebd/video_3.mp4" className="w-full h-auto" controls />)}
                        />
                        <video
                            src="/img/departamentos/ebd/video_4.mp4"
                            className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                            muted
                            loop
                            autoPlay
                            onClick={() => openModal(<video src="/img/departamentos/ebd/video_4.mp4" className="w-full h-auto" controls />)}
                        />
                        <img
                            src="/img/departamentos/ebd/image_2.jpg"
                            alt="Imagem 2"
                            className="w-full h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
                            onClick={() => openModal(<img src="/img/departamentos/ebd/image_2.jpg" alt="Imagem 2" className="w-full h-auto" />)}
                        />
                    </div>
                </div>
            </section>
            <OpenMidia content={modalContent} isOpen={isModalOpen} onClose={closeModal} />
        </main>
    );
}

export default EBD;