import React from 'react';
import styles from './Preloader.module.scss';

function Preloader() {
    return (
      <div className={styles.wrapperPreloader}>
        <div className={styles.spinnerPulse}></div>
      </div>
    )
}

export default Preloader;