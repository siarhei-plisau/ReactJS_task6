import React from 'react';
import styles from './Header.module.scss';
import UserAvatar from '../UserAvatar';
import MenuList from '../MenuList';

function Header(props) {
  return (
    <header className={styles.header}>
      <UserAvatar {...props} />
      <MenuList />
    </header>
  );
}
export default Header;
