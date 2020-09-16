import React from 'react';
import styles from './Card.module.scss';
import defaulImage from '../../Assets/img/no_image.png';

function Card( {id, price, title, imageUrl,about, handleDeleteCard} ) {
    return (
      <div className={styles.wrapper}>
        <button onClick ={() => handleDeleteCard(id)}>X</button>
        <div className={styles.card}>
          <p>{title}</p>
          <img src={imageUrl} onError={(e) => e.target.src = defaulImage } alt='pic' />
          <p>{about}</p>
          <p>{`${price} BYN`}</p>
        </div>
      </div>
    );
}

export default Card;