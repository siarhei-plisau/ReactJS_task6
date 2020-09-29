import React from 'react';
import styles from './Header.module.scss';
import UserAvatar from '../UserAvatar';
import MenuList from '../MenuList';

function Header(props) {
  return (
    <header className={styles.header}>
      <UserAvatar />
      <MenuList />
    </header>
  );
}
export default Header;
