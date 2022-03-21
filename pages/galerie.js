import React, { useEffect, useRef, useState } from 'react';
import CategorySelect from '../components/CategorySelect/CategorySelect';
import PictureGallery from '../components/PictureGallery/PictureGallery';
import styles from '../styles/galerie.module.scss';

export default function galerie(props) {

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [displayCancelFilter, setDisplayCancelFilter] = useState(false);

    const categoriesListRef = useRef();  

    const cancelBtnRef = useRef()
    
    useEffect(() => {
        setSelectedCategory(props.categories)
    }, [])

    const handlerCategory = (e) => {
        categoriesListRef.current.childNodes.forEach((item) => {
            item.childNodes[0].style.background='#E8E9E9';
            item.childNodes[0].style.color='#47555E';
        })
        e.target.style.background='#47555E';
        e.target.style.color='#E8E9E9';
        setDisplayCancelFilter(true);
        props.categories.forEach((category) => {
            if (category.slug === e.target.id) {
                setSelectedCategory([]);
                setSelectedCategory(selectedCategory => [...selectedCategory, category]);
            }
        })
    }

    const handlerAllCategory = () => {
        categoriesListRef.current.childNodes.forEach((item) => {
            item.childNodes[0].style.background='#E8E9E9';
            item.childNodes[0].style.color='#47555E';
        })
        setDisplayCancelFilter(false);
        setSelectedCategory(props.categories);
    }
   
    return (
        <div className={styles.gallery}>
            <ul ref={categoriesListRef} className={styles.categoriesList}>
                {
                    props.categories.map((category) => (
                        <li key={category.slug}>
                            <CategorySelect handlerCategory={handlerCategory} categorySlug={category.slug} categoryName={category.name}/>
                        </li>
                    ))
                }
            </ul>
            {
                displayCancelFilter && (
                    <span ref={cancelBtnRef} onClick={() => handlerAllCategory()} className={styles.allCategory}>Annuler le filtre</span>
                )
            }
            <PictureGallery categories={selectedCategory} />
        </div>
    )
}

export async function getStaticProps() {

    const data = await import('../data/data.json');
    const categories = data.categories;

    return {
        props: {
            categories
        }
    }
}

