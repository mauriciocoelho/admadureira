import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ConferenciaFamilia = () => {
    return (
        <main className="relative">
            {/* Banner com Imagem */}
            <section className="relative w-full h-[60vh] overflow-hidden">
                <Link href="/" className="block">
                    <Image
                        src="/img/banner_deafa.png"
                        alt="Conferência da Família"
                        layout="fill"
                        objectFit="contain" // Ajusta a imagem para caber no contêiner sem cortar
                        quality={100}
                        className="object-center"
                    />
                </Link>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    {/*<h2 className="text-4xl font-bold text-white font-poppins">Conferência da Família</h2>*/}
                </div>
            </section>

            {/* Texto Convite abaixo do Banner */}
            <section className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <h3 className="items-center text-center text-2xl text-black-600 font-poppins font-semibold mb-4">
                            Participe da nossa Conferência da Família
                        </h3>
                        <p className="text-lg text-gray-800 max-w-7xl mb-4">
                            A Conferência da Família é uma oportunidade única para fortalecimento e renovação espiritual.
                            Com o tema <b>"Perdidos dentro de casa? Deus pode transformar famílias disfuncionais. LC 15:11-32"</b>, 
                            esse evento oferece momentos de reflexão e cura, ajudando a restaurar lares em amor e unidade. 
                            Participe e descubra o propósito divino para sua família, reforçando os laços que importam.
                        </p>

                        <p className="text-lg text-gray-800 max-w-2xl mb-4">
                            <strong>Data:</strong> 23 e 24 de Novembro <br />
                            <strong>Local:</strong> Templo Matriz<br />
                            <strong>Horário:</strong> 19h<br />
                            <strong>Ministração:</strong> PR. Francisco Miranda | Palmas-TO<br />
                        </p>
                        <p className="text-lg text-gray-800 max-w-7xl">
                            Pedimos a todos que adquiriram a camiseta da conferência que venham vestindo-a para celebrarmos juntos este momento especial de fé e comunhão!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ConferenciaFamilia;
