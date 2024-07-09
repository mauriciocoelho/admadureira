import Image from 'next/image';

const DizimosOfertas = () => {
    return (
        <main className="relative">
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Dizimos e Ofertas</h2>
                    <div className="mt-10 flex justify-center">
                        <div className="flex flex-col items-center text-center">
                            
                            <p className="mt-4 text-lg text-gray-700">
                                Banco do Brasil
                            </p>
                            <p className="text-md text-gray-700">
                                Agência: <b>1117-7</b>
                            </p>
                            <p className="text-md text-gray-700">
                                C/C: <b>36368-5</b>
                            </p>
                            <p className="text-md text-gray-700">
                                PIX: <b>01.231.182/0001-74 (CNPJ)</b>
                            </p>
                            <br></br>
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
        </main>
    );
}

DizimosOfertas.getInitialProps = async () => {
    return { title: "Dízimos e Ofertas" };
};


export default DizimosOfertas;
