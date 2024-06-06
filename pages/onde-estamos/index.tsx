import React from 'react';
import Image from "next/image";

const OndeEstamos = () => {
    
    const locations = [
        { name: 'Matriz', imgSrc: '/img/congregacao/matriz.png', link: 'https://www.google.com/maps/@-10.7064984,-48.4070015,3a,86.4y,126.15h,86.3t/data=!3m6!1e1!3m4!1sdQNbF1hGrbpMQ7b9YJUYGQ!2e0!7i16384!8i8192?coh=205409&entry=ttu' },
        { name: 'Betesda', imgSrc: 'betesda.png' },
        { name: 'Boas Novas', imgSrc: '/img/congregacao/boas_novas.png', link: 'https://www.google.com/maps/@-10.73154,-48.3959865,3a,75y,253.73h,83.28t/data=!3m6!1e1!3m4!1s-WZTs6A99DxkQB0MvHv6bQ!2e0!7i16384!8i8192?coh=205409&entry=ttu' },
        { name: 'Fama', imgSrc: '/img/congregacao/fama.png', link: 'https://www.google.com/maps/@-10.7228636,-48.3935324,3a,84.4y,103.12h,93.7t/data=!3m6!1e1!3m4!1sLmGihMGzoYDpXN-ge8wlbQ!2e0!7i16384!8i8192?coh=205409&entry=ttu' },
        { name: 'Familia Feliz', imgSrc: '' },
        { name: 'Filadélfia', imgSrc: '/img/congregacao/filadelfia.png' },
        { name: 'Genesaré', imgSrc: '/img/congregacao/genesare.png', link: 'https://www.google.com/maps/place/Nova+Capital,+Porto+Nacional+-+TO,+77500-000/@-10.6612033,-48.4042269,265m/data=!3m1!1e3!4m6!3m5!1s0x933b7333a4bc547f:0x9ecdee2d79a11e46!8m2!3d-10.6852943!4d-48.401314!16s%2Fg%2F1ymwrmpjb?entry=ttu' },
        { name: 'Imperial', imgSrc: '/img/congregacao/imperial.png', link: 'https://www.google.com/maps/@-10.7360586,-48.4023884,3a,75y,79.96h,94.52t/data=!3m6!1e1!3m4!1sF-1RR0SG8m-QGEUdlpHiag!2e0!7i13312!8i6656?coh=205409&entry=ttu' },
        { name: 'Jardim América', imgSrc: '', link: 'https://www.google.com/maps/@-10.6964346,-48.3979808,3a,75y,340.74h,76.35t/data=!3m6!1e1!3m4!1scLEodbxyETierUmbMj4KiA!2e0!7i13312!8i6656?coh=205409&entry=ttu' },
        { name: 'Pentecostes', imgSrc: '/img/congregacao/pentecostes.png', link: 'https://www.google.com/maps/@-10.7325103,-48.386455,3a,75y,121.39h,78.65t/data=!3m6!1e1!3m4!1si1a-tKpiWkVC6pF5kaCllw!2e0!7i16384!8i8192?coh=205409&entry=ttu' },
        { name: 'Shekinah', imgSrc: '' },
        { name: 'Maranata', imgSrc: '/img/congregacao/maranata.png', link: 'https://www.google.com/maps/@-10.7277005,-48.411361,3a,90y,239.73h,88.93t/data=!3m6!1e1!3m4!1ses7yBcCcIhqJxwvP9DhUWQ!2e0!7i13312!8i6656?coh=205409&entry=ttu' },
        { name: 'Monte Carmelo', imgSrc: '/img/congregacao/monte_carmelo.png', link: 'https://www.google.com/maps/@-10.762821,-48.1106876,3a,75y,18.05h,83.72t/data=!3m6!1e1!3m4!1syVyJlWhWYIfEFglQpMbEKw!2e0!7i16384!8i8192?coh=205409&entry=ttu' },
        { name: 'Monte Sião', imgSrc: '' },
        { name: 'Nova Canaãa', imgSrc: '/img/congregacao/nova_canaa.png', link: 'https://www.google.com/maps/@-10.6762242,-48.4088893,3a,75y,272.97h,80.78t/data=!3m6!1e1!3m4!1scmOcXegh3-Pg1zrko8lE-w!2e0!7i16384!8i8192?coh=205409&entry=ttu' },
        { name: 'Nova Jeruzalém', imgSrc: '/img/congregacao/nova_jerusalem.png', link: 'https://www.google.com/maps/@-10.6775454,-48.3979944,3a,75y,273.5h,85.07t/data=!3m6!1e1!3m4!1sb5umpqHzY9dQUDB5S62kgA!2e0!7i13312!8i6656?coh=205409&entry=ttu' },
        { name: 'Vila Nova', imgSrc: '/img/congregacao/vila_nova.png', link: 'https://www.google.com/maps/@-10.6883695,-48.406503,3a,75y,290.12h,85.22t/data=!3m6!1e1!3m4!1sC1gFuwvsE2Ppxp4j0DNAYA!2e0!7i16384!8i8192?coh=205409&entry=ttu' },
    ];

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Onde Estamos</h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center ">
                    {locations.map((location, index) => (
                        <a 
                            key={index} 
                            href={location.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative block transform transition-transform duration-300 hover:scale-105" 
                        >
                            <Image
                                src={location.imgSrc}
                                alt={location.name}
                                width={300}
                                height={200}
                                className="object-cover rounded-lg shadow-lg"
                            />
                            <p className="mt-2 text-gray-800 font-semibold text-center">{location.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OndeEstamos;
