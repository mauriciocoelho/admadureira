import LoadSpinner from "@/components/LoadSpinner";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IFeedItem {
    media_type: string;
    id: string;
    media_url: string; // Corrigido o tipo de media_url para string
    permalink: string;
}

const Home = () => {
    const [feedList, setFeedList] = useState<IFeedItem[]>([]);
    const [loading, setLoading] = useState(true);

    async function getInstaFeed() {
        const accessToken = 'IGQWROZAjVUZAWhvZA1BhVVZA5R2VVUGlnU1VzNGZAvbnVXVG5PazJHaUtxbWNRSE5qbVNiVHFCb2RBUE5YS2VFWVBDX3Fyd2p6WG5DSjRlUV81ZA0FualRkd21FbngyZAGttVVdrZAHlyUWJBSGdFeHVBS0RYZAnBzdTJpYm8ZD';
        const fields = "media_url,media_type,permalink";
        const response = await fetch(`https://graph.instagram.com/me/media?access_token=${accessToken}&fields=${fields}`);
        const data = await response.json();
        setFeedList(data.data);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            getInstaFeed();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const togglecultos = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const cultos = [
        {
          diaSemana: 'Terça-feira',
          descricaoCulto: 'Culto de Ensino',
        },
        {
          diaSemana: 'Sexta-feira',
          descricaoCulto: 'Culto da CIBE',
        },
        {
          diaSemana: 'Sabado',
          descricaoCulto: 'Culto dos Jovens',
        },
        {
          diaSemana: 'Domingo',
          descricaoCulto: 'Manhã: <b>Escola Biblica Dominical (EBD)</b> Noite: <b>Evangelistico</b>',
        },
    ];

    return (
        <>
            <main className="relative">
                {loading ? (
                    <LoadSpinner />
                ) : (
                    <>
                        <div className="relative h-screen">
                            <Image
                                src="/img/pr_pra.png"
                                alt="culto ensino"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-b from-transparent to-black p-8">
                                <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">Pastor Walter Luiz</h1>
                                <p className="text-white text-lg mb-6 animate-slide-up">
                                Tem um estilo bem alegre, sincero, objetivo e inquisitivo são <br />
                                características que marcam a sua trajetória ao longo <br />
                                de vários anos como defensor da fé cristã.
                                </p>
                            </div>
                        </div>
                        <style jsx>{`
                        .animate-slide-up {
                            animation: slide-up 1s ease-in-out forwards;
                        }

                        @keyframes slide-up {
                            from {
                            transform: translateY(100%);
                            opacity: 0;
                            }
                            to {
                            transform: translateY(0);
                            opacity: 1;
                            }
                        }
                        `}</style>
                    </>
                )}
            </main>
            {!loading && (
                <>
                    {/*<section className="bg-white py-12" id="FeedInstagram">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Instagram</h2>
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {feedList.slice(0, 12).map(item => (
                                <a key={item.id} href={item.permalink} target='_blank' rel='noopener noreferrer' className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    {item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM" ? (
                                    <img src={item.media_url} alt="Instagram Feed" className="w-full h-full object-cover" />
                                    ) : (
                                    <video controls className="w-full h-full object-cover">
                                        <source src={item.media_url} />
                                    </video>
                                    )}
                                </a>
                                ))}
                            </div>
                        </div>
                            </section>*/}

                    <section className="bg-slate-50 py-20" id="cultos">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Nosso Cultos</h2>
                            {/*<p className="mt-4 text-gray-500 text-center">Se não encontrar a resposta abaixo, entre em contato</p>*/}
                            <div className="mt-10">
                                {cultos.map((cultos, index) => (
                                <div key={index} className="border-b border-gray-200 py-4">
                                    <button
                                    className="flex justify-between items-center w-full text-left text-gray-700 focus:outline-none"
                                    onClick={() => togglecultos(index)}
                                    >
                                    <span className="text-lg font-medium"><b>{cultos.diaSemana}</b></span>
                                    <span className="text-2xl">
                                        {openIndex === index ? '-' : '+'}
                                    </span>
                                    </button>
                                    {openIndex === index && (
                                    <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: cultos.descricaoCulto }}></p>
                                    )}
                                </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default Home;
