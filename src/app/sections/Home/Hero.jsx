import Image from 'next/image';
import React from 'react';
import HomeImage from '../../../images/Home.jpg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-8 w-full">
        <div className="col-span-5 flex justify-center items-center w-5/8">
          <Image
            src={HomeImage}
            width={750}
            height={500}
            className="rounded-xl shadow-3xl shadow-slate-400"
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center items-center w-3/8 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-7xl font-bold mb-2">ThreadHorses</h1>
          <h3 className="text-4xl font-semibold mb-4">Project</h3>
          <p className="text-center text-xl mb-4">
            Projeto de Threads desenvolvido em Next.js
          </p>
          <div className="duration-700  hover:scale-x-110">
            <Link href="/Horse" className="rounded-full px-16 bg-slate-600  text-lg font-bold text-white py-4 hover:bg-slate-700 hover:shadow-lg hover:-translate-y-1 transition duration-500">
              Iniciar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
