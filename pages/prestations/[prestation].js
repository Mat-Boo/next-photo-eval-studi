import React, {useContext, useState} from 'react';
import styles from '../../styles/prestations/prestation.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { DataContext } from '../../context/context';
import fs from 'fs';
import matter from 'gray-matter'

export default function Prestation(props) {
    
   /*  const {data, modifyData } = useContext(DataContext);
    console.log(data)

    const [prestaContact, setPrestaContact] = useState('');

    modifyData = () => {
        setPrestaContact(props.selectedCategory.prestation.title)
    } */

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
                <div className={styles.pictureAndInfos}>
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
                            <a className={styles.contactBtn}>Contactez-moi pour cette prestation</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {

    const prestationMd = fs.readFileSync(`./data/prestations/${context.params.prestation}.md`, 'utf-8');
    const {content,data} = matter(prestationMd);

    return {
        props: {
            content, 
			data
        }
    }

    /* const slug = context.params.prestation;
    const data = await import('../../data/data.json');
    const selectedCategory = data.categories.find(category => category.prestation.slugPresta === slug);

    return {
        props: {
            selectedCategory
        }
    } */
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


    /* const data = await import('../../data/data.json');

    const paths = data.categories.map(item => (
        {
            params: {prestation: item.prestation.slugPresta}
        }
    ))

    return {
        paths,
        fallback: false
    } */
}
