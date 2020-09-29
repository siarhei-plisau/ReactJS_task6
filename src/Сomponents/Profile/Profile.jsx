import React from 'react';
import styles from './Profile.module.scss';
  
function Profile(props) {
  const { avatarImage, profession, about } = props.userData;
  return (
    <article className={styles.userCard}>
      <div className={styles.wrapperImage}>
        <img className={styles.userPhoto}
                   src={avatarImage}
                   alt='user'/>
      </div>
      <div className={styles.wrapperAbout}>
        <h2>{profession}</h2>
        <p>{about}</p>
      </div>
    </article>
  );
} 

export default Profile; 
  