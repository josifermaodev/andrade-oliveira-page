import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { services } from "../../lib/service";
import Image from "next/image";

export default function Servicos() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div>
            <h1 className="text-4xl font-bold text-[#0f0f0f] mb-10 text-center">
                Nossos Serviços
            </h1>
        </div>
        

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.id}
              className="bg-[#1e1e1e] rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>

                <div className="mt-6 flex justify-end">
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 text-sm font-medium text-[#E6B902] hover:bg-[#E6B902] hover:text-black px-4 py-2 rounded-md transition duration-300"
                  >
                    <MoveRightIcon className="w-5 h-5" />
                    Ver mais
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
