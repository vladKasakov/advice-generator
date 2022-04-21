import { AnimatePresence, motion } from 'framer-motion';

import { FC } from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.h3
          style={{
            color: 'var(--neon-green)',
            letterSpacing: 2,
            textAlign: 'center',
            textTransform: 'uppercase',
            overflow: 'hidden',
          }}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          {message + ' Please try again later.'}
        </motion.h3>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;
