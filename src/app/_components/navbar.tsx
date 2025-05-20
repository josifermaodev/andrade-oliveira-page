'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../../components/ui/sheet";
import { X } from "lucide-react";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    const items = [
        { url: "/", label: "Home" },
        { url: "/about", label: "Sobre" },
        { url: "/services", label: "Serviços" },
        { url: "/projects", label: "Projetos" },
        { url: "/contacts", label: "Contato" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            
            <div className="h-24"></div>
            
            
            <header className={`h-24 flex fixed  top-0 w-full bg-[#0f0f0f] z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
                    
                    <Link href="/" className="z-50">
                        <Image 
                            src="/logo-branca-site.svg" 
                            width={150} 
                            height={150} 
                            alt="Logo" 
                            className="w-auto h-10 md:h-12"
                            priority
                        />
                    </Link>

                    
                    <ul className="hidden lg:flex items-center gap-8">
                        {items.map((item) => (
                            <li key={item.url} className="relative group">
                                <Link 
                                    href={item.url} 
                                    className={`relative px-2 py-6 text-white/90 hover:text-[#E6B902] transition-colors ${pathname === item.url ? 'text-[#E6B902]' : ''}`}
                                >
                                    {item.label}
                                    <span className={`absolute bottom-4 left-0 right-0 h-0.5 bg-[#E6B902] transition-all ${pathname === item.url ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    
                    <div className="hidden lg:block">
                        <Link href="/contacts">
                            <Button className="bg-[#E6B902] hover:bg-[#c99e00] text-black font-medium px-6 py-2 rounded-sm">
                                Orçamentos
                            </Button>
                        </Link>
                        
                    </div>

                    
                    <div className="lg:hidden flex items-center gap-4">
                        
                        <Link href="/contacts" className="z-50">
                            <Button className="bg-[#E6B902] hover:bg-[#c99e00] text-black text-sm py-2 px-4 h-auto">
                                Orçamentos
                            </Button>
                        </Link>
                        
                        <Sheet>
                            <SheetTrigger asChild>
                                <button 
                                    className="text-white focus:outline-none z-50"
                                    aria-label="Menu"
                                >
                                    <div className="w-8 h-8 flex flex-col justify-center items-center">
                                        <span className="block w-6 h-0.5 bg-white -translate-y-1"></span>
                                        <span className="block w-6 h-0.5 bg-white mt-1"></span>
                                        <span className="block w-6 h-0.5 bg-white mt-1 translate-y-1"></span>
                                    </div>
                                </button>
                            </SheetTrigger>

                            <SheetContent side="right" className="bg-[#0f0f0f] border-none w-full max-w-xs p-0">
                                <div className="h-full flex flex-col">
                                    
                                    <div className="flex justify-between items-center p-6 border-b border-gray-800">
                                        
                                        <SheetClose className="text-white rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none">
                                            <X className="h-6 w-6" />
                                            <span className="sr-only">Fechar</span>
                                        </SheetClose>
                                    </div>

                                    
                                    <div className="flex-1 overflow-y-auto p-6">
                                        <ul className="space-y-6">
                                            {items.map((item) => (
                                                <li key={item.url} className="w-full">
                                                    <SheetClose asChild>
                                                        <Link 
                                                            href={item.url} 
                                                            className={`flex items-center py-3 text-lg font-medium ${pathname === item.url ? 'text-[#E6B902]' : 'text-white hover:text-[#E6B902]'}`}
                                                        >
                                                            {item.label}
                                                            {pathname === item.url && (
                                                                <span className="ml-2 w-2 h-2 rounded-full bg-[#E6B902]"></span>
                                                            )}
                                                        </Link>
                                                    </SheetClose>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    
                                    <div className="p-6 border-t border-gray-800">
                                        <SheetClose asChild>
                                            <Link href="/contacts" className="w-full">
                                                <Button className="w-full bg-[#E6B902] hover:bg-[#c99e00] text-black font-medium py-3">
                                                    Orçamentos
                                                </Button>
                                            </Link>
                                        </SheetClose>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </header>
        </>
    );
}