import Link from 'next/link';
import React from 'react';
import PrestaCard from '../../components/PrestaCard/PrestaCard';
import styles from '../../styles/prestations/prestations.module.scss';
import fs from 'fs';
import matter from 'gray-matter'

export default function Prestations(props) {
    console.log(props)
    return (
        <div className={styles.presta}>
            <ul className={styles.prestaList}>
                {
                    props.prestations.map((prestation) => (
                        /* prestation.slug==='bapteme' ? null : */
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
        </div>
    )
}

export async function getStaticProps() {

    const files = fs.readdirSync('data/prestations/', "utf-8");
    const test = [];

    const prestations = files.map(file =>  (
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

    /* const data = await import('../../data/data.json');
    const categories = data.categories;

    return {
        props: {
            categories
        }
    } */
}
