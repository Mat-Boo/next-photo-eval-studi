import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <span className={styles.copyright}>© 2022 Charles Cantin | Créé par Mathieu Bouthors </span>
        </div>
    )
}
