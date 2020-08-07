import React from 'react';
import styles from './Header.module.scss';
import UserAvatar from '../UserAvatar';
import MenuList from '../MenuList';

function Header({ userData }) {
  return (
    <header className={styles.header}>
      <UserAvatar userData={userData} />
      <MenuList />
    </header>
  );
}

export default Header;