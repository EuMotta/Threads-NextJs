/* eslint-disable react/function-component-definition */

'use client';

import Hero from './sections/Home';
import '../styles/Home.css';

export default function Home() {
  return (
    <main className="bg-home">
      <Hero />
    </main>
  );
}
