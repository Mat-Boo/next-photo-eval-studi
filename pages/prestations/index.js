import Link from 'next/link';
import React from 'react';
import PrestaCard from '../../components/PrestaCard/PrestaCard';
import styles from '../../styles/prestations/prestations.module.scss';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';

export default function Prestations(props) {

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>PRESTATIONS | Charles Cantin - Photographe</title>
                <meta name="description" content="Photographe professionnel, retrouvez mes différentes prestations et tarifs, mes offres sur mesures pour vos événements, adaptées à vos besoins." />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                {/* Open Graph meta for Facebook */}
                <meta property="og:title" content="PRESTATIONS | Charles Cantin - Photographe" />
                <meta property="og:url" content="https://charles-cantin.studi.auxseen.com/" />
                <meta property="og:image" content="https://charles-cantin.studi.auxseen.com/resources/homeOg.png" />
                <meta property="og:description" content="Photographe professionnel, retrouvez mes différentes prestations et tarifs, mes offres sur mesures pour vos événements, adaptées à vos besoins." />
                <meta property="og:site_name" content="Charles Cantin - Photographe" />
                <meta property="og:type" content="website" />
                {/* Card meta for Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ccantin_photo" />
                <meta name="twitter:title" content="PRESTATIONS | Charles Cantin - Photographe" />
                <meta name="twitter:description" content="Photographe professionnel, retrouvez mes différentes prestations et tarifs, mes offres sur mesures pour vos événements, adaptées à vos besoins." />
                <meta name="twitter:image:src" content="https://charles-cantin.studi.auxseen.com/resources/homeOg.png" />
            </Head>
            <main className={styles.presta}>
                <h1>PRESTATIONS</h1>
                <ul className={styles.prestaList}>
                    {
                        props.prestations.map((prestation) => (
                            <li key={prestation.file}>
                                <Link href={'/prestations/' + prestation.file}>
                                    <a>
                                        <PrestaCard
                                            prestaPicture={prestation.data.picture}
                                            prestaTitle={prestation.data.title}
                                            prestaContent={prestation.data.subtitle}
                                            prestaFare={prestation.data.fare}
                                        />
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </main>
        </>
    )
}

export async function getStaticProps() {

    const files = fs.readdirSync('data/prestations/', "utf-8");

    const prestations = files.map(file => (
        {
            file: file.split('.')[0],
            data: matter(fs.readFileSync(`./data/prestations/${file}`, 'utf-8')).data
        }
    ));

    return {
        props: {
            prestations
        }
    }
}
