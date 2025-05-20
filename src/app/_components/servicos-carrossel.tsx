"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MoveRightIcon } from "lucide-react";
import { services } from "../../lib/service";
import Link from "next/link";
import Image from "next/image";

export const ServiceCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1, // Controlamos as colunas com Tailwind
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="w-full py-10">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-start mb-12">
                <h2 className="text-4xl font-bold mb-4 text-[#E6B902] bg-[#0f0f0f] p-4 w-auto">
                    Nossos Serviços
                </h2>
                <p className="text-gray-600">
                    A Andrade Oliveira é uma empresa especializada em estruturas de concreto, oferecendo serviços de alta qualidade e segurança para atender às necessidades dos nossos clientes.
                </p>
            </div>

            <div className="relative">
            
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex">
                    {services.map((item) => (
                        <div
                        key={item.id}
                        className="flex-[0_0_100%] sm:flex-[0_0_50%] xl:flex-[0_0_33.3333%] px-2"
                        >
                            <article className="bg-[#1d1d1d] text-white rounded-2xl p-4 h-full flex flex-col justify-between">
                                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                </div>

                                <div className="flex-1 flex flex-col justify-between mt-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-400 mt-2">
                                        {item.description}
                                        </p>
                                    </div>

                                    <div className="mt-4 border-t border-gray-700 pt-4 flex justify-end hover:text-white">
                                        <Link
                                        href={item.url}
                                        className="flex items-center gap-2 text-sm font-medium hover:bg-[#E6B902] text-[#E6B902] hover:text-white px-4 py-2 rounded-md transition duration-300 "
                                        >
                                            <MoveRightIcon className="w-5 h-5 text-[#E6B902] hover:text-white" />
                                            Ver mais
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                    </div>
                </div>

                
                <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-600 rounded-full shadow-lg w-10 h-10 flex items-center justify-center"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-600 rounded-full shadow-lg w-10 h-10 flex items-center justify-center"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    </section>
  );
};
