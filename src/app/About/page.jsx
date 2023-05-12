import React from 'react';
import { Developing, Hero, Language, Me, Packages, Separator, Threads } from '../sections/About';
import '../../styles/About.css'

const page = () => {
  return (
    <div>
      <Hero />
      <Threads />
      <Me />
      <Language />
      <Packages />
      <Separator />
      <Developing />
    </div>
  );
};

export default page;
