'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { TypingText } from '../../components/CustomTexts';
import { developingList } from '../../constants';
import Horse1 from '../../../images/horse1.svg';

const Horse = () => {
  const [horse1, setHorse1] = useState(0);
  const [horse2, setHorse2] = useState(0);
  const [horse3, setHorse3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHorse1(Math.floor(Math.random() * 40));
      setHorse2(Math.floor(Math.random() * 40));
      setHorse3(Math.floor(Math.random() * 40));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="container mx-auto">
      <div className="text-center">
        {developingList.horse.map((horse) => (
          <div key={horse.title}>
            <TypingText
              title={horse.title}
              textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
            />
            {horse.description}
          </div>
        ))}
        <div className="flex flex-col justify-center items-center">
          <div className="text-center"><h3>Exemplo</h3></div>
          <div
            className="relative duration-700 w-14"
            style={{
              left: horse1,
              borderRight: '1px solid blue',
            }}
          >
            <Image
              className="scale-x-[-1]"
              src={Horse1}
              width={50}
              height={50}
            />
          </div>
          <div
            className="relative duration-700 w-14"
            style={{
              left: horse2,
              borderRight: '1px solid blue',
            }}
          >
            <Image
              className="scale-x-[-1]"
              src={Horse1}
              width={50}
              height={50}
            />
          </div>
          <div
            className="relative duration-700 w-14"
            style={{
              left: horse3,
              borderRight: '1px solid blue',
            }}
          >
            <Image
              className="scale-x-[-1]"
              src={Horse1}
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horse;
