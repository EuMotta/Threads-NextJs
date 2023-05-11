'use client';

import React from 'react';
import { Hero, GoBack, Graphics } from '../sections/HowToUse';
import '../../styles/HowToUse.css';

export default function page() {
  return (
    <main className="bg-slate-50">
      <div className="paddings container mx-auto">
        <Hero />
        <GoBack />
        <Graphics />
      </div>
    </main>
  );
}
