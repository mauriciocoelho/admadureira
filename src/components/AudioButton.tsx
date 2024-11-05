import { useState, useRef } from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import Image from 'next/image';

const AudioButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleAudioToggle = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={handleAudioToggle}
                className="flex items-center justify-center sm:space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none"
            >
                <span className="hidden sm:inline">{isPlaying ? 'PARAR DE OUVIR' : 'OUÇA AO VIVO'}</span>
                {isPlaying ? <FaPauseCircle className="h-6 w-6" /> : <FaPlayCircle className="h-6 w-6" />}
            </button>
            <audio ref={audioRef} preload="auto" src="https://player.radiopazpalmas.com.br/stream">
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <a href="https://radiopazpalmas.com.br/" target="_blank" rel="noopener noreferrer" className="hidden sm:inline">
                <Image 
                    src="/img/LOGO-RADIO-PAZ-FM-2024.png"
                    alt="PazFM Logo"
                    width={100}
                    height={60}
                    quality={100}
                />
            </a>
        </div>
    );
};

export default AudioButton;
