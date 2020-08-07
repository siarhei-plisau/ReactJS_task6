import React from 'react';
import styles from './UserAvatar.module.scss';

function UserAvatar({ userData = {} }) {
  const { user, avatar } = userData;
  return (
    <div className={styles.userLogo}>
      <img src={avatar.image} alt={avatar.alt} />
      <p>{`${user.firstName} ${user.lastName}`}</p>
    </div>
  );
}

export default UserAvatar;
