'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../../../components/CustomTexts';
import styles from '../../../../styles';
import { fadeIn, staggerContainer } from '../../../../utils/motion';
import { AboutSection } from './constants';

const About = () => (
  <section className={`${styles.paddings}  z-10`}>
    <motion.div
      id="About"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col paddings max-w-screen-xl container mx-auto gap-y-24"
    >
      <h2>
        <TypingText
          title="Quem Sou eu?"
          textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
        />
      </h2>
      <div className="grid gap-20 grid-cols-1 w-full h-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {AboutSection.map((about) => (
          <motion.div
            id="About"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={about.id}
            className="hover:-translate-y-1 transition-all"
          >
            <motion.div
              variants={fadeIn(`${about.fadeIn}`, 'tween', 0, 1)}
              className="flex flex-col card_1 shadow-lg shadow-slate-900 rounded-xl"
            >
              <div>
                <div className="text-center">
                  <div className=" h-20 sm:h-14">
                    <h3>{about.title}</h3>
                  </div>
                </div>
                <div className=" sm:pt-5 md:pt-0 pt-56 flex items-center border-slate-700 rounded-xl h-80 p-3 font-mono">
                  <p>&nbsp;{about.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
