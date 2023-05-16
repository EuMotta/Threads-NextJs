import React from 'react';
import {
  Developing,
  Feedback,
  Hero,
  Language,
  Me,
  Packages,
  Separator,
} from '../sections/About';
import '../../styles/About.css';

const page = () => (
  <div>
    <Hero />

    <Me />
    <Language />
    <Packages />
    <Separator />
    <Developing />
    <Feedback />
  </div>
);

export default page;
