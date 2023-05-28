'use client';

import React from 'react';
import { Hero, Definition, Creation, Identification, ProcessState, Separation, Relation, ProcessUse } from '../sections/SecAbout/Process';

export default function page() {
  return (
    <main>
      <Hero />
      <Definition />
      <Creation />
      <Identification />
      <ProcessState />
      <Separation />
      <Relation />
      <ProcessUse />
    </main>
  );
}
