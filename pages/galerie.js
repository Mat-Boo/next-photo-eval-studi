import React, { useEffect, useRef, useState } from 'react';
import CategorySelect from '../components/CategorySelect/CategorySelect';
import PictureGallery from '../components/PictureGallery/PictureGallery';
import styles from '../styles/galerie.module.scss';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';

export default function Gallery(props) {

    const [selectedGallery, setSelectedGallery] = useState([]);
    const [displayCancelFilter, setDisplayCancelFilter] = useState(false);

    const categoriesListRef = useRef();  

    const cancelBtnRef = useRef()
    
    useEffect(() => {
        setSelectedGallery(props.galleries)
    }, [props.galleries])

    const handlerCategory = (e) => {
        categoriesListRef.current.childNodes.forEach((item) => {
            item.childNodes[0].style.background='#E8E9E9';
            item.childNodes[0].style.color='#47555E';
        })
        e.target.style.background='#47555E';
        e.target.style.color='#E8E9E9';
        setDisplayCancelFilter(true);
        props.galleries.forEach((gallery) => {
            if (gallery.file === e.target.id) {
                setSelectedGallery([]);
                setSelectedGallery(selectedGallery => [...selectedGallery, gallery]);
            }
        })
    }

    const handlerAllCategories = () => {
        categoriesListRef.current.childNodes.forEach((item) => {
            item.childNodes[0].style.background='#E8E9E9';
            item.childNodes[0].style.color='#47555E';
        })
        setDisplayCancelFilter(false);
        setSelectedGallery(props.galleries);
    }
  
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GALERIE | Charles Cantin - Photographe</title>
                <meta name="description" content="Photographe professionnel, découvrez ma galerie photos de portrait, d'événement tels que les baptêmes ou mariages, en couple ou en famille, pendant votre grossesse ou avec votre bébé." />
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph meta for Facebook */}
                <meta property="og:title" content="GALERIE | Charles Cantin - Photographe" />
                <meta property="og:url" content="https://c-cantin-photo.netlify.app/" />
                <meta property="og:image" content="https://c-cantin-photo.netlify.app/resources/homeOg.png" />
                <meta property="og:description" content="Photographe professionnel, découvrez ma galerie photos de portrait, d'événement tels que les baptêmes ou mariages, en couple ou en famille, pendant votre grossesse ou avec votre bébé." />
                <meta property="og:site_name" content="Charles Cantin - Photographe" />
                <meta property="og:type" content="website" />
                {/* Card meta for Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ccantin_photo" />
                <meta name="twitter:title" content="GALERIE | Charles Cantin - Photographe" />
                <meta name="twitter:description" content="Photographe professionnel, découvrez ma galerie photos de portrait, d'événement tels que les baptêmes ou mariages, en couple ou en famille, pendant votre grossesse ou avec votre bébé." />
                <meta name="twitter:image:src" content="https://c-cantin-photo.netlify.app/resources/homeOg.png" />
            </Head>
            <div className={styles.gallery}>
                <h1>{selectedGallery.length > 1 || selectedGallery[0] === undefined ? 'GALERIE' : 'GALERIE - ' + selectedGallery[0].data.category}</h1>
                <ul ref={categoriesListRef} className={styles.categoriesList}>
                    {
                        props.galleries.map((gallery) => (
                            <li key={gallery.file}>
                                <CategorySelect handlerCategory={handlerCategory} categoryId={gallery.file} categoryName={gallery.data.category}/>
                            </li>
                        ))
                    }
                </ul>
                {
                    displayCancelFilter && (
                        <span ref={cancelBtnRef} onClick={() => handlerAllCategories()} className={styles.allCategories}>Annuler le filtre</span>
                    )
                }
                <ul className={styles.galleriesList}>
                    {
                        selectedGallery.map((gallery) => {
                            return (
                                <li key={gallery.file}>
                                    <PictureGallery gallery={gallery} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>                              
        </>
    )
}

export async function getStaticProps() {

    const files = fs.readdirSync('data/galleries/', 'utf-8');
    const galleries = files.map(file =>  (
        {
            file: file.split('.')[0],
            data: matter(fs.readFileSync(`./data/galleries/${file}`, 'utf-8')).data
        }
    ));

    return {
        props: {
            galleries
        }
    }
}

