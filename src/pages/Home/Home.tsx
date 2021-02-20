import React from 'react';

import { copyToClipboard } from 'utils';

import styles from './Home.scss';

const Home = (): JSX.Element => {
  copyToClipboard();

  return (
    <div className={styles.greenBg}>Home</div>
  );
};

export default Home;
