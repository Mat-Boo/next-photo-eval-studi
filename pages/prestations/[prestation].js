import React from 'react';
import styles from '../../styles/prestations/prestation.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import { useDispatch } from 'react-redux'
import { updatePresta } from '../../redux/redux';
import Head from 'next/head';

export default function Prestation(props) {

    const dispatch = useDispatch();
    const stockInStore = () => {
        dispatch(updatePresta(props.slug.prestation))
    }
    
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{props.data.title.toUpperCase()} | Charles Cantin - Photographe</title>
                <meta name="description" content="Photographe professionnel, retrouvez les détails de chacunes de mes prestations et contactez moi directement." />
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph meta for Facebook */}
                <meta property="og:title" content={props.data.title.toUpperCase() + " | Charles Cantin - Photographe"} />
                <meta property="og:url" content="https://c-cantin-photo.netlify.app/" />
                <meta property="og:image" content="https://c-cantin-photo.netlify.app/resources/homeOg.png" />
                <meta property="og:description" content="Photographe professionnel, retrouvez les détails de chacunes de mes prestations et contactez moi directement." />
                <meta property="og:site_name" content="Charles Cantin - Photographe" />
                <meta property="og:type" content="website" />
                {/* Card meta for Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ccantin_photo" />
                <meta name="twitter:title" content={props.data.title.toUpperCase() + " | Charles Cantin - Photographe"} />
                <meta name="twitter:description" content="Photographe professionnel, retrouvez les détails de chacunes de mes prestations et contactez moi directement." />
                <meta name="twitter:image:src" content="https://c-cantin-photo.netlify.app/resources/homeOg.png" />
            </Head>
            <div className={styles.prestation}>
                <h1>{props.data.title.toUpperCase()}</h1>
                <div className={styles.prestaDescr}>
                    <div className={styles.description}>
                        <div className={styles.titleAndDescr}>
                            <h3>- Description -</h3>
                            <h5>{props.data.subtitle}</h5>
                            <p>{props.data.description}</p>
                        </div>
                        <div  className={styles.silhouette}>
                            <Image src={props.data.clipart} alt='clipartPresta' width='150' height='150'/>
                        </div>
                    </div>
                    <div className={styles.picture}>
                        <Image src={props.data.picture} alt={props.data.title + 'Picture'} width='1920' height='1280'/>
                    </div>
                    <div className={styles.infos}>
                        <div className={styles.titleAndFare}>
                            <h3>- Informations complémentaires -</h3>
                            <span className={styles.fare}>{props.data.fare + (isNaN(props.data.fare) ? '' : ' €')}</span>
                        </div>
                        <p>{props.data.infosSup}</p>
                        <Link href='/contact'>
                            <a className={styles.contactBtn} onClick={() => stockInStore()} >Contactez-moi pour cette prestation</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    const slug = context.params
    const prestationMd = fs.readFileSync(`./data/prestations/${slug.prestation}.md`, 'utf-8');
    const {content,data} = matter(prestationMd);

    if (!data) {
        return {
          notFound: true,
        };
      }

    return {
        props: {
            slug,
            content, 
			data
        }
    }
}

export async function getStaticPaths() {
    // On lit le contenu du dossier
    const files = fs.readdirSync('data/prestations/', "utf-8");

    // on récupère tous les fichiers markdown dans ce dossier et on génère les paths et on les retourne à la fin de la fonction.
	const paths = files.map(file =>  (
        {
            params : {prestation: file.split('.')[0]}
        }
    ));
    
		return {
            paths,
            fallback: false
        }
}
