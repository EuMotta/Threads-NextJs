import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Horse from '../../../images/Start/Home.jpg';
import CallCenter from '../../../images/Start/CallCenter.jpg';
import Barbearia from '../../../images/Barber.jpg';
import CarRace from '../../../images/Start/Cars.jpg';

const Hero = () => (
  <div className="container paddings pt-20 mx-auto">
    <div className="flex flex-col my-auto justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <div className="text-center mb-20 text-6xl  font-mono">
          <h1 className="text-color">Simuladores disponíveis</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-16">
          <Link href="/Horse" className="rounded-xl overflow-hidden ">
            <div className="image-container duration-300 hover:scale-105">
              <Image
                src={Horse}
                width={650}
                height={500}
                className="rounded-xl shadow-3xl shadow-slate-400"
              />
              <div className="image-text">Corrida de cavalos</div>
            </div>
          </Link>
          <Link href="/CallCenter" className="rounded-xl overflow-hidden ">
            <div className="image-container duration-300 hover:scale-105">
              <Image
                src={CallCenter}
                width={650}
                height={500}
                className="rounded-xl shadow-3xl shadow-slate-400"
              />
              <div className="image-text">Call Center</div>
            </div>
          </Link>
          <Link href="/Barbearia" className="rounded-xl overflow-hidden ">
            <div className="image-container duration-300 hover:scale-105">
              <Image
                src={Barbearia}
                width={650}
                height={500}
                className="rounded-xl shadow-3xl shadow-slate-400"
              />
              <div className="image-text">
                Barbearia{' '}
                <p className="text-white text-center">Barbeiro sonolento</p>
              </div>
            </div>
          </Link>
          <Link
            href="/CarRace"
            className="rounded-xl overflow-hidden "
          >
            <div className="image-container duration-300 hover:scale-105">
              <Image
                src={CarRace}
                width={650}
                height={500}
                className="rounded-xl shadow-3xl shadow-slate-400"
              />
              <div className="image-text">
                Corrida de carros{' '}
                <p className="text-white text-center">Barreira</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
