"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LoadSpinner from "@/components/LoadSpinner";
import TypingEffect from "@/components/TypingEffect";
import Link from "next/link";

interface IFeedItem {
    media_type: string;
    id: string;
    media_url: string;
    permalink: string;
}

interface Versiculo {
    text: string;
    reference: string;
}

export default function Home() {
    const [feedList, setFeedList] = useState<IFeedItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [versiculos, setVersiculos] = useState<Versiculo[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(3);

    async function getInstaFeed() {
        try {
            const accessToken = 'IGQWROX2lzdEhOR0hBaDc5NmxSbU9kc1ZAIOEFOMG1oTlV2XzZAfaEtocWY2Uk45SHZATcnU5WldrbWxybEpsWHJqUnNYS3ZAhd1gxQm9NTFZAvTC1JRUk1UlNmMm9tUVhFSXAyYXhDZAFhHN3hhVUZAIeGxJaWxtTEwyNlkZD';
            const fields = "media_url,media_type,permalink";
            const response = await axios.get(
                `https://graph.instagram.com/me/media?access_token=${accessToken}&fields=${fields}`
            );
            setFeedList(response.data.data || []);
        } catch (error) {
            console.error("Erro ao buscar feed do Instagram:", error);
            setFeedList([]);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            //getInstaFeed();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);    

    const togglecultos = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const cultos = [
        {
          diaSemana: 'Terça-feira',
          descricaoCulto: 'Culto de Ensino',
        },
        {
          diaSemana: 'Quinta-feira',
          descricaoCulto: 'Culto da CIBE (Mulheres)',
        },
        {
          diaSemana: 'Sábado',
          descricaoCulto: 'Culto dos Jovens',
        },
        {
          diaSemana: 'Domingo',
          descricaoCulto: 'Manhã: <b>Escola Biblica Dominical (EBD)<br></b> Noite: <b>Culto Evangelistico</b>',
        },
    ];    

    useEffect(() => {
        const fetchVersiculos = async () => {
            try {
                const response = await axios.get('/api/versiculos');
                setVersiculos(response.data);
            } catch (error) {
                console.error('Error fetching versiculos:', error);
            }
        };
    
        fetchVersiculos();
    }, []);

    return (
        <>  
            {/* Carousel */}  
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
                            interval={6000}
                            className="carousel"
                        >
                            <div className="relative carousel-slide h-[80vh]"> 
                                <Image
                                    src="/img/banner_deafa.png"
                                    alt="Conferência da Família"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="object-cover"
                                    style={{ objectPosition: 'top' }} // Mantém o foco na parte superior da imagem
                                />
                                <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-black p-8 text-container">
                                    <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">Conferência da Família</h1>
                                    <p className="text-white text-lg mb-4 animate-slide-up text-justify">
                                        Participe da nossa Conferência da Família, nos dias <strong>23 e 24 de Novembro</strong>, às <strong>19h</strong> no Templo Matriz. <br />
                                        Tema: "Perdidos dentro de casa? Deus pode transformar famílias disfuncionais." <br />
                                        Venha e traga sua família para momentos de renovação e esperança.
                                    </p>
                                    <a href="/admnews/conferencia-familia" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 animate-slide-up">
                                        Saiba Mais →
                                    </a>
                                </div>
                            </div>


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
                    {/*<section className="bg-slate-50 py-20" id="bemVindo">
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h3 className="text-4xl font-semibold uppercase mb-2 slideIn">Aqui, você é sempre bem-vindo(a)!</h3>
                            <h2 className="text-xl font-bold mb-4 slideIn">Onde quer que você esteja na vida, você tem um propósito. 
                            Nossos pastores e toda a equipe estão aqui para ajudá-lo a se tornar a pessoa que Deus planejou!</h2>
                        </div>
                        <style jsx>{`
                            .slideIn {
                                opacity: 0;
                                transform: translateX(-100%);
                                animation: slideInAnimation 4s forwards;
                            }

                            @keyframes slideInAnimation {
                                from {
                                    opacity: 0;
                                    transform: translateX(-100%);
                                }
                                to {
                                    opacity: 1;
                                    transform: translateX(0);
                                }
                            }
                        `}</style>
                    </section> */}

                    {/* Versiculos */}  
                    <section className="bg-slate-50 py-20" id="VerciculoDia">
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-baseline slideIn">
                            <h3 className="text-4xl font-extralight uppercase mb-2">
                                Versículos do <TypingEffect className="font-semibold" text="Dia" />
                            </h3>
                                <img 
                                    src="/img/biblia.webp" 
                                    alt="Bíblia"
                                    className="w-10 h-10 ml-3" 
                                />
                            </div>
                            {versiculos.map((versiculo, index) => (
                                <div key={index} className="mb-4">
                                    <p className="text-lg">"{versiculo.text}"</p>
                                    <p className="text-sm text-orange-500">{versiculo.reference}</p>
                                </div>
                            ))}
                            {/* Botão Devocional Diário */}
                            {/*<div className="mt-8 flex">
                                <a
                                    href="/devocional-diario"
                                    className="px-6 py-3 bg-[#FF6F31] text-white rounded-lg shadow hover:bg-orange-600 transition duration-300"
                                >
                                    Devocional Diário
                                </a>
                            </div>*/}
                        </div>
                    </section>

                    {/* Instagram*/}       
                    {/*<section className="bg-white py-12" id="FeedInstagram">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Instagram</h2>
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {feedList.slice(0, 8).map(item => (
                                    <a key={item.id} href={item.permalink} target='_blank' rel='noopener noreferrer' className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-500 hover:translate-x-2">
                                        {item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM" ? (
                                            <img src={item.media_url} alt="Instagram Feed" className="w-full h-full object-cover" />
                                        ) : (
                                            <video controls preload="metadata" className="w-full h-full object-cover">
                                                <source src={item.media_url} />
                                            </video>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <style jsx>{`
                            .transition-shadow {
                                transition: box-shadow 0.3s ease;
                            }

                            .transition-transform {
                                transition: transform 0.5s ease;
                            }

                            .hover\\:shadow-xl:hover {
                                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                            }

                            .hover\\:translate-x-2:hover {
                                transform: translateX(10px);
                            }
                        `}</style>
                    </section> */}

                    {/* AD NEWS */}
                    {/* <section
                        className="relative bg-cover bg-center py-20 text-white text-center"
                        id="youtube"
                        style={{ backgroundImage: "url('/img/banner_youtube.png')" }}
                    >
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                            <h2 className="text-3xl text-white text-center font-poppins font-semibold mb-10">AD News</h2>
    
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            
                            
                            <Link href="/admnews/conferencia-familia" className="block bg-white text-black rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/img/banner_deafa.png"
                                    alt="Conferência da Família"
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">Conferência da Família - Tema e Propósito</h3>
                                    <p className="text-sm text-gray-500">📅 5 de novembro de 2024</p>
                                    <p className="text-gray-700 mt-2">
                                        A Conferência da Família será uma oportunidade única de crescimento e renovação espiritual. Com o tema "Perdidos dentro de casa?", o evento busca fortalecer os laços familiares e proporcionar momentos de edificação e comunhão. Venha e traga sua família!
                                    </p>
                                    <p className="text-blue-600 mt-2 font-semibold">SAIBA MAIS »</p>
                                </div>
                            </Link>

                            
                            <Link href="/admnews/congresso-jovens" className="block bg-white text-black rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/img/banner_deafa.png"
                                    alt="Congresso de Jovens"
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">Congresso Jovens</h3>
                                    <p className="text-sm text-gray-500">📅 5 de novembro de 2024</p>
                                    <p className="text-gray-700 mt-2">
                                        O Congresso Jovens é um evento que proporciona momentos de reflexão, crescimento espiritual e comunhão entre jovens de várias localidades. Participe e seja renovado em espírito!
                                    </p>
                                    <p className="text-blue-600 mt-2 font-semibold">SAIBA MAIS »</p>
                                </div>
                            </Link>

                            </div>


                            <div className="mt-10">
                                <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
                                    Ver mais notícias →
                                </button>
                            </div>
                        </div>
                    </section> */}
                    
                    {/* YouTube */}
                    <section className="relative bg-gradient-to-r from-orange-950 to-orange-800 py-20 text-white text-center" id="youtube">
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                            <div className="mb-6">
                                <p className="text-sm uppercase">Acesse o canal da AD Madureira no Youtube</p>
                                <h2 className="text-3xl font-bold">Acompanhe os cultos da AD Madureira no nosso canal do Youtube</h2>
                            </div>
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="mb-8 md:mb-0 md:mr-8">
                                    <iframe
                                        className="responsiveIframe"
                                        src="https://www.youtube.com/embed/83YoBLn7Nss"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            <div>
                                <iframe
                                    className="responsiveIframe"
                                    src="https://www.youtube.com/embed/uc7yymDFIcI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            </div>
                            <div className="mt-8">
                                <a
                                    href="https://www.youtube.com/@admadureira_portonacional"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5 mr-2"
                                    >
                                        <path d="M10 15l5-3-5-3v6z" />
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                    Se inscreva agora no Youtube
                                </a>
                            </div>
                        </div>
                        <style jsx>{`
                            .responsiveIframe {
                                width: 100%;
                                height: 315px;
                            }

                            @media (min-width: 768px) {
                                .responsiveIframe {
                                    width: 560px;
                                }
                            }
                        `}</style>
                    </section>

                    {/* Cultos */}
                    <section className="bg-slate-50 py-20" id="cultos">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Nossos Cultos</h2>
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
                    
                    {/* Localização */}
                    <section className="bg-white py-12" id="mapa">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Nossa Localização</h2>
                            <div className="mt-10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.982953097787!2d-48.40688928467022!3d-10.706563792354843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b733039fb0db9%3A0x44f21abef7fdfbb6!2sIgreja%20Assembl%C3%A9ia%20De%20Deus%20Minist%C3%A9rio%20Madureira%20-%20matriz!5e0!3m2!1spt-BR!2sbr!4v1622765071290!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}