import React from 'react';
import { Developing, Hero, Language, Me, Packages, Separator } from '../sections/About';
import '../../styles/About.css'

const page = () => {
  return (
    <div className=''>
      <Hero />
      <Me />
      <Language />
      <Packages />
      <Separator />
      <Developing />
    </div>
  );
};

export default page;
