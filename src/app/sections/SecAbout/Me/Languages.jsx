'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../../../components/CustomTexts';
import { skills } from './constants';
import styles from '../../../../styles';
import { staggerContainer, fadeIn } from '../../../../utils/motion';

const Languages = () => (
  <section id="AboutMe" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-screen-xl container yPaddings mx-auto"
    >
      <div>
        <h3>
          <TypingText
            title="Skills"
            textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
          />
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-10 gap-x-20 card_1 shadow-slate-700 border border-slate-700 justify-center">
        <div className="p-5">
          <TypingText
            title="Linguagens"
            textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
          />
          {skills.language.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeIn(`${skill.fadeIn}`, 'tween', 0, 2)}
              className=""
            >
              <div className="my-3">
                <h4>{skill.name}</h4>
              </div>
              <div>
                <div className="shadow-sm shadow-slate-600 rounded-full">
                  <div
                    className="h-2 bg-slate-900 rounded-full relative overflow-hidden"
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <div className="h-full !bg-blue-500 inset-0 rounded-full transition-all duration-300 ease-in-out" />
                  </div>
                </div>
                <p className="text-center font-bold mt-2">
                  {skill.percentage}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="p-5">
          <TypingText
            title="Frameworks"
            textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
          />
          {skills.framework.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeIn(`${skill.fadeIn}`, 'tween', 0, 2)}
              className=""
            >
              <div className="my-3">
                <h4 className="">{skill.name}</h4>
              </div>
              <div>
                <div className="shadow-sm shadow-slate-600 rounded-full">
                  <div
                    className="h-2 bg-slate-900 rounded-full relative overflow-hidden"
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <div className="h-full !bg-blue-500 inset-0 rounded-full transition-all duration-300 ease-in-out" />
                  </div>
                </div>
                <p className="text-center font-bold mt-2">
                  {skill.percentage}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default Languages;
