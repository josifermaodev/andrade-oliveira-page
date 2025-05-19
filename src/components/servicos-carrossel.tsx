// components/ServiceCarousel.tsx
"use client";
import { ChevronLeft, ChevronRight, Clock, MoveRightIcon } from "lucide-react";
import { services } from "../lib/service";
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link";



export const ServiceCarousel = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  })


  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="w-full overflow-x-auto my-10 ">
        <div className="container mx-auto px-4 ">
            <div>
                <h2 className="text-4xl mb-6 font-bold text-[#E6B902] border-l-4 border-[#1d1d1d] pl-4">Serviços</h2>
                <p className="text-gray-400 mb-6">A Andrade Oliveira é uma empresa especializada em estruturas de concreto, oferecendo serviços de alta qualidade e segurança para atender às necessidades dos nossos clientes.</p>
            </div>

           
            <div className="relative">

                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex'>
                    {services.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3 ">
                        <article className="bg-[#1d1d1d] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                            <div className='flex-1 flex items-start justify-between'>

                            <div className='flex flex-col gap-3'>
                                <img src={item.image} alt={item.title} className='w-full h-[400px] object-cover rounded-xl'></img>
                                <div>
                                <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                <p className='text-gray-400 text-sm select-none'>
                                    {item.description}
                                </p>
                                </div>
                            </div>

                            </div>

                            <div className='border-t border-gray-700 pt-4 flex items-center justify-end'>
                            <Link
                                href={"/services"}
                                className='flex items-center justify-center gap-2 hover:bg-[#E6B902] px-4 py-1 rounded-md duration-300'
                            >
                                <MoveRightIcon className='w-5 h-5'/>
                                Ver mais
                            </Link>

                            </div>

                        </article>
                        </div>
                    ))}
                    </div>
                </div>

                <button
                    className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                    onClick={scrollPrev}
                >
                    <ChevronLeft className='w-6 h-6 text-gray-600' />
                </button>

                <button
                    className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                    onClick={scrollNext}
                >
                    <ChevronRight className='w-6 h-6 text-gray-600' />
                </button>

            </div>
        </div>
    </section>
  );
};
