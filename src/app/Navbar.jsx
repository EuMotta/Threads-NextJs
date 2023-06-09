'use client';

import Link from 'next/link';
import { GoCode } from 'react-icons/go';
import { FcUp } from 'react-icons/fc';
import { useState, useEffect, useRef } from 'react';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { navbarlinks } from './constants';
import { fadeIn, staggerContainer } from '../utils/motion';

const Navbar = () => {
  const homeRef = useRef(null);
  const navRef = useRef(null);
  const rocketRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const homeFunc = () => {
    if (
      document.body.scrollTop > 80
      || document.documentElement.scrollTop > 80
    ) {
      homeRef.current.classList.add('home_shrink');
      navRef.current.classList.add('nav_shrink');
      rocketRef.current.classList.add('open');
    } else {
      homeRef.current.classList.remove('home_shrink');
      navRef.current.classList.remove('nav_shrink');
      rocketRef.current.classList.remove('open');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', homeFunc);

    return () => window.removeEventListener('scroll', homeFunc);
  }, []);

  const handleClick = () => {
    const root = document.querySelector(':root');
    const currentColor = getComputedStyle(root)
      .getPropertyValue('--primary-color')
      .trim();
    if (currentColor === '#0F172A') {
      root.style.setProperty('--primary-color', 'aliceblue');
      root.style.setProperty('--text-h1-color', '#0F172A');
      root.style.setProperty('--text-h2-color', '#0F172A');
      root.style.setProperty('--text-h3-color', '#0F172A');
      root.style.setProperty('--text-h4-color', '#0F172A');
      root.style.setProperty('--text-h5-color', '#0F172A');
      root.style.setProperty('--text-p-color', '#0F172A');
      root.style.setProperty('--card-color', '#caddfa');
      root.style.setProperty('--card-2-color', '#e5e7eb');
      root.style.setProperty('--card-3-color', '#dde9ff');
      root.style.setProperty('--bg-home-start', '#0F172A');
      root.style.setProperty('--text-home-start', 'aliceblue');
      root.style.setProperty('--bg-color-process', '#8a8b8b40');
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
      root.style.setProperty('--card-3-color', '#6b80a5');
      root.style.setProperty('--bg-home-start', 'aliceblue');
      root.style.setProperty('--text-home-start', '#0F172A');
      root.style.setProperty('--bg-color-process', '#32768bd8');
    }
  };

  const [icon, setIcon] = useState('sun');

  const handleChange = () => {
    setIcon(icon === 'sun' ? 'moon' : 'sun');
  };

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header ref={homeRef} className="fixed w-full">
      <nav ref={navRef} className="bg-gray-800">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 hover:cursor-pointer">
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
                <div className="ml-10 flex  items-baseline space-x-4">
                  {navbarlinks.main.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <motion.div
                        whileHover={{
                          scale: [0.9, 1.1, 0.9, 1],
                          rotate: [0, -3, 3, 0],
                          borderRadius: ['6%', '6%', '6%', '6%'],
                        }}
                        whileTap={{ scale: 0.8 }}
                        variants={fadeIn('down', 'tween', 0.25, item.time)}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ))}
                  <motion.div
                    whileHover={{
                      scale: [0.98, 1.02, 0.98, 1],
                      rotate: [0, -1, 1, 0],
                      borderRadius: ['6%', '6%', '6%', '6%'],
                    }}
                    whileTap={{ scale: 0.98 }}
                    variants={fadeIn('down', 'tween', 0.25, 1.25)}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={handleDropdown}
                      className="text-gray-300 flex gap-2 items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                    >
                      Sobre
                      {isDropdownOpen ? (
                        <FaAngleUp className="text-xl" />
                      ) : (
                        <FaAngleDown className="text-xl" />
                      )}
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute z-40 right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                        <div className="py-1">
                          {navbarlinks.dropdown.map((item) => (
                            <Link href={item.href} key={item.name} onClick={handleDropdown}>
                              <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
            <motion.div
              variants={fadeIn('down', 'tween', 0.25, 1.25)}
              className="flex justify-center items-center"
            >
              <h4 className="text-white">Tema: </h4>
              <motion.button
                whileHover={{
                  scale: [0.95, 1.05, 0.95, 1],
                  rotate: [0, -3, 3, 0],
                  borderRadius: ['6%', '6%', '6%', '6%'],
                }}
                whileTap={{ scale: 0.5 }}
                type="button"
                onClick={() => {
                  handleChange();
                  handleClick();
                }}
                className="rounded-full hover:shadow-md hover:shadow-black transition-all p-1 shadow-sm shadow-slate-900"
              >
                <span className=" text-slate-50 text-4xl">
                  {icon === 'sun' ? <IoIosSunny /> : <IoIosMoon />}
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        <button
          type="button"
          ref={rocketRef}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          className="scroll-top flex justify-center items-center !bg-indigo-100 hover:!bg-slate-200 scroll-to-target open"
        >
          <FcUp className="text-white" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
