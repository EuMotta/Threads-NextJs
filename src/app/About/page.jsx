import React from 'react';
import { Hero, Language, Me, Packages, Separator } from '../sections/About';
import '../../styles/About.css'

const page = () => {
  return (
    <div>
      <Hero />
      <Me />
      <Language />
      <Packages />
      <Separator />
    </div>
  );
};

export default page;
