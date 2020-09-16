import React from 'react';
import styles from './UserAvatar.module.scss';
import no_user from '../../Assets/img/no_user.png';

function UserAvatar({ userData = {}, isAuthenticated, logOut }) {
  const { user, avatar } = userData;
  return (
    <div className={styles.userLogo}>
      <img src={isAuthenticated ? avatar.image : no_user} alt={isAuthenticated ? avatar.alt : 'no user'} />
      <p>{isAuthenticated ? `${user.firstName} ${user.lastName}` : ''}</p>
      {isAuthenticated ?
       <button onClick={() => {
        logOut();
       }}>Log Out</button> :
       null}
    </div>
  );
}

export default UserAvatar;
