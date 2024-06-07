import LoadSpinner from "@/components/LoadSpinner";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface IFeedItem {
    media_type: string;
    id: string;
    media_url: string;
    permalink: string;
}

const Home = () => {
    const [feedList, setFeedList] = useState<IFeedItem[]>([]);
    const [loading, setLoading] = useState(true);

    async function getInstaFeed() {
        const accessToken = 'IGQWRNR25wazgzM2NkQnBuWkhfUW5qSW11eHpkSkt6X0ptTHhVZA2xnLWNsUUlhZAmpYVG5RY2xmU1M4NjlWQ3pXa1NJWlBPWGl4VHF6U1lHTEpZAc2lURXB0T0hGTHZA1ZA0ZAUYWhxU0htR3VsRUY1QkNINUJhSHJQbDAZD';
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
                    <div className="carousel-container">
                        <Carousel
                            showArrows={true}
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            interval={3000}
                            className="carousel"
                        >
                            <div className="relative carousel-slide">
                                <Image
                                    src="/img/pr_pra.png"
                                    alt="culto ensino"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-black p-8 text-container">
                                    <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">Pastor Walter Luiz</h1>
                                    <p className="text-white text-lg mb-6 animate-slide-up text-justify">
                                        Tem um estilo bem alegre, sincero, objetivo e inquisitivo são <br />
                                        características que marcam a sua trajetória ao longo <br />
                                        de vários anos como defensor da fé cristã.
                                    </p>
                                </div>
                            </div>
                            <div className="relative carousel-slide">
                                <Image
                                    src="/img/culto_infantil.png"
                                    alt="culto infantil"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-black p-8 text-container">
                                    <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">Culto Infantil</h1>
                                    <p className="text-white text-lg mb-6 animate-slide-up text-justify">
                                        Traga seus filhos para uma experiência inesquecível no culto infantil. <br />
                                        Um ambiente de aprendizado, diversão e fé.
                                    </p>
                                </div>
                            </div>
                            <div className="relative carousel-slide">
                                <Image
                                    src="/img/culto_domingo.png"
                                    alt="culto domingo"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-black p-8 text-container">
                                    <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">Culto Domingo</h1>
                                    <p className="text-white text-lg mb-6 animate-slide-up text-justify">
                                        Venha participar do nosso culto dominical, uma oportunidade para <br />
                                        renovar sua fé e compartilhar momentos especiais conosco.
                                    </p>
                                </div>
                            </div>
                            <div className="relative carousel-slide">
                                <Image
                                    src="/img/cibe.png"
                                    alt="culto mulheres"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-black p-8 text-container">
                                    <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">Culto da CIBE</h1>
                                    <p className="text-white text-lg mb-6 animate-slide-up text-justify">
                                        Participe do nosso culto especial para as mulheres, promovido pela CIBE. <br />
                                        Um momento de comunhão, crescimento espiritual e união entre as irmãs.
                                    </p>
                                </div>
                            </div>
                            <div className="relative carousel-slide">
                                <Image
                                    src="/img/jovens.png"
                                    alt="culto jovens"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-black p-8 text-container">
                                    <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">Culto dos Jovens</h1>
                                    <p className="text-white text-lg mb-6 animate-slide-up text-justify">
                                        Junte-se a nós no culto dos jovens aos sábados, onde fé, amizade e diversão se encontram. <br />
                                        Uma oportunidade para os jovens se conectarem e crescerem espiritualmente.
                                    </p>
                                </div>
                            </div>
                            <div className="relative carousel-slide">
                                <Image
                                    src="/img/familia.png"
                                    alt="culto familia"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-black p-8 text-container">
                                    <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">Culto da Família</h1>
                                    <p className="text-white text-lg mb-6 animate-slide-up text-justify">
                                        Venha participar do nosso culto da família, um momento de união, amor e fortalecimento dos laços familiares. <br />
                                        Um tempo especial para todos os membros da família se conectarem e crescerem juntos.
                                    </p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                )}
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

                    .carousel-container {
                        position: relative;
                        overflow: hidden;
                    }

                    .carousel {
                        height: 85vh;
                        position: relative;
                    }

                    .carousel-slide {
                        height: 85vh;
                    }

                    .text-container {
                        padding-bottom: 20px;
                    }

                    @media (max-width: 768px) {
                        .carousel {
                            height: 70vh;
                        }

                        .carousel-slide {
                            height: 70vh;
                        }
                    }
                `}</style>
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
                                            <img src={item.media_url} alt="Instagram Feed" className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
                                        ) : (
                                            <video controls className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105">
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
                            <div className="mt-10">
                                {cultos.map((culto, index) => (
                                    <div key={index} className="border-b border-gray-200 py-4">
                                        <button
                                            className="flex justify-between items-center w-full text-left text-gray-700 focus:outline-none"
                                            onClick={() => togglecultos(index)}
                                        >
                                            <span className="text-lg font-medium"><b>{culto.diaSemana}</b></span>
                                            <span className="text-2xl">
                                                {openIndex === index ? '-' : '+'}
                                            </span>
                                        </button>
                                        {openIndex === index && (
                                            <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: culto.descricaoCulto }}></p>
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
