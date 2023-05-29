'use client';

import React from 'react';
import { Hero, Definition, Creation, Identification, ProcessState, Separation, Relation, RenderStart } from '../../sections/SecAbout/Process';

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
      <RenderStart />
    </main>
  );
}
