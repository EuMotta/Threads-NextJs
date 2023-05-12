import Link from 'next/link';
import React from 'react';

const SimulateNow = () => {
  return (
    <section>
      <div className="h-96 bg_simulate flex justify-center items-center">
        <Link
          href="/Start"
          className="px-16 rounded-full py-3 text-2xl text-white shadow-md shadow-slate-400 hover:shadow-slate-900 font-bold font-mono bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Simular
        </Link>
      </div>
    </section>
  );
};

export default SimulateNow;
