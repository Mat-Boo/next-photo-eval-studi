import Link from 'next/link';
import React from 'react';
import styles from '../styles/404.module.scss';
import Image from 'next/image';

export default function page404() {
  return (
    <div className={styles.page404}>
        <div className={styles.logo404}>
            <span>4</span>
            <div className={styles.lense}>
                <Image src='/resources/404camera.png' alt='cameraLense' width='519' height='519'/>
            </div>
            <span>4</span>
        </div>
        <h2>PAGE INTROUVABLE</h2>
        <span>Cette page n'existe pas !</span>
        <Link href='/'>
            <a>Retourner à l'accueil</a>
        </Link>
    </div>
  )
}
