import React, {useContext, useState} from 'react';
import styles from '../../styles/prestations/prestation.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { DataContext } from '../../context/context';

export default function Prestation(props) {
    
   /*  const {data, modifyData } = useContext(DataContext);
    console.log(data)

    const [prestaContact, setPrestaContact] = useState('');

    modifyData = () => {
        setPrestaContact(props.selectedCategory.prestation.title)
    } */


    return (
        <div className={styles.prestation}>
            <h2>{props.selectedCategory.prestation.title}</h2>
            <div className={styles.prestaDescr}>
                <div className={styles.description}>
                    <div className={styles.titleAndDescr}>
                        <h3>- Description -</h3>
                        <h5>{props.selectedCategory.prestation.content}</h5>
                        <p>{props.selectedCategory.prestation.description}</p>
                    </div>
                    <div  className={styles.silhouette}>
                        <Image src={'/resources/silhouette/'+ props.selectedCategory.slug + '.svg'} alt='clipartPresta' width='150' height='150'/>
                    </div>
                </div>
                <div className={styles.pictureAndInfos}>
                    <div className={styles.picture}>
                        <Image src={'/resources/gallery/' + props.selectedCategory.slug + '/' + props.selectedCategory.slug + '-0001.jpg'} alt={props.selectedCategory.slug + 'Picture'} width='1920' height='1280'/>
                    </div>
                    <div className={styles.infos}>
                        <div className={styles.titleAndFare}>
                            <h3>- Informations complémentaires -</h3>
                            <span className={styles.fare}>{props.selectedCategory.prestation.fare + (isNaN(props.selectedCategory.prestation.fare) ? '' : ' €')}</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Justo nec ultrices dui sapien eget. Eget felis eget nunc lobortis mattis. Sed elementum tempus egestas sed sed risus. Magna sit amet purus gravida quis blandit turpis.</p>
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
    const slug = context.params.prestation;
    const data = await import('../../data/data.json');
    const selectedCategory = data.categories.find(category => category.prestation.slugPresta === slug);

    return {
        props: {
            selectedCategory
        }
    }
}

export async function getStaticPaths() {
    const data = await import('../../data/data.json');

    const paths = data.categories.map(item => (
        {
            params: {prestation: item.prestation.slugPresta}
        }
    ))

    return {
        paths,
        fallback: false
    }
}
