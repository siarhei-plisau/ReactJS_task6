import React from 'react';
import styles from './Footer.module.scss';

function Footer(props) {
    return (
        <footer className={styles.footer}>
          <p>© Copyright 2020 by <a href="https://www.epam-group.ru/">Epam System</a> </p>
        </footer>
    );
}
export default Footer;