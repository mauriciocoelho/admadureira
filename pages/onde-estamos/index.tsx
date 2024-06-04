import Image from "next/image";

const OndeEstamos = () => {
    
    const locations = [
        { name: 'Matriz', imgSrc: '/img/matriz.png', link: 'https://www.google.com/maps/@-10.7064984,-48.4070015,3a,86.4y,126.15h,86.3t/data=!3m6!1e1!3m4!1sdQNbF1hGrbpMQ7b9YJUYGQ!2e0!7i16384!8i8192?coh=205409&entry=ttu' },
        { name: 'Boas Novas', imgSrc: '/img/fama.png' },
        { name: 'Fama', imgSrc: '/img/fama.png' },
        { name: 'Vila Nova', imgSrc: '/img/vila_nova.png' },
        { name: 'Nova Capital', imgSrc: '/img/nova_capital.png' },
        { name: 'Nova Jeruzalém', imgSrc: '/img/nova_jerusalem.png' },
    ];

    return (
        <section className="bg-white py-12" id="cta-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Onde Estamos</h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {locations.map((location, index) => (
                        <a 
                            key={index} 
                            href={location.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative block"
                        >
                            <Image
                                src={location.imgSrc}
                                alt={location.name}
                                width={300}
                                height={200}
                                className="object-cover rounded-lg shadow-lg"
                            />
                            <p className="mt-2 text-gray-800 font-semibold">{location.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OndeEstamos;
