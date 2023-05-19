'use client';

import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn } from '../../utils/motion';
import '../../styles/globals.css';

const ExploreCard = ({
  id,
  title,
  index,
  active,
  handleClick,
  description,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative  card_1 ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } ${
      styles.flexCenter
    } min-w-[20px]  h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <div className=" ">
      {active === id ? (
        <div className="overflow-hidden h-96">
          {title}
          {description}
        </div>
      ) : (
        ''
      )}
    </div>
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] z-0 text-white absolute lg:bottom-20 lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] overflow-hidden rounded-b-[24px]">
        <h2 className="mt-[24px] font-bold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          Clique para visualizar
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
