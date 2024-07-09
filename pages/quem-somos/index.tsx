const QuemSomos = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Quem Somos</h2>
                <div className="mt-10 grid grid-cols-1">
                    <div className="col-span-1">
                        <p className="text-lg text-gray-700 leading-8">
                            Somos a Assembleia de Deus de Madureira localizada em Porto Nacional, sob a direção do Pastor Presidente Walter Luis Vasconcelos e do Vice-Presidente Wasgner Moura Lima. Fundada em 1900, nossa igreja tem uma longa história de fé, serviço e dedicação à comunidade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

QuemSomos.getInitialProps = async () => {
    return { title: "Quem Somos" };
};

export default QuemSomos;

