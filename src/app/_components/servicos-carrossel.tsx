"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MoveRightIcon } from "lucide-react";
import { services } from "../../lib/service";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const ServiceCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1280px)': { slidesToScroll: 3 }
    }
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.3
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="w-full py-40 bg-[#0f0f0f] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-start mb-12"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 text-[#E6B902] w-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nossos Serviços
          </motion.h2>
          <motion.p 
            className="text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Andrade Oliveira é uma empresa especializada em estruturas de concreto, oferecendo serviços de alta qualidade e segurança para atender às necessidades dos nossos clientes.
          </motion.p>
        </motion.div>

        
        <motion.div 
          className="relative max-w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          
          <motion.button
            onClick={scrollPrev}
            className="absolute left-0 sm:-left-12 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-600 rounded-full shadow-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#E6B902] hover:text-white transition"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(230, 185, 2, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.button>
          
          
          <div 
            ref={emblaRef} 
            className="overflow-hidden mx-4 sm:mx-0"
          >
            <div className="flex gap-4">
              {services.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex-[0_0_calc(100%-32px)] sm:flex-[0_0_calc(50%-8px)] xl:flex-[0_0_calc(33.3333%-11px)] min-w-0"
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.article 
                    className="bg-[#fafafa] text-[#0f0f0f] rounded-sm p-6 h-full flex flex-col justify-between max-w-full"
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="relative w-full h-64 rounded-sm overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <motion.div
                        className=" inset-0 transition-all duration-300"
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                      />
                    </motion.div>

                    <div className="flex-1 flex flex-col justify-between mt-6">
                      <div>
                        <motion.h3 
                          className="text-lg font-semibold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: (index * 0.1) + 0.3 }}
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p 
                          className="text-sm text-neutral-500 mt-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: (index * 0.1) + 0.4 }}
                        >
                          {item.description}
                        </motion.p>
                      </div>

                      <motion.div 
                        className="mt-6 pt-4 flex justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: (index * 0.1) + 0.5 }}
                      >
                        <Link
                          href={item.url}
                          className="flex items-center gap-2 text-sm font-medium hover:bg-[#E6B902] text-[#E6B902] hover:text-white px-4 py-2 rounded-sm transition duration-300 group"
                        >
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <MoveRightIcon className="w-5 h-5 text-[#E6B902] group-hover:text-white" />
                          </motion.div>
                          Ver mais
                        </Link>
                      </motion.div>
                    </div>
                  </motion.article>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            onClick={scrollNext}
            className="absolute right-0 sm:-right-12 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-600 rounded-full shadow-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#E6B902] hover:text-white transition"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(230, 185, 2, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};