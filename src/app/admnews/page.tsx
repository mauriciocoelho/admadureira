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
                        <Link href="/admnews/conferencia-da-familia" className="block">
                            <div className="flex space-x-4">
                                <div className="w-1/3">
                                <Image
                                    src="/midia/admnews/468143562_1243384086874264_3644392121757687463_n_1080.jpg"
                                    alt="Conferência da Família"
                                    width={300}
                                    height={200}
                                    className="rounded-lg w-full h-48 object-cover"
                                />

                                </div>
                                <div className="w-2/3">
                                    <h3 className="text-xl font-bold">Conferência da Família</h3>
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <span className="mr-2">Ev. Eduardo Serpa</span>
                                        <span>📅 24 de novembro de 2024</span>
                                    </p>
                                    <p className="text-gray-700 mt-2">
                                        Neste final de semana, nos dias 24 e 25 de novembro, tivemos a alegria de realizar a nossa grande Conferência da Família. O evento contou com a presença do Pr. Elidiano Ribeiro, que trouxe uma poderosa ministração da Palavra de Deus, abençoando e edificando vidas e lares.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/admnews/congresso-jovens" className="block">
                            <div className="flex space-x-4">
                                <div className="w-1/3">
                                    <Image
                                        src="/midia/admnews/467649457_18055073281917705_8731660460177381492_n_1080.jpg"
                                        alt="Conferência da Família"
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="w-2/3">
                                    <h3 className="text-xl font-bold">Congresso Jovens</h3>
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <span className="mr-2">Eduarda Serpa</span>
                                        <span>📅 20 de novembro de 2024</span>
                                    </p>
                                    <p className="text-gray-700 mt-2">
                                        O que vivemos ontem no domingo de manhã foi simplesmente sobrenatural! Fomos desafiados e impulsionados a buscar o PROXIMO NÍVEL de Deus todos os dias de nossas vidas, com a certeza de que Ele sempre tem o melhor para nós!
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/admnews/conferencia-familia" className="block">
                            <div className="flex space-x-4">
                                <div className="w-1/3">
                                    <Image
                                        src="/midia/admnews/banner_deafa.jpeg"
                                        alt="Conferência da Família"
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full h-48 object-cover"
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
