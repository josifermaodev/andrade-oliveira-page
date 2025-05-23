'use client';

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
    return(
        <div className="flex flex-col items-center text-center">
            <p className="text-lg text-gray-600 mb-8">
                Mais do que entregar projetos, construímos parcerias duradouras e
                resultados que fazem a diferença.
            </p>
            <Link href="/contact" className="bg-[#0f0f0f] py-5 px-6 hover:bg-[#E6B902] text-white hover:text-black  rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 ">
                <span className="text-lg">Conheça nossos Serviços</span>
                <ChevronRight className="transition-transform duration-300 " />
            </Link>
        </div>
    )
    
}