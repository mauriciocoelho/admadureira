import PesquisarServico from "@/components/PesquisarServico";

const Servico = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-black-600 text-center font-poppins font-semibold">Serviços</h2>
            </div>
            <div className="mt-10 grid grid-cols-1">
                <div className="col-span-1">
                    <PesquisarServico />
                </div>
            </div>
        </section>
    );
}

export default Servico;

