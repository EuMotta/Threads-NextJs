'use client';

import React from 'react';
import { About, Education, Hero, Languages, Me } from '../sections/SecAbout/Me';

export default function page() {
  return (
    <main>
      <Hero />
      <Me />
      <About />
      <Education />
      <Languages />
    </main>
  );
}
