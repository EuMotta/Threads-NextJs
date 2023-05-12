import React from 'react';
import { Hero, Language, Me, Packages } from '../sections/About';

const page = () => {
  return (
    <div>
      <Hero />
      <Me />
      <Language />
      <Packages />
    </div>
  );
};

export default page;
