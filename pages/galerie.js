import React, { useEffect, useRef, useState } from 'react';
import CategorySelect from '../components/CategorySelect/CategorySelect';
import PictureGallery from '../components/PictureGallery/PictureGallery';
import styles from '../styles/galerie.module.scss';
import fs from 'fs';
import matter from 'gray-matter';

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
        <div className={styles.gallery}>
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

