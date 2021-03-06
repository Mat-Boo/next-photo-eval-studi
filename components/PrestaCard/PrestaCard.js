import React from 'react';
import styles from './PrestaCard.module.scss';
import Image from 'next/image';

export default function PrestaCard({prestaPicture, prestaTitle, prestaContent, prestaFare}) {
    return (
        <div className={styles.prestaCard}>
            <div className={styles.picture}>
                <Image src={prestaPicture} alt={prestaTitle + 'Picture'} width='1920' height='1280'/>
            </div>
            <div className={styles.prestaInfos}>
                <div className={styles.titleFare}>
                    <h3 className={styles.title}>{prestaTitle}</h3>
                    <span className={styles.fare}>{prestaFare + (isNaN(prestaFare) ? '' : ' €')}</span>   
                </div>
                <p className={styles.content}>{prestaContent}</p>
            </div>
        </div>
    )
}
