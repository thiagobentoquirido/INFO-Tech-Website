"use client";
import Link from "next/link";
import Image from "next/image";
import Navitemn,{Naviteminterface} from "../Navitem";
import "./index.css"
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
export default function Navbar() {
    const items: Naviteminterface[] = [
        {url: "/", label: "Inicio"},
        {url: "/about", label: "Sobre"},
        {url: "/contact", label: "Contato"},    
        {url: "/services", label: "Serviços"},
        {url: "/products", label: "Produtos"},
    ];
    const pathname = usePathname(); 
    const [openMenu, setOpenMenu] = useState<boolean>(false);


    return ( 

        <header>
            <nav className="navbar">
                <Link href="/" className="logo">
                <Image src="logo.svg" alt="System Logo" width={90} height={90}/>
                 </Link>

                <ul className={`nav-itens ${openMenu ? 'open' : ''} ` }>
                    {items.map((item, index) => (
                        <Navitemn
                            key={index}
                            url={item.url}
                            label={item.label} 
                            isActive={pathname === item.url}
                            />
                    ))}
                    
                </ul>

                <button className="btn-menu" onClick={() => setOpenMenu(!openMenu)}>
               
                {openMenu ? <FaXmark/> : <FaBars />}
                </button>

                <button className="btn-default">
                        <Image src="whatsapp.svg" alt="WhatsApp Icon" width={30} height={30}/>
                        Contatar
                   
                </button>

            </nav>
        </header>
    );
}
