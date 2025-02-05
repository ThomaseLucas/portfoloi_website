"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import profileImage from "./images/professional_photo.jpg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-800 text-white p-4 shadow-xl w-full h-[110px] ">
        <div className=" flex justify-between items-center px-6">
        
        {/* Profile Picture and Name (Left side of nav)*/}
        <div className="flex items-center gap-x-4 justify-left">    
            <Image src={profileImage} width={75} height={75} className="rounded-full" alt="Profile Picture"/>
            <h1 className="text-3xl font-bold ">Thomas Lucas</h1>
        </div>
        
        {/*Hamburger Menu*/}
        <button
        className="sm:block lg:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        >
            ☰
        </button>

        {/* Navigation Links */}
        <div className="hidden sm:hidden lg:flex space-x-32 text-lg font-semibold pr-32">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:flex lg:hidden flex flex-col items-center mt-8 space-y-4 text-black">
          <Link href="/" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
