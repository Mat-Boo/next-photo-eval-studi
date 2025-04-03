import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
    return (
        <main className={styles.container}>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Charles Cantin - Photographe</title>
                <meta name="description" content="Photographe professionnel, spécialisé en portrait. Shooting en studio, reportage naturel en extérieur ou à domicile, mariage, photo d'entreprise." />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                {/* Open Graph meta for Facebook */}
                <meta property="og:title" content="Charles Cantin - Photographe" />
                <meta property="og:url" content="https://charles-cantin.studi.auxseen.com/" />
                <meta property="og:image" content="https://charles-cantin.studi.auxseen.com/resources/homeOg.png" />
                <meta property="og:description" content="Photographe professionnel, spécialisé en portrait. Shooting en studio, reportage naturel en extérieur ou à domicile, mariage, photo d'entreprise." />
                <meta property="og:site_name" content="Charles Cantin - Photographe" />
                <meta property="og:type" content="website" />
                {/* Card meta for Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ccantin_photo" />
                <meta name="twitter:title" content="Charles Cantin - Photographe" />
                <meta name="twitter:description" content="Photographe professionnel, spécialisé en portrait. Shooting en studio, reportage naturel en extérieur ou à domicile, mariage, photo d'entreprise." />
                <meta name="twitter:image:src" content="https://charles-cantin.studi.auxseen.com/resources/homeOg.png" />
            </Head>
            <div className={styles.mainPicture}>
                <div className={styles.titleBox}>
                    <h1>Charles Cantin</h1>
                    <h2>- Photographe -</h2>
                </div>
            </div>
        </main>
    )
}