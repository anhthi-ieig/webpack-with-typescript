import React from 'react';
import moment from 'moment';
import { get } from 'lodash';

import { copyToClipboard } from 'utils';

import styles from './Home.scss';

const user = {
  name: 'Jarvis',
};

const Home = (): JSX.Element => {
  copyToClipboard();

  return (
    <div className={styles.greenBg}>
      Hello
      &nbsp;
      {`${get(user, 'name')} - ${moment().toString()}`}
    </div>
  );
};

export default Home;
