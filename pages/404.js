import Link from 'next/link';
import React from 'react';
import styles from '../styles/404.module.scss';
import Image from 'next/image';
import Head from 'next/head';

export default function Page404() {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta content="NOINDEX, NOFOLLOW" name="robots" />
                <title>PAGE INTROUVABLE | Charles Cantin - Photographe</title>
                <meta name="description" content="Photographe professionnel, spécialisé en portrait. Shooting en studio, reportage naturel en extérieur ou à domicile, mariage, photo d'entreprise." />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            </Head>
            <main className={styles.page404}>
                <div className={styles.logo404}>
                    <span>4</span>
                    <div className={styles.lense}>
                        <Image src='/resources/err_camera.png' alt='cameraLense' width='519' height='519'/>
                    </div>
                    <span>4</span>
                </div>
                <h1>PAGE INTROUVABLE</h1>
                <span>Cette page n'existe pas !</span>
                <Link href='/'>
                    <a>Retourner à l'accueil</a>
                </Link>
            </main>
        </>
    )
}
