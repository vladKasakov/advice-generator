import { FC, useEffect, useState } from 'react';

import AdviceInfo from './AdviceInfo';
import { ReactComponent as DividerBg } from '../../assets/pattern-divider-desktop.svg';
import { ReactComponent as DividerSm } from '../../assets/pattern-divider-mobile.svg';
import ErrorMessage from '../ErrorRequestMassage';
import { IAdvice } from '../../types';
import dice from '../../assets/icon-dice.svg';
import styles from './Advice.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const Advice: FC = () => {
  let [advice, setAdvice] = useState<IAdvice | null>(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let windowHeight = useWindowWidth();
  let [error, setError] = useState('');

  const handleClick = () => {
    setIsLoaded(false);
    getRandomAdvice()
      .then((advice) => {
        setAdvice(advice);
        setIsLoaded(true);
        setError('');
      })
      .catch((e) => setError(e.message));
  };

  const getRandomAdvice = async () => {
    let res = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache',
    });
    let json = await res.json();
    return json.slip;
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {error && <ErrorMessage message={error} />}
        <AdviceInfo advice={advice} isLoaded={isLoaded} />
        <div className={styles.dividerwrapper}>
          {windowHeight > 485 ? (
            <DividerBg className={styles.divider} />
          ) : (
            <DividerSm className={styles.divider} />
          )}
        </div>
        <div className={styles.dicewrapper}>
          <button className={styles.dice} onClick={handleClick}>
            <img src={dice} alt="dice" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Advice;
