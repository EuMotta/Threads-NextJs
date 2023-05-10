'use client';

import React from 'react'
import {Hero, GoBack} from '../sections/HowToUse';
import '../../styles/HowToUse.css'
import styles from '../../styles';


export default function page() {
  return (
    <main className= 'paddings container mx-auto'>
      <Hero />
      <GoBack /> 
    </main>
  );
}