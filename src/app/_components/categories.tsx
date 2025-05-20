

export default function Categories() {
    return (
        <section className="container mx-auto flex flex-col items-center justify-center gap-4 pt-10 px-4 md:px-6">
            <h1 className="text-2xl font-bold text-center text-[#E6B902]">Por que nos escolher?</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 p-4 ">
                <div className="flex items-center justify-center gap-4 p-4">
                    <img src="worker.svg" alt="Icone de engenheiro" className="w-15"/>
                    <div>
                        <h2 className="font-bold text-[#E6B902]">Equipe Especializada</h2>
                        <p className="text-xs">Profissionais qualificados, comprometidos com a excelência em cada etapa do seu projeto.</p>
                    </div>                    
                </div>
                <div className="flex items-center justify-center gap-4 p-4">
                    <img src="guaranteed.svg" alt="Icone de engenheiro" className="w-15"/>
                    <div>
                        <h2 className="font-bold text-[#E6B902]">Trabalho de Qualidade</h2>
                        <p className="text-xs">Profissionais qualificados, comprometidos com a excelência em cada etapa do seu projeto.</p>
                    </div>                    
                </div>
                <div className="flex items-center justify-center gap-4 p-4">
                    <img src="quality.svg" alt="Icone de engenheiro" className="w-15"/>
                    <div>
                        <h2 className="font-bold text-[#E6B902]">Atendimento personalizado</h2>
                        <p className="text-xs">Profissionais qualificados, comprometidos com a excelência em cada etapa do seu projeto.</p>
                    </div>                    
                </div>
            </div>
        </section>
    )
}