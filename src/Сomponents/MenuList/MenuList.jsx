import React from 'react';
import styles from './MenuList.module.scss';

function MenuList() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li><a href="index.html">portfolio</a></li>
        <li><a href="index.html">about</a></li>
        <li><a href="index.html">blog</a></li>
        <li><a href="index.html">get in touch</a></li>
      </ul>
    </nav>
  );
 }
 
export default MenuList;
