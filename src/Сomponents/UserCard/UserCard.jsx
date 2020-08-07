import React from 'react';
import styles from './UserCard.module.scss';
import SocialNets from '../SocialNets'
  
function UserCard({ userImage }) {
  const { avatar } = userImage;
  return (
    <article className={styles.userCard}>
      <div className={styles.wrapperImage}>
        <img className={styles.userPhoto}
                   src={avatar.image}
                   alt={avatar.alt}/>
      </div>
      <div className={styles.wrapperAbout}>
        <h2>Illustrator & Character Designer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Mauris porttitor, nibh
         at sagittis tristique, enim magna pretium
         augue, eget consectetur sem dui non urna.
         Integer gravida, diam congue molestie
        fringilla, elit odio rhoncus turpis, ac
        dictum libero elit vel metus. Morbi egestas
        sit amet velit eget venenatis.
        </p>
        <SocialNets />  
      </div>
    </article>
  );
} 

export default UserCard; 
  