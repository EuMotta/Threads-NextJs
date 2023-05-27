/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { process } from './constants';

const Creation = () => (
  <section className="container mx-auto yPaddings">
    <div>
      <div className="mb-10">
        <h1 className="text-center">Criação de um processo</h1>
      </div>
      <div>
        <div>
          {process.creation.map((item) => (
            <div className="">
              <h4 className="font-bold mb-5">{item.subtitle}</h4>
              {item.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Creation;
