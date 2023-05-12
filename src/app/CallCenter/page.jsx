'use client';

import React, { useState } from 'react';
import {CallCenter, Hero} from '../sections/CallCenter';

export default function page() {
  return (
    <main className='bg-slate-50'>
      <Hero />
      <CallCenter />
    </main>
  );
}
