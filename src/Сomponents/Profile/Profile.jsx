import React from 'react';
import styles from './Profile.module.scss';
  
function Profile(props) {
  const { avatar, profession, about } = props.userData;
  return (
    <article className={styles.userCard}>
      <div className={styles.wrapperImage}>
        <img className={styles.userPhoto}
                   src={avatar.image}
                   alt={avatar.alt}/>
      </div>
      <div className={styles.wrapperAbout}>
        <h2>{profession}</h2>
        <p>{about}</p>
      </div>
    </article>
  );
} 

export default Profile; 
  