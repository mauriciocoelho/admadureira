import Image from "next/image";

const LoadSpinner = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="relative w-32 h-32">
                <div className="absolute inset-4">
                    <Image
                        src="/img/barco_ad_madureira_color.png"
                        alt="Loading Spinner"
                        layout="fill"
                        objectFit="contain"
                        className="z-10"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-4 border-t-transparent border-orange-500 rounded-full animate-spin-slow"></div>
            </div>
            <p className="mt-4 text-lg text-orange-600 animate-blink">Carregando...</p>
        <style jsx global>{`
            @keyframes spin-slow {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
            }

            .animate-spin-slow {
            animation: spin-slow 2s linear infinite;
            }

            @keyframes blink {
            0%,
            100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            }

            .animate-blink {
            animation: blink 1.5s linear infinite;
            }
        `}</style>
        </div>
    );
};

export default LoadSpinner;
