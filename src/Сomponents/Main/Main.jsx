import React from 'react';
import styles from './Main.module.scss';
import UserCard from '../UserCard'


function Main(props) {
    return (
      <main className={styles.main}>
        <UserCard userImage = {props} />
      </main>
  );
}

export default Main;
