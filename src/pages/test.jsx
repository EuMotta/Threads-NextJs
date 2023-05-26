import { useState, useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';
import '../styles/globals.css';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      'ul',
      {
        clipPath: isOpen ? 'inset(0% 0% 0% 0% )' : 'inset(10% 50% 90% 50% )',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      },
    );

    animate(
      'li',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.5,
        delay: isOpen ? staggerMenuItems : 0,
      },
    );

    if (scope && scope.current) {
      scope.current.classList.remove('rounded-l-full', 'rounded-t-full');
      scope.current.classList.add(isOpen ? 'rounded-full' : 'rounded-l-full');
    }
  }, [isOpen]);

  return scope;
}

const test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div className="container mx-auto">
      <nav
        className={`bg-blue-400 ${
          isOpen ? 'rounded-ss-full px-2 w-20' : 'rounded-l-full py-3 w-20'
        }  flex flex-col shadow shadow-slate-500 duration-500 items-center`}
        ref={scope}
      >
        <motion.div className=" w-[3.6rem] flex flex-col items-center">
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 flex justify-center items-center gap-1"
          >
            <p>Cor:</p>
            <p className="arrow" style={{ transformOrigin: '50% 55%' }}>
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </p>
          </motion.button>
          <ul
            style={{
              pointerEvents: isOpen ? 'auto' : 'none',
              clipPath: 'inset(10% 50% 90% 50%)',
            }}
            className="fixed flex flex-col gap-5 justify-center items-center rounded-b-xl mt-8 p-3"
          >
            <li className="mt-5 bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 px-4 py-2 rounded-lg text-white transition-colors duration-200">
              <button type="button" className=" text-white">
                Verde
              </button>
            </li>
          </ul>
        </motion.div>
      </nav>
    </div>
  );
};
export default test;
