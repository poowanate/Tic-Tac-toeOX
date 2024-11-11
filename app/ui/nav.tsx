"use client";
// components/Navbar.tsx
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useState,useEffect,useRef } from 'react';
import { handleAuth } from '@auth0/nextjs-auth0';
import ProfileClient from './dropdown'

export function Nav() {

    const pathname = usePathname()
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);


   
   
  
   
    return (
      <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div data-v-e719f736="" className="flex items-center flex-shrink-0 text-PrimaryBg mr-6"><svg data-v-e719f736="" className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path data-v-e719f736="" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path></svg></div>
  
          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
  
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            
          <Link className={`link ${pathname === '/' ? 'active text-white hover:text-red-500' : 'text-gray-400 hover:text-red-500'}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/game' ? 'active text-white hover:text-red-500' : 'text-gray-400 hover:text-red-500'}`}
        href="/game"
      >
        Game
      </Link>
           
          </div>
           <ProfileClient></ProfileClient>
        </div>
  
        {/* Mobile Menu (Toggle) */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4 px-6">
            <a href="/" className="block text-white hover:text-blue-300">Home</a>
            <a href="/about" className="block text-white hover:text-blue-300">About</a>
            <a href="/services" className="block text-white hover:text-blue-300">Services</a>
            <a href="/contact" className="block text-white hover:text-blue-300">Contact</a>
          </div>
        )}
      </nav>
    );
  }

