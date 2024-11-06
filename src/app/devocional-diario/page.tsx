"use client";

import { useEffect, useState } from 'react';

interface Devocional {
    title: string;
    verse: string;
    reference: string;
    text: string;
}

const DevocionalDiario = () => {
    const [devocionalDiario, setDevocionalDiario] = useState<Devocional[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/devocional');
                const data = await response.json();
                setDevocionalDiario(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="relative">
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Devocional Diário</h2>
                    <div className="mt-10 flex justify-center">
                        <div className="flex flex-col items-center text-center">
                            {devocionalDiario.map((devocional, index) => (
                                <div key={index} className="mb-8 p-4 border border-gray-300 rounded-lg max-w-md">
                                    <h3 className="text-xl font-semibold mb-2">{devocional.title}</h3>
                                    <p className="text-lg italic text-gray-700">"{devocional.verse}"</p>
                                    <a
                                        href={devocional.reference}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline mb-4 block"
                                    >
                                        {devocional.reference}
                                    </a>
                                    <p className="text-md text-gray-800">{devocional.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DevocionalDiario;
