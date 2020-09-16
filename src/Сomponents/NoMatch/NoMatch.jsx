import React from 'react';
import styles from './NoMatch.module.scss';

import {Link} from "react-router-dom";

function NoMatch({isAuthenticated}) {
   return (
      <div className={styles.wrapperError}>
        <p className={styles.numberError}>404</p>
        <p className={styles.description}>
          The page you are looking for was not found!
        </p>
        <p className={styles.decision}>
          You can go to the &nbsp;
          <Link to="/cards">main page</Link>
        </p>
      </div>

  );
}
export default NoMatch;