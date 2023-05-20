'use client';

import { motion } from 'framer-motion';
import { AiFillCalendar } from 'react-icons/ai';
import { TypingText } from '../../../components/CustomTexts';
import { educationInformation } from './constants';
import styles from '../../../../styles';
import { staggerContainer, fadeIn } from '../../../../utils/motion';

const Education = () => (
  <section className={`${styles.paddings} `}>
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-screen-xl yPaddings container mx-auto"
      >
        <div className="grid w-full gap-x-10 h-full lg:grid-cols-2 ">
          <motion.div
            variants={fadeIn('right', 'tween', 0, 1.5)}
            className="col-span-1 flex flex-col justify-center"
          >
            <div>
              <h3>
                <TypingText
                  title="Cursos e formações"
                  textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
                />
              </h3>
            </div>
            <div className=" ">
              <div className="w-full  flex flex-col  z-10">
                {educationInformation.education.map((education) => (
                  <div
                    key={education.id}
                    className="px-5 card_1 shadow-lg shadow-slate-900"
                  >
                    <div className=" p-5 border-slate-600 border-l-2  h-56  flex flex-col gap-y-3">
                      <p className=" flex items-center gap-x-2">
                        <AiFillCalendar className="text-xl" /> {education.year}
                      </p>
                      <h4 className=" font-bold">{education.title}</h4>
                      <h5 className="font-bold">{education.school}</h5>
                      <p>{education.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0, 1.5)}
            className="col-span-1  text-white flex flex-col justify-center"
          >
            <div>
              <h3>
                <TypingText
                  title="Experiências"
                  textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
                />
              </h3>
            </div>
            <div className=" ">
              <div className="w-full flex flex-col  z-10">
                {educationInformation.experience.map((education) => (
                  <div
                    key={education.id}
                    className="px-5 card_1  shadow-lg shadow-slate-900"
                  >
                    <div className=" p-5 border-slate-600 border-l-2  h-56  flex flex-col gap-y-3">
                      <p className=" flex items-center gap-x-2">
                        <AiFillCalendar className="text-xl" /> {education.year}
                      </p>
                      <h4 className=" font-bold">{education.title}</h4>
                      <h5 className="font-bold">{education.school}</h5>
                      <p>{education.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
