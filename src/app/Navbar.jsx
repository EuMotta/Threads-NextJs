'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GoCode } from 'react-icons/go';
import { FcUp } from 'react-icons/fc';
import { useState, useEffect, useRef } from 'react';
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

  const rocketRef = useRef(null);
  const homeFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      rocketRef.current.classList.add('open');
    } else {
      rocketRef.current.classList.remove('open');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', homeFunc);

    return () => window.removeEventListener('scroll', homeFunc);
  }, []);

  const handleClick = () => {
    const root = document.querySelector(':root');
    const currentColor = getComputedStyle(root).getPropertyValue('--primary-color').trim();
    if (currentColor === '#0F172A') {
      root.style.setProperty('--primary-color', 'aliceblue');
      root.style.setProperty('--text-h1-color', '#0F172A');
      root.style.setProperty('--text-h2-color', '#0F172A');
      root.style.setProperty('--text-h3-color', '#0F172A');
      root.style.setProperty('--text-h4-color', '#0F172A');
      root.style.setProperty('--text-h5-color', '#0F172A');
      root.style.setProperty('--text-p-color', '#0F172A');
      root.style.setProperty('--card-color', '#cbd5e1');
      root.style.setProperty('--card-2-color', '#e5e7eb');
    } else {
      root.style.setProperty('--text-h1-color', 'aliceblue');
      root.style.setProperty('--text-h2-color', 'aliceblue');
      root.style.setProperty('--text-h3-color', 'aliceblue');
      root.style.setProperty('--text-h4-color', 'aliceblue');
      root.style.setProperty('--text-h5-color', 'aliceblue');
      root.style.setProperty('--text-p-color', 'aliceblue');
      root.style.setProperty('--primary-color', '#0F172A');
      root.style.setProperty('--card-color', '#334454');
      root.style.setProperty('--card-2-color', '#475e74');
    }
  };
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
                  <span className="p-0 font-mono text-2xl">ThreadWorld</span>
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
          <div className="a">
            <button onClick={handleClick} className="text-white">aa</button>
          </div>
        </div>
      </div>
      <button
        ref={rocketRef}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        className=" scroll-top flex justify-center items-center !bg-indigo-100 hover:!bg-slate-200  scroll-to-target open"
      >
        <FcUp className="text-white" />
      </button>
    </nav>
  );
};

export default Navbar;
