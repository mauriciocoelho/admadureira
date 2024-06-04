import Image from 'next/image';

const Ofertas = () => {
    return (
        <section className="bg-white py-12" id="cta-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Ofertas</h2>
                <div className="mt-10 flex justify-center">
                    <div className="flex flex-col items-center text-center">
                        
                        <p className="mt-4 text-lg text-gray-700">
                            Banco do Brasil
                        </p>
                        <p className="text-md text-gray-700">
                            Agência: 1117-7
                        </p>
                        <p className="text-md text-gray-700">
                            C/C: 
                        </p>
                        <p className="text-md text-gray-700">
                            PIX
                        </p>
                        <Image 
                            src="/img/qrcode-pix.png" 
                            alt="QR Code Pix" 
                            width={200} 
                            height={200} 
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ofertas;
