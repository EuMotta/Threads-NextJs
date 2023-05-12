'use client';

import { useEffect, useRef } from 'react';
import '../styles/globals.css';
import Navbar from './Navbar';
import {FcUp} from 'react-icons/fc';
export const metadata = {
  title: 'ThreadWorld',
};

export default function RootLayout({ children }) {
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
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
          <button
            ref={rocketRef}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            className=" scroll-top flex justify-center items-center !bg-indigo-100 hover:!bg-slate-200  scroll-to-target open"
          >
            <FcUp className="text-white" />
          </button>
        </header>
        {children}
      </body>
    </html>
  );
}
