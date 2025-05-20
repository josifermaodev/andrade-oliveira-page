'use client';

import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemsInterface } from "./navItem";
import { Button } from "../../components/ui/button";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const items: NavItemsInterface[] = [
        { url: "/", label: "Home" },
        { url: "/about", label: "Sobre" },
        { url: "/services", label: "Serviços" },
        { url: "/projects", label: "Projetos" },
        { url: "/contacts", label: "Contato" }
    ];

    return (
        <header className="bg-[#0f0f0f] relative">
            <nav className="container mx-auto flex items-center justify-between py-6 gap-4 px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="z-10">
                    <Image src="logo-branca-site.svg" width={150} height={150} alt="Logo do site" className="w-auto h-10 md:h-12"/>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center">
                    {items.map((item, index) => (
                        <NavItem key={index} url={item.url} label={item.label} />
                    ))}
                </ul>

                {/* Desktop CTA Button */}
                <div className="hidden lg:block">
                    <Link href="/contacts">
                        <Button className="bg-[#E6B902] hover:bg-[#c99e00] text-white">Orçamentos</Button>
                    </Link>
                </div>

                {/* Mobile Actions Wrapper */}
                <div className="flex items-center gap-4 lg:hidden ">
                    {/* Mobile CTA Button */}
                    <Link href="/contacts">
                        <Button className="bg-[#E6B902] hover:bg-[#c99e00] text-white text-sm py-2 px-4 h-auto ">Orçamentos</Button>
                    </Link>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="text-white focus:outline-none z-10"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-[#0f0f0f] z-9">
                        <div className="flex flex-col items-center justify-center h-full">
                            <ul className="flex flex-col items-center space-y-6">
                                {items.map((item, index) => (
                                    <li key={index} className="text-white text-xl font-medium">
                                        <Link href={item.url} onClick={toggleMenu}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                <Link href="/contacts">
                                    <Button className="bg-[#E6B902] hover:bg-[#c99e00] text-white text-sm py-2 px-4 h-auto ">Orçamentos</Button>
                                </Link>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}