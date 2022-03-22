import Head from 'next/head'
import styles from '../styles/home.module.scss';
import Image from 'next/image';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Charles Cantin - Photographe</title>
                <meta name="description" content="Photographe professionnel, spécialisé en portrait. Shooting en studio, reportage naturel en extérieur ou à domicile, mariage, photo d'entreprise." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.mainPicture}>
                <div className={styles.titleBox}>
                    <h1>Charles Cantin</h1>
                    <h2>- Photographe -</h2>
                </div>
            </div>
        </div>
    )
}