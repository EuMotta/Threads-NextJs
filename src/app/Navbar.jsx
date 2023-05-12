'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GoCode } from 'react-icons/go';
import { useState, useEffect } from 'react';
import Logo2 from '../images/Logo.svg';
import { navbar_links } from './constants';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-800 duration-500 ${
        isSticky ? 'fixed  duration-500 top-0 z-50 w-full' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 hover:cursor-pointer ">
              <Link href="/">
                <div className="flex justify-center text-white items-center gap-x-2">
                  <span className="text-3xl">
                    <GoCode />
                  </span>
                  <span className="te font-mono">
                    <h1 className="text-2xl">ThreadWorld</h1>
                  </span>
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navbar_links.map(item => (
                  <Link href={item.href}>
                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
