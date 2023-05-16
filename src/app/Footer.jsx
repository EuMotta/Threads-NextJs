import React from 'react';
import Link from 'next/link';
import { GoCode } from 'react-icons/go';

const Footer = () => (
  <footer className="bg-gray-800 dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <div className="flex justify-center text-white items-center gap-x-2">
            <span className="text-3xl">
              <GoCode />
            </span>
            <span className="p-0 font-mono text-2xl">ThreadWorld</span>
          </div>
        </Link>
        <div className="block text-sm  text-slate-100 sm:text-center dark:text-gray-400">
          <div className="flex justify-center items-center">
            © 2023{' '}
            <Link href="https://flowbite.com/" className="hover:underline">
              <p className="text-slate-100">&nbsp;ThreadWorld™</p>
            </Link>
            <p className="text-slate-100">. All Rights Reserved.</p>
          </div>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-100 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/About" className="mr-4 hover:underline md:mr-6 ">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
