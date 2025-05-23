
export default function Categories() {
    return (
        <section className="container mx-auto flex flex-col items-center justify-center gap-4 pt-10 px-4 md:px-6 md:h-130 ">
            <h1 className="text-4xl font-bold text-center text-[#E6B902]">Por que nos escolher?</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 p-4 ">
                <div className="flex items-center justify-center gap-4 bg-white p-4 rounded-sm shadow-md hover:shadow-lg transition-shadow">
                    <img src="worker.svg" alt="Icone de engenheiro" className="w-15"/>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-black text-lg">Equipe Especializada</h2>
                        <p className="text-md text-neutral-500">Profissionais qualificados, comprometidos com a excelência em cada etapa do seu projeto.</p>
                    </div>                    
                </div>
                <div className="flex items-center justify-center gap-4 bg-white p-4 rounded-sm shadow-md hover:shadow-lg transition-shadow">
                    <img src="guaranteed.svg" alt="Icone de engenheiro" className="w-15"/>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-black text-lg">Trabalho de Qualidade</h2>
                        <p className="text-md text-neutral-500">Profissionais qualificados, comprometidos com a excelência em cada etapa do seu projeto.</p>
                    </div>                    
                </div>
                <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow">
                    <img src="quality.svg" alt="Icone de engenheiro" className="w-15"/>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-black text-lg">Atendimento personalizado</h2>
                        <p className="text-md text-neutral-500">Profissionais qualificados, comprometidos com a excelência em cada etapa do seu projeto.</p>
                    </div>                    
                </div>
            </div>
        </section>
    )
}