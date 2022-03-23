import React from 'react';
import styles from '../../styles/prestations/prestation.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import { useDispatch } from 'react-redux'
import { updatePresta } from '../../redux/redux';

export default function Prestation(props) {

    const dispatch = useDispatch();
    const stockInStore = () => {
        dispatch(updatePresta(props.slug.prestation))
    }
    
    return (
        <div className={styles.prestation}>
            <h2>{props.data.title}</h2>
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
    )
}

export async function getStaticProps(context) {
    const slug = context.params
    const prestationMd = fs.readFileSync(`./data/prestations/${slug.prestation}.md`, 'utf-8');
    const {content,data} = matter(prestationMd);

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
