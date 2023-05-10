'use client';

import React from 'react';
import { Hero, GoBack } from '../sections/HowToUse';
import '../../styles/HowToUse.css';
import styles from '../../styles';

export default function page() {
  return (
    <main className="bg-slate-50">
      <div className="paddings container mx-auto">
        <Hero />
        <GoBack />
      </div>
    </main>
  );
}
