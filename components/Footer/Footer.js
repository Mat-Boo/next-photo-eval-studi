import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.copyright}>© 2022 Charles Cantin | Créé par <a
                href='https://www.auxseen.com'
                className={styles.auxseenLink}
                target="_blank"
                rel="noopener noreferrer"
            > 
                Auxseen.
            </a>
            </span>
        </footer>
    )
}
