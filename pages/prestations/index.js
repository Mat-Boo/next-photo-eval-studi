import Link from 'next/link';
import React from 'react'
import PrestaCard from '../../components/PrestaCard/PrestaCard'
import styles from '../../styles/prestations/prestations.module.scss'

export default function prestations(props) {
    return (
        <div className={styles.presta}>
            <ul className={styles.prestaList}>
                {
                    props.categories.map((category) => (
                        category.slug==='bapteme' ? null :
                        <li key={category.slug}>
                            <Link href={'/prestations/' + category.prestation.slugPresta}>
                            <a>
                                <PrestaCard
                                    prestaCategory={category.slug}
                                    prestaTitle={category.prestation.title}
                                    prestaContent={category.prestation.content}
                                    prestaFare={category.prestation.fare}
                                />
                            </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export async function getStaticProps() {

    const data = await import('../../data/data.json');
    const categories = data.categories;

    return {
        props: {
            categories
        }
    }
}
