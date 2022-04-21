import { AnimatePresence, motion } from 'framer-motion';

import { FC } from 'react';
import { IAdvice } from '../../types';
import styles from './AdviceInfo.module.scss';

interface AdviceInfoProps {
  advice: IAdvice | null;
  isLoaded: boolean;
}

const AdviceInfo: FC<AdviceInfoProps> = ({ advice, isLoaded }) => {
  const container = {
    hidden: { height: 0 },
    show: {
      height: 'auto',
      transition: {
        duration: 0.7,
        delayChildren: 0.7,
        staggerChildren: 0.4,
        type: 'tween',
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {isLoaded && (
        <motion.div
          className={styles.infowrapper}
          key={advice?.id}
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.h6
            variants={item}
            transition={{ ease: 'linear' }}
            className={styles.header}
          >
            Advice #{advice?.id}
          </motion.h6>
          <motion.q
            variants={item}
            transition={{ ease: 'linear' }}
            className={styles.quote}
          >
            {advice?.advice}
          </motion.q>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdviceInfo;
