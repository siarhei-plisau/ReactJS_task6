import React from 'react';
import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';


function App ({ userData = {} }) {
  const { avatar } = userData;
  return (
    <div className={styles.container}>
      <Header userData={userData} />
      <Main avatar={avatar} />
      <Footer />
    </div>
  );
}

export default App;
