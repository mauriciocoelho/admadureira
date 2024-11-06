import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AdmNews = () => {
    return (
        <main className="relative">
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center space-x-4 mb-12">
                        <h2 className="text-3xl text-black-600 font-poppins font-semibold">Notícias AD Madureira</h2>
                    </div>
                    
                    {/* Lista de Notícias */}
                    <div className="space-y-10">
                        {/* Notícia 1 */}
                        <Link href="/admnews/conferencia-familia" className="block">
                            <div className="flex space-x-4">
                                <div className="w-1/3">
                                    <Image
                                        src="/img/banner_deafa.png"
                                        alt="Conferência da Família"
                                        width={300}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="w-2/3">
                                    <h3 className="text-xl font-bold">Conferência da Família</h3>
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <span className="mr-2">Ev. Eduardo Serpa</span>
                                        <span>📅 5 de novembro de 2024</span>
                                    </p>
                                    <p className="text-gray-700 mt-2">
                                        A Conferência da Família será uma oportunidade de crescimento e renovação espiritual. Com o tema "Perdidos dentro de casa? Deus pode transformar famílias disfuncionais. LC 15:11-32", o evento busca fortalecer os laços familiares e proporcionar momentos de edificação e comunhão. Venha e traga sua família!
                                    </p>
                                </div>
                            </div>
                        </Link>

                        
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AdmNews;
