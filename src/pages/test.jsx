'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import ExploreCard from '../app/components/ExploreCard';
import { exploreWorlds } from '../app/constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto grid grid-cols-2 p-10 `}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
