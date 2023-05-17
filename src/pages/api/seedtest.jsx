import React from 'react';
import { handleClick } from './seed';

const SeedTest = () => {
  const a = 1;
  return (
    <main>
      <button type="button" onClick={handleClick}>
        {a}
      </button>
    </main>
  );
};

export default SeedTest;
