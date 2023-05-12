'use client';

import React from 'react';
import { Hero, GoBack, Graphics, SimulateNow } from '../sections/HowToUse';
import '../../styles/HowToUse.css';

export default function page() {
  return (
    <main className="bg-slate-50">
      <div className="">
        <Hero />
        <GoBack />
        <SimulateNow />
        <Graphics />
      </div>
    </main>
  );
}
