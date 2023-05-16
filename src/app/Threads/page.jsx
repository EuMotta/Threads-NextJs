'use client';

import React from 'react';
import { Hero, Threads, TypeThreads } from '../sections/Threads';

export default function page() {
  return (
    <main>
      <Hero />
      <Threads />
      <TypeThreads />
    </main>
  );
}
