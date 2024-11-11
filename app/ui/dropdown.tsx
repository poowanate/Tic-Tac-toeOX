'use client';
import React, { useState,useEffect,useRef, use } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link'
export default function ProfileClient() {
    const [isMenuOpenProfile, setIsMenuOpenProfile] = useState(false);
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div></div>;
  if (error) return <div>{error.message}</div>;
   
  return (
    user && (
        <div className="hidden lg:flex space-x-8 w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
            
      
        <div>
        <div className="relative inline-block text-left items-center">
    <div>
      <a  onClick={() => setIsMenuOpenProfile(!isMenuOpenProfile)}  className="  hover:cursor-pointer inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-red-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      {user.given_name}
        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  
  
  
    
  </div>
    </div>
      
             
           
        {isMenuOpenProfile ? 
      
            <div className="absolute top-12 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
            <div className="py-1" role="none">
          
            <a  className="block px-4 py-2 text-sm text-gray-700  " role="menuitem"  id="menu-item-0">{user.name}</a>
        
          </div>
          <div className="py-1" role="none">
          <Link  href="/profile" onClick={() => setIsMenuOpenProfile(!isMenuOpenProfile)}>
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50" role="menuitem"  id="menu-item-1">Profile</p>
         
             
            </Link>
          </div>
          <div className="py-1" role="none">
        
           <a href="/api/auth/logout" className="block px-4 py-2 text-sm text-gray-700  hover:bg-blue-50" role="menuitem"  id="menu-item-2">Logout</a>
          
         </div>
          </div>
              :null}
               </div>
    )
  );
}

