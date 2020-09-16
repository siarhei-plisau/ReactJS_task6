import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuList.module.scss';


function MenuList() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
      </ul>
    </nav>
  );
 }
 
export default MenuList;
