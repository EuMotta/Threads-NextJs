import Image from 'next/image';
import React from 'react';
import Horse from '../../../images/Start/Home.jpg';
import CallCenter from '../../../images/Start/CallCenter.jpg';

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center pt-10 text-6xl text-slate-50 font-mono">
        Simuladores disponíveis
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-16">
          <div className="image-container">
            <Image
              src={Horse}
              width={650}
              height={500}
              className="rounded-xl shadow-3xl shadow-slate-400"
            />
            <div className="image-text">Corrida de cavalos</div>
          </div>
          <div className="image-container">
            <Image
              src={CallCenter}
              width={650}
              height={500}
              className="rounded-xl shadow-3xl shadow-slate-400"
            />
            <div className="image-text">Call Center</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
