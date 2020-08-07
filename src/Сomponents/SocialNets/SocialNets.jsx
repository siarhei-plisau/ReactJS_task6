import React from 'react';
import IconInstargam from '../../Assets/img/Instagram.svg';
import IconFacebook from '../../Assets/img/Facebook.svg';
import IconTwitter from '../../Assets/img/Twitter.svg';
import IconWhatsApp from '../../Assets/img/WhatsApp.svg';
import styles from './SocialNets.module.scss';

function SocialNets() {
  return (
    <div className={styles.sotialNetworks}>
      <a href="instagram.com"><img src={IconInstargam} alt="instagram"/></a>
      <a href="facebook.com"><img src={IconFacebook} alt="Facebook"/></a>
      <a href="twitter.com"><img src={IconTwitter} alt="Twitter"/></a>
      <a href="whatsApp.com"><img src={IconWhatsApp} alt="WhatsApp"/></a>
    </div>
  );
}

export default SocialNets;